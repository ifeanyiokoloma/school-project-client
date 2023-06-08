import { Stack, TextField } from "@mui/material";
import React, { useContext } from "react";
import { SearchContext } from "../Providers/SearchProvider";
import { StudentContext } from "../Providers/StudentProvider";

const Search = () => {
  const { setSearch } = useContext(SearchContext);
  const { fetchStudents } = useContext(StudentContext);

  const handleChange = e => {
    e.preventDefault();

    const searchValue = e.target.value;

    setSearch(searchValue);

    fetchStudents();
  };

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        id="search"
        label="Search for student"
        variant="filled"
        type="search"
        onChange={handleChange}
        spellCheck="false"
      />
    </Stack>
  );
};

export default Search;
