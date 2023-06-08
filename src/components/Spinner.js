import { Backdrop, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { UtilitiesContext } from "../Providers/UtilitiesProvider";

const Spinner = () => {
  const { spinner } = useContext(UtilitiesContext);
  return (
      <Backdrop
        sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
        open={spinner}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  );
};

export default Spinner;
