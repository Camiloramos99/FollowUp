import { createContext, useContext, useState  } from "react";

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState('/');

    return (
        <NavBarContext.Provider value={{ activeLink, setActiveLink }} >
            {children}
        </NavBarContext.Provider>
    );
};

export function useNavbar() {
    return useContext(NavBarContext);
  };