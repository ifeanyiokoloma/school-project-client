import { Box, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import DrawerAppBar from "../components/Navbar";
import axios from "axios";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  justify-content: center;
`;

const Students = () => {
  const [student, setStudent] = useState("");
  
  async function getData(url) {
    try {
      const resp = await axios({ method: "get", url });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData("/list");
  }, []);

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
