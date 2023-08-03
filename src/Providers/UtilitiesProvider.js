import { createContext, useState } from "react";
import {
  authenticate,
  restartSession,
} from "../components/Faceio";

export const UtilitiesContext = createContext("");

const UtilitiesProvider = ({ children }) => {
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({});

  const signin = async () => {
    const user = await authenticate();
    console.log(user);
    setUser(user);
  };

  const signout = async () => {
    const response = await restartSession();
    console.log(response);
    setIsSignedIn(false);
  };

  const stopSpinner = () => {
    setSpinner(false);
  };

  const startSpinner = () => {
    setSpinner(true);
  };

  return (
    <UtilitiesContext.Provider
      value={{
        spinner,
        startSpinner,
        stopSpinner,
        loading,
        setLoading,
        isSignedIn,
        signin,
        signout,
        user,
        setIsSignedIn
      }}
    >
      {children}
    </UtilitiesContext.Provider>
  );
};

export default UtilitiesProvider;
