import React, { createContext, useState, useEffect } from 'react';
import { use } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const defaultCalendarData = [
        { date: '2025-01-01', count: 3, description: 'Push Ups: 3 x 15' }
    ];

    const [isChecked, setIsChecked] = useState(false);

    const [selectedDate, setSelectedDate] = useState();

    const [selectedYear, setSelectedYear ] = useState(new Date().getFullYear());

    const [currentDescription, setCurrentDescription ] = useState('');

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
    
            if (!found) {
                newData.push({
                    date,
                    count: isChecked ? 3 : 0, 
                    description: description.value || ''
                });
            } else {
                if (isChecked) {
                    found.count = 3;
                    found.description = description.value || '';
                } else {
                    found.count = 0;
                    found.description = description.value || '';
                }
            }
    
            saveHabitInLocalStorage(newData); 
            return newData;
        });
    };
    

    function saveHabitInLocalStorage(calendarData) {
        localStorage.setItem('habitos', JSON.stringify(calendarData));
    }
    
    return (
        <AppContext.Provider value={{ selectedDate, setSelectedDate, setCalendarData, calendarData, saveHabit, isChecked, setIsChecked, currentDescription, setCurrentDescription, selectedYear, setSelectedYear }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
