import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const defaultCalendarData = [
    { date: '2025-01-01', count: 3, description: 'Push Ups: 3 x 15' }
  ];

  const [isChecked, setIsChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentDescription, setCurrentDescription] = useState('');
  const [calendarData, setCalendarData] = useState(() => {
    const storedData = localStorage.getItem('habitos');
    return storedData ? JSON.parse(storedData) : defaultCalendarData;
  });
  const [calendarTitleText, setCalendarTitleText] = useState(() => {
    const storedTitle = localStorage.getItem('calendarTitleText');
    return storedTitle ? storedTitle : "Edit your habit title";
  });

  useEffect(() => {
    localStorage.setItem('habitos', JSON.stringify(calendarData));
    localStorage.setItem('calendarTitleText', calendarTitleText);
  }, [calendarData, calendarTitleText]);

  const saveHabit = (date, isChecked) => {
    setCalendarData(prevData => {
      const newData = [...prevData];
      const found = newData.find(d => d.date === date);

      if (!found) {
        newData.push({
          date,
          count: isChecked ? 3 : 0,
          description: currentDescription || ''
        });
      } else {
        if (isChecked) {
          found.count = 3;
          found.description = currentDescription || '';
        } else {
          found.count = 0;
          found.description = currentDescription || '';
        }
      }

      return newData;
    });
  };

  return (
    <AppContext.Provider
      value={{
        selectedDate, setSelectedDate,
        setCalendarData, calendarData,
        saveHabit, isChecked, setIsChecked,
        currentDescription, setCurrentDescription,
        selectedYear, setSelectedYear,
        calendarTitleText, setCalendarTitleText
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
