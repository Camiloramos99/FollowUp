import React, { createContext, useState, useEffect, useContext } from "react";
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useUser } from "./UserContext";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { user } = useUser();

  const defaultCalendarData = [
    { date: "2025-01-01", count: 3, description: "Push Ups: 3 x 15" },
  ];

  const [isChecked, setIsChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentDescription, setCurrentDescription] = useState("");
  const [calendarData, setCalendarData] = useState(defaultCalendarData);
  const [calendarTitleText, setCalendarTitleText] = useState("Edit your habit title");
  const [loadingHabits, setLoadingHabits] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoadingHabits(true);

      if (user) {
        try {
          const querySnapshot = await getDocs(collection(db, "users", user.uid, "habits"));
          const userHabits = querySnapshot.docs.map((doc) => doc.data());
          if (userHabits.length > 0) {
            setCalendarData(userHabits);
          } else {
            setCalendarData(defaultCalendarData);
          }

          const storedTitle = localStorage.getItem("calendarTitleText");
          setCalendarTitleText(storedTitle || "Edit your habit title");
        } catch (error) {
          setCalendarData(defaultCalendarData);
        }
      } else {
        //  Guest Mode
        const storedData = localStorage.getItem("habitos");
        const storedTitle = localStorage.getItem("calendarTitleText");
        setCalendarData(storedData ? JSON.parse(storedData) : defaultCalendarData);
        setCalendarTitleText(storedTitle || "Edit your habit title");
      }

      setLoadingHabits(false);
    };

    loadData();
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
      console.error("❌ Error guardando hábito en Firestore:", error);
    }
  };

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
