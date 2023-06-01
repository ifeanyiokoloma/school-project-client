import React, { createContext } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(prevState => !prevState);
    };
  return (
    <NavbarContext.Provider value={{ handleDrawerToggle, mobileOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
