import { Box, Typography, styled } from "@mui/material";
import React from "react";
import DrawerAppBar from "../components/Navbar";

const Students = () => {
  const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
    justify-content: center;
  `;
  return (
    <>
      <DrawerAppBar />
      <StyledBox>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            textTransform: "uppercase",
          }}
        >
          Students List
        </Typography>
      </StyledBox>
    </>
  );
};

export default Students;
