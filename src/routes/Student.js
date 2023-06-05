// import react from "react";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import DrawerAppBar from "../components/Navbar";
import { Delete } from "@mui/icons-material";
import axios from "axios";

const StyledProfile = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;

  .imgFrame {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .passport {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 600px) {
    .imgFrame {
      width: 300px;
    }

    .capture {
      width: 300px;
    }
  }
`;

const Student = () => {
  const student = useLoaderData();
  const { regno } = useParams();
  const navigate = useNavigate();

  const handleDeleteUser = async e => {
    try {
      const resp = await axios({
        method: "delete",
        url: `/students/${regno}`,
      });
      console.log(resp);
      navigate("/list", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const {
    _id,
    fname,
    mname,
    sname,
    studentClass,
    hostel,
    dob,
    regdate,
    imgSrc,
  } = student;

  return (
    <Container maxWidth="md">
      <StyledProfile>
        <DrawerAppBar />
        <Box className="imgFrame">
          <img
            key={_id}
            src={imgSrc}
            alt={`${fname} ${sname}`}
            className="passport"
          />
        </Box>
        <Stack mb={5} spacing={4}>
          <Typography variant="h4" textAlign="center" component="h1">
            {student.fname} {student.sname}
          </Typography>

          <List>
            <Stack direction={{ sm: "row" }}>
              <ListItem>
                <ListItemText primary={fname} secondary="First Name" />
              </ListItem>
              <ListItem>
                <ListItemText primary={mname} secondary="Middle Name" />
              </ListItem>
              <ListItem>
                <ListItemText primary={sname} secondary="Surname" />
              </ListItem>
            </Stack>
            <Stack direction={{ sm: "row" }}>
              <ListItem>
                <ListItemText
                  primary={student.regno}
                  secondary="Registration Number"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary={studentClass} secondary="Class" />
              </ListItem>
              <ListItem>
                <ListItemText primary={hostel} secondary="Hostel" />
              </ListItem>
            </Stack>
            <Stack direction={{ sm: "row" }}>
              <ListItem>
                <ListItemText
                  primary={`${new Date(regdate).getDate()} ${new Date(
                    regdate
                  ).toLocaleString("default", {
                    month: "long",
                  })} ${new Date(regdate).getFullYear()}`}
                  secondary="Registration Date"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`${new Date(dob).getDate()} ${new Date(
                    dob
                  ).toLocaleString("default", { month: "long" })} ${new Date(
                    dob
                  ).getFullYear()}`}
                  secondary="Date of Birth"
                />
              </ListItem>
            </Stack>
          </List>
          <Button
            onClick={handleDeleteUser}
            color="error"
            variant="contained"
            startIcon={<Delete />}
          >
            Delete User
          </Button>
        </Stack>
      </StyledProfile>
    </Container>
  );
};

export default Student;
