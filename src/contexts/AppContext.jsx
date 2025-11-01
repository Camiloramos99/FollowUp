import React, { createContext, useState, useEffect, useContext } from "react";
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useUser } from "./UserContext";
import { toast } from "react-toastify";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { user, loadingUser } = useUser();

  const defaultCalendarData = [
    { date: "2025-01-01", count: 3, description: "Push Ups: 3 x 15" },
  ];

  const [isChecked, setIsChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentDescription, setCurrentDescription] = useState("");
  const [calendarData, setCalendarData] = useState(null);
  const [calendarTitleText, setCalendarTitleText] = useState("Edit your habit title");
  const [loadingHabits, setLoadingHabits] = useState(true);
  const [initialized, setInitialized] = useState(false);

useEffect(() => {
  const loadData = async () => {
    setLoadingHabits(true);

    try {
      let data = [];
      let title = "Edit your habit title";

      if (loadingUser) {
        //  Firebase has not yet finished verifying if there is a user
        return;
      }

      if (user) {
        //  We tried to retrieve data from Firestore
        const querySnapshot = await getDocs(collection(db, "users", user.uid, "habits"));
        const userHabits = querySnapshot.docs.map((doc) => doc.data());
        data = userHabits.length > 0 ? userHabits : defaultCalendarData;

        const storedTitle = localStorage.getItem("calendarTitleText");
        title = storedTitle || title;
      } else {
        //  If there is no user, we use localStorage
        const storedData = localStorage.getItem("habitos");
        const storedTitle = localStorage.getItem("calendarTitleText");

        data = storedData ? JSON.parse(storedData) : defaultCalendarData;
        title = storedTitle || title;
      }

      setCalendarData(data || []);
      setCalendarTitleText(title);
    } catch (error) {

      const fallbackData = localStorage.getItem("habitos");
      const fallbackTitle = localStorage.getItem("calendarTitleText");

      setCalendarData(fallbackData ? JSON.parse(fallbackData) : defaultCalendarData);
      setCalendarTitleText(fallbackTitle || "Edit your habit title");
    } finally {
      setLoadingHabits(false);
      setInitialized(true);
    }
  };

  if (user !== undefined) {
    loadData();
  }
}, [user]);


  const saveHabit = async (date, isChecked) => {
    const newHabit = {
      date,
      count: isChecked ? 3 : 0,
      description: currentDescription || "",
      createdAt: new Date().toISOString(),
    };

    setCalendarData((prevData) => {
      const found = prevData.find((d) => d.date === date);
      if (found) {
        return prevData.map((d) => (d.date === date ? newHabit : d));
      }
      return [...prevData, newHabit];
    });

    if (!user) {
      const stored = JSON.parse(localStorage.getItem("habitos") || "[]");
      const index = stored.findIndex((d) => d.date === date);

      if (index >= 0) stored[index] = newHabit;
      else stored.push(newHabit);

      localStorage.setItem("habitos", JSON.stringify(stored));
      localStorage.setItem("calendarTitleText", calendarTitleText);
      return;
    }

    try {
      const habitsRef = collection(db, "users", user.uid, "habits");
      const q = query(habitsRef, where("date", "==", date));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = doc(db, "users", user.uid, "habits", querySnapshot.docs[0].id);
        await updateDoc(docRef, newHabit);
      } else {
        await addDoc(habitsRef, newHabit);
      }
    } catch (error) {
        toast.error("Error saving habit. Please try again.");
    }
  };

  if (!initialized) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        calendarData,
        setCalendarData,
        saveHabit,
        isChecked,
        setIsChecked,
        currentDescription,
        setCurrentDescription,
        selectedYear,
        setSelectedYear,
        calendarTitleText,
        setCalendarTitleText,
        loadingHabits,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
export { AppContext, AppProvider };
