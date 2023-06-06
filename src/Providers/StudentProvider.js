import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { SearchContext } from "./SearchProvider";

export const StudentContext = createContext("");

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [studentsErr, setStudentsErr] = useState([]);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    async function fetchData() {
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
    }

    fetchData();
  }, [search]);

  return (
    <StudentContext.Provider value={{ students, setStudents, studentsErr }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
