import { createContext } from "react";

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {

    return (
        <NavBarContext.Provider value={{}} >
            {children}
        </NavBarContext.Provider>
    );
};
