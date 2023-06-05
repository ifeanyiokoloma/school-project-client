import { Box, Container, Stack, Typography, styled } from "@mui/material";
import DrawerAppBar from "../components/Navbar";
import { Link, useLoaderData } from "react-router-dom";

const StyledBox = styled(Stack)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  justify-content: center;
`;

const List = () => {
  const students = useLoaderData();

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
          <Stack spacing={2} component="ul">
            {students.map(student => (
              <Box key={student._id}>
                <Typography component="li">
                  <Link to={`/students/${student.regno}`}>
                    <b>{`${student.fname} ${student.mname} ${student.sname}`}</b>
                  </Link>
                </Typography>
              </Box>
            ))}
          </Stack>
        </StyledBox>
      </Container>
    </>
  );
};

export default List;
