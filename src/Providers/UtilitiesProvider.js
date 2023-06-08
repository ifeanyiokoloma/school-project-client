import { createContext, useState } from "react";

export const UtilitiesContext = createContext("");

const UtilitiesProvider = ({ children }) => {
  const [spinner, setSpinner] = useState(false);

  const stopSpinner = () => {
    setSpinner(false);
  };

  const startSpinner = () => {
    setSpinner(true);
  };

  return (
    <UtilitiesContext.Provider
      value={{ spinner, startSpinner, stopSpinner }}
    >
      {children}
    </UtilitiesContext.Provider>
  );
};

export default UtilitiesProvider;
