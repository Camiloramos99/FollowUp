import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const defaultCalendarData = [
        { date: '2024-01-01', count: 3, description: 'Push Ups: 3 x 15' }
    ];

    const [selectedDate, setSelectedDate] = useState();

    const [calendarData, setCalendarData] = useState(defaultCalendarData);


    useEffect(() => {
        const storedData  = localStorage.getItem('habitos');
        if (storedData) {
            setCalendarData(JSON.parse(storedData));
          } 
    }, []);

    const saveHabit = (date, isChecked) => {
        setCalendarData(prevData => {
            const newData = [...prevData];
            const found = newData.find(d => d.date === date);
            if(!found) {
                newData.push({ 
                    date, 
                    count: isChecked? 3 : 0, 
                    description: description.value || ''
                });
            } else {
                found.description = description.value || '';
            }
            
            saveHabitInLocalStorage(newData);
            return newData;
        } )
    }

    function saveHabitInLocalStorage(calendarData) {
        localStorage.setItem('habitos', JSON.stringify(calendarData));
    }
    
    return (
        <AppContext.Provider value={{ selectedDate, setSelectedDate, setCalendarData, calendarData, saveHabit }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
