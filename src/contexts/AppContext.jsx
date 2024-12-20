import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState();

    const [calendarData, setCalendarData] = useState([
        { date: '2024-01-01', count: 1 },
        { date: '2024-01-06', count: 1 },
        { date: '2024-12-31', count: 1 },
        { date: '2024-10-10', count: 1 },
        { date: '2024-07-30', count: 3 },
        { date: '2024-07-07', count: 3 },
    ]);

    const markDayAsCompleted = (date) => {
        setCalendarData(prevData => {
            const newData = [...prevData];
            const notFound = newData.find(d => d.date !== date);
            if (notFound) {
                newData.push({ date, count: 1 });
            }
            return newData;
        } )
    }

    return (
        <AppContext.Provider value={{ selectedDate, setSelectedDate, setCalendarData, calendarData, markDayAsCompleted }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
