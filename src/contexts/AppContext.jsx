import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState();

    return (
        <AppContext.Provider value={{ selectedDate, setSelectedDate }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
