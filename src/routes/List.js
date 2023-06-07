import { Box, Container, Stack, Typography, styled } from "@mui/material";
import DrawerAppBar from "../components/Navbar";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useContext } from "react";
import { StudentContext } from "../Providers/StudentProvider";

const StyledBox = styled(Stack)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  justify-content: center;
  align-items: center;
`;

const List = () => {
  const { students } = useContext(StudentContext);

  return (
    <>
      <DrawerAppBar />
      <Container maxWidth="sm">
        <StyledBox spacing={4}>
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
        </StyledBox>
      </Container>
    </>
  );
};

export default List;
