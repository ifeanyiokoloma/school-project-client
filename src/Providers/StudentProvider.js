import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext("");

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getData(url) {
      try {
        const resp = await axios({ method: "get", url });
        setStudents(resp.data.list);
      } catch (err) {
        console.log(err);
      }
    }
    
    getData("/list");
  }, []);

  return (
    <StudentContext.Provider value={{ students }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
