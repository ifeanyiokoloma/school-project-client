import React, { useContext } from "react";
import { UtilitiesContext } from "../Providers/UtilitiesProvider";
import { Box, Button } from "@mui/material";

const Exit = () => {
  const { signout } = useContext(UtilitiesContext);
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button variant="contained" onClick={signout} size="large">
        Exit
      </Button>
    </Box>
  );
};

export default Exit;
