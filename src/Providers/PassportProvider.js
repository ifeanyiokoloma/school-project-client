import { createContext, useCallback, useRef, useState } from "react";

export const PassportContext = createContext("");

const PassportProvider = ({ children }) => {
  const [imgSrc, setImgSrc] = useState("");

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);
  return (
    <PassportContext.Provider value={{ imgSrc, setImgSrc, capture, webcamRef }}>
      {children}
    </PassportContext.Provider>
  );
};

export default PassportProvider;
