import { Stack, TextField } from "@mui/material";
import React, { useContext } from "react";
import { SearchContext } from "../Providers/SearchProvider";

const Search = () => {
  const { setSearch } = useContext(SearchContext);

  const handleChange = e => {
    e.preventDefault();

    const searchValue = e.target.value;

    setSearch(searchValue);
  };

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        id="search"
        label="Search for student"
        variant="filled"
        type="search"
        onChange={handleChange}
        spellcheck="false"
      />
    </Stack>
  );
};

export default Search;
