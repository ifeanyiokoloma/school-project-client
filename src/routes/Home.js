import React from "react";
import DrawerAppBar from "../components/Navbar";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;

  @media (min-width: 900px) {
    .hero {
      height: 500px;
    }
  }
`;

const Home = () => {
  return (
    <>
      <DrawerAppBar />
      <StyledBox>
        <Container>
          <Stack spacing={2} className="content">
            <Typography
              variant="h4"
              component="h1"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Students' Register
            </Typography>
            <Box className="hero">
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
          </Stack>
        </Container>
      </StyledBox>
    </>
  );
};

export default Home;
