import { Box, Container, Stack, Typography } from "@mui/material";
import DrawerAppBar from "../components/Navbar";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useContext } from "react";
import { StudentContext } from "../Providers/StudentProvider";
import StyledPage from "../styles/StyledPage";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: 100ms linear;

  &:hover {
    border-bottom: 5px solid;
    color: var(--primary);
  }
`;

const List = () => {
  const { students } = useContext(StudentContext);

  return (
    <>
      <DrawerAppBar />
      <Container maxWidth="sm">
        <StyledPage spacing={4} sx={{ alignItems: "center" }}>
          <Box component="header" className="title">
            <Typography variant="h4" component="h1">
              Students List
            </Typography>
          </Box>
          <Search />
          <Stack spacing={2} component="ul" sx={{ listStyle: "none" }} pl={0}>
            {Array.isArray(students) && students.length >= 1 ? (
              students.map(student => (
                <Box key={student._id}>
                  <Typography component="li" variant="body1">
                    <StyledLink to={`/students/${student.faceID}`}>
                      <b>{`${student.fname} ${student.mname} ${student.sname}`}</b>
                    </StyledLink>
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography component="p">No student in the list</Typography>
            )}
          </Stack>
        </StyledPage>
      </Container>
    </>
  );
};

export default List;
