import { Stack, Typography, Container } from "@mui/material";
import React from "react";
import StyledPage from "../styles/StyledPage";
import DrawerAppBar from "../components/Navbar";

const About = () => {
  return (
    <>
      <DrawerAppBar />
      <Container maxWidth="sm">
        <StyledPage spacing={8}>
          <Stack component="header" className="title" spacing={2}>
            <Typography component="h1" variant="h4">
              FSTC Awka Day Student Verification Software
            </Typography>

            <Typography component="p" variant="body1">
              Project by <b>Ilechukwu Victor</b> with much assistance from{" "}
              <b>Mr Ifeanyi Okoloma</b>
            </Typography>
          </Stack>

          <Stack component="main" spacing={6}>
            <Stack component="header" spacing={2}>
              <Typography component="h2" variant="h5">
                Concept
              </Typography>

              <Typography component="p" variant="body2">
                The day students are to be verified on entering the school
                compound and leaving it
              </Typography>
            </Stack>

            <Stack component="section" spacing={2}>
              <Typography component="h3" variant="h6">
                The program will consist of two parts
              </Typography>
              <Stack component="ul" spacing={2}>
                <Typography component="li">
                  The first part will enable him to enroll new day students into
                  the students registers. The students input their name, class,
                  gender, and add a passport photograph so that they can be
                  recognised by their face.
                </Typography>
                <Typography component="li">
                  The second part is the verification part. If a student is to
                  be verified, his name (or registration number is typed in the
                  program). If this student is verified, the program
                  automatically displays his passport photograph along side his
                  other details, else the program will display the text "NOT A
                  DAY STUDENT" and raise alarm.
                </Typography>
              </Stack>

              <Stack component="section" spacing={2}>
                <Typography component="h3" variant="h6">
                  Conclusion
                </Typography>
                <Typography component="p" variant="body2">
                  While registering a student, if the passport photograph is not
                  available, the program will have a default profile photograph.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </StyledPage>
      </Container>
    </>
  );
};

export default About;
