import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { SearchContext } from "./SearchProvider";
import { UtilitiesContext } from "./UtilitiesProvider";

export const StudentContext = createContext("");

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [studentsErr, setStudentsErr] = useState([]);
  const { search } = useContext(SearchContext);
  const { startSpinner, stopSpinner } = useContext(UtilitiesContext);

  const fetchStudents = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://school-project-server.onrender.com/list?name=${search}`,
      });
      setStudents(data);
    } catch (err) {
      console.log(err);
      setStudentsErr("There was an error, try again");
    }
  };

  useEffect(() => {
    const asyncFetch = async () => fetchStudents();
    startSpinner()
    asyncFetch();
    stopSpinner()
  });

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        studentsErr,
        fetchStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
