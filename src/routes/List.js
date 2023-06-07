import { Box, Container, Stack, Typography } from "@mui/material";
import DrawerAppBar from "../components/Navbar";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useContext } from "react";
import { StudentContext } from "../Providers/StudentProvider";
import StyledPage from "../styles/StyledPage";

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
          <Stack spacing={2} component="ul" pl={0}>
            {Array.isArray(students) && students.length >= 1 ? (
              students.map(student => (
                <Box key={student._id}>
                  <Typography component="li">
                    <Link to={`/students/${student.regno}`}>
                      <b>{`${student.fname} ${student.mname} ${student.sname}`}</b>
                    </Link>
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
