// import react from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import DrawerAppBar from "../components/Navbar";
import { Delete, Edit, Update } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const {
    _id,
    fname,
    mname,
    sname,
    studentClass,
    hostel,
    regdate,
    imgSrc,
  } = student;

  function getSessionStorageOrDefault(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  const [edit, setEdit] = useState(getSessionStorageOrDefault("edit", false));

  const { regno } = useParams();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    gender: "",
    studentClass: "",
    hostel: "",
  });

  useEffect(() => {
    sessionStorage.setItem("edit", JSON.stringify(edit));
  }, [edit]);

  const handleDeleteStudent = async e => {
    try {
      const resp = await axios({
        method: "delete",
        url: `https://school-project-server.onrender.com/students/${regno}`,
      });
      console.log(resp);
      navigate("/list", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const name =
      e.target.querySelector("input").name ||
      e.target.querySelector("select").name;
    const value =
      e.target.querySelector("input").value ||
      e.target.querySelector("select").value;

    const data = {
      [name]: value,
    };

    try {
      await axios({
        method: "patch",
        url: `https://school-project-server.onrender.com/students/${regno}`,
        data,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = e => {
    e.preventDefault();

    if (e.target.name === "gender") {
      setInfo({ ...info, gender: e.target.value });
    }

    if (e.target.name === "class") {
      setInfo({ ...info, studentClass: e.target.value });
    }

    if (e.target.name === "hostel") {
      setInfo({ ...info, hostel: e.target.value });
    }

    if (e.target.name === "dob") {
      setInfo({ ...info, dob: e.target.value });
    }
  };

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
            {fname} {sname}
          </Typography>

          <List>
            <Stack direction={{ sm: "row" }}>
              <ListItem>
                <Stack>
                  {!edit && (
                    <ListItemText primary={fname} secondary="First Name" />
                  )}

                  {edit && (
                    <Stack component="form" onSubmit={handleSubmit} spacing={1}>
                      <TextField
                        name="fname"
                        id="fname"
                        variant="filled"
                        label={fname}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        startIcon={<Update />}
                      >
                        Update
                      </Button>
                    </Stack>
                  )}
                </Stack>
              </ListItem>
              <ListItem>
                {!edit && (
                  <ListItemText primary={mname} secondary="Middle Name" />
                )}

                {edit && (
                  <Stack component="form" onSubmit={handleSubmit} spacing={1}>
                    <TextField
                      name="mname"
                      id="mname"
                      variant="filled"
                      label={mname}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<Update />}
                    >
                      Update
                    </Button>
                  </Stack>
                )}
              </ListItem>
              <ListItem>
                {!edit && <ListItemText primary={sname} secondary="Surname" />}

                {edit && (
                  <Stack component="form" onSubmit={handleSubmit} spacing={1}>
                    <TextField
                      name="sname"
                      id="sname"
                      variant="filled"
                      label={sname}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<Update />}
                    >
                      Update
                    </Button>
                  </Stack>
                )}
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
                {!edit && (
                  <ListItemText primary={studentClass} secondary="Class" />
                )}

                {edit && (
                  <Stack
                    component="form"
                    sx={{ width: "100%" }}
                    onSubmit={handleSubmit}
                    spacing={1}
                  >
                    <FormControl variant="filled" sx={{ width: "100%" }}>
                      <InputLabel id="class-label">{studentClass}</InputLabel>
                      <Select
                        labelId="class-label"
                        id="class"
                        value={info.studentClass}
                        onChange={handleChange}
                        name="class"
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="JS1 A">JS1 A</MenuItem>
                        <MenuItem value="JS1 B">JS1 B</MenuItem>
                        <MenuItem value="JS1 C">JS1 C</MenuItem>
                        <MenuItem value="JS1 D">JS1 D</MenuItem>
                        <MenuItem value="JS1 E">JS1 E</MenuItem>
                        <MenuItem value="JS1 F">JS1 F</MenuItem>
                        <MenuItem value="JS1 G">JS1 G</MenuItem>
                        <MenuItem value="JS1 H">JS1 H</MenuItem>
                        <MenuItem value="JS2 A">JS2 A</MenuItem>
                        <MenuItem value="JS2 B">JS2 B</MenuItem>
                        <MenuItem value="JS2 C">JS2 C</MenuItem>
                        <MenuItem value="JS2 D">JS2 D</MenuItem>
                        <MenuItem value="JS2 E">JS2 E</MenuItem>
                        <MenuItem value="JS2 F">JS2 F</MenuItem>
                        <MenuItem value="JS2 G">JS2 G</MenuItem>
                        <MenuItem value="JS2 H">JS2 H</MenuItem>
                        <MenuItem value="JS3 A">JS3 A</MenuItem>
                        <MenuItem value="JS3 B">JS3 B</MenuItem>
                        <MenuItem value="JS3 C">JS3 C</MenuItem>
                        <MenuItem value="JS3 D">JS3 D</MenuItem>
                        <MenuItem value="JS3 E">JS3 E</MenuItem>
                        <MenuItem value="JS3 F">JS3 F</MenuItem>
                        <MenuItem value="JS3 G">JS3 G</MenuItem>
                        <MenuItem value="JS3 H">JS3 H</MenuItem>
                        <MenuItem value="SS1 A">SS1 A</MenuItem>
                        <MenuItem value="SS1 B">SS1 B</MenuItem>
                        <MenuItem value="SS1 C">SS1 C</MenuItem>
                        <MenuItem value="SS1 D">SS1 D</MenuItem>
                        <MenuItem value="SS2 A">SS2 A</MenuItem>
                        <MenuItem value="SS2 B">SS2 B</MenuItem>
                        <MenuItem value="SS2 C">SS2 C</MenuItem>
                        <MenuItem value="SS2 D">SS2 D</MenuItem>
                        <MenuItem value="SS3 A">SS3 A</MenuItem>
                        <MenuItem value="SS3 B">SS3 B</MenuItem>
                        <MenuItem value="SS3 C">SS3 C</MenuItem>
                        <MenuItem value="SS3 D">SS3 D</MenuItem>
                      </Select>
                    </FormControl>

                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<Update />}
                    >
                      Update
                    </Button>
                  </Stack>
                )}
              </ListItem>

              <ListItem>
                {!edit && <ListItemText primary={hostel} secondary="Hostel" />}

                {edit && (
                  <Stack
                    sx={{ width: "100%" }}
                    component="form"
                    onSubmit={handleSubmit}
                    spacing={1}
                  >
                    <FormControl variant="filled" sx={{ minWidth: "30%" }}>
                      <InputLabel id="hostel-label">{hostel}</InputLabel>
                      <Select
                        labelId="hostel-label"
                        id="hostel"
                        value={info.hostel}
                        onChange={handleChange}
                        name="hostel"
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Ezeuzu">Ezeuzu</MenuItem>
                        <MenuItem value="Enukorah">Enukorah</MenuItem>
                        <MenuItem value="Borishade">Borishade</MenuItem>
                        <MenuItem value="Governor">Governor</MenuItem>
                        <MenuItem value="Unity">Unity</MenuItem>
                      </Select>
                    </FormControl>

                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<Update />}
                    >
                      Update
                    </Button>
                  </Stack>
                )}
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

            </Stack>
          </List>
          <Button
            onClick={() => setEdit(!edit)}
            variant="contained"
            startIcon={edit ? null : <Edit />}
          >
            {edit ? "Done editing" : "Edit Info"}
          </Button>
          <Button
            onClick={handleDeleteStudent}
            color="error"
            variant="contained"
            startIcon={<Delete />}
          >
            Delete Student
          </Button>
        </Stack>
      </StyledProfile>
    </Container>
  );
};

export default Student;
