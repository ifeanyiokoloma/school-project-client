import React from "react";
import DrawerAppBar from "../components/Navbar";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StyledPage from "../styles/StyledPage";

const Home = () => {
  return (
    <>
      <DrawerAppBar />
      <Container>
        <StyledPage spacing={2}>
          <Box component="header" className="title">
            <Typography variant="h4" component="h1">
              Day Students' <br /> Verification Software
            </Typography>
          </Box>
          <Box sx={{ height: "50vh" }}>
            <img src="/images/hero/fstc.jpg" alt="FSTC logo" />
          </Box>
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            component="ul"
            sx={{ listStyle: "none", p: 0 }}
          >
            <li>
              <Link
                to="register"
                className="btn btn-primary w-100 text-uppercase"
              >
                Register Student
              </Link>
            </li>
            <li>
              <Link
                to="list"
                className="btn btn-outline-primary w-100 text-uppercase"
              >
                Students List
              </Link>
            </li>
          </Stack>
        </StyledPage>
      </Container>
    </>
  );
};

export default Home;
