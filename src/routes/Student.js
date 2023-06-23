import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import DrawerAppBar from "../components/Navbar";
import { Circle, Delete, Edit, Update } from "@mui/icons-material";
import { useContext, useState } from "react";
import { StudentContext } from "../Providers/StudentProvider";
import { StyledProfile } from "../styles/StyledProfile";
import { deleteStudent, updateStudent } from "../services/functions";
// import { UtilitiesContext } from "../Providers/UtilitiesProvider";
// import Spinner from "../components/Spinner";

const Student = () => {
  const student = useLoaderData();
  const { fetchStudents } = useContext(StudentContext);
  // const { startSpinner, stopSpinner, spinner } = useContext(UtilitiesContext);
  const { regno } = useParams();
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    gender: "",
    studentClass: "",
    hostel: "",
  });
  const [records, setRecords] = useState(student.records || []);
  const [present, setPresent] = useState(student.present || false);
  const { _id, fname, mname, sname, studentClass, hostel, regdate, imgSrc } =
    student;
  const [activateLogout, setActivateLogout] = useState(false);

  const handleDeleteStudent = async e => {
    await deleteStudent(regno);

    navigate("/list", { replace: true });
    await fetchStudents();
  };

  const handleUpdate = async e => {
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

    await updateStudent(data, regno);
  };

  const handleChange = e => {
    e.preventDefault();

    if (e.target.name === "gender") {
      setInfo({ ...info, gender: e.target.value });
    }

    if (e.target.name === "studentClass") {
      setInfo({ ...info, studentClass: e.target.value });
    }

    if (e.target.name === "hostel") {
      setInfo({ ...info, hostel: e.target.value });
    }
  };

  const updateRecords = () => {
    if (present)
      setRecords([
        ...records,
        {
          status: `marked as "in school"`,
          time: new Date(),
        },
      ]);
    else
      setRecords([
        ...records,
        {
          status: `marked as "left school"`,
          time: new Date(),
        },
      ]);
  };

  const markRegister = async e => {
    e.preventDefault();

    setPresent(!present);
    updateRecords();
    setActivateLogout(true);
  };

  const logout = async () => {
    await updateStudent({ present }, regno);
    await updateStudent({ records }, regno);
    navigate("/list");
  };

  return (
    <Container maxWidth="lg">
      <StyledProfile>
        <DrawerAppBar />

        <Grid spacing={3} container>
          <Grid sm={4} md={3} item>
            <Stack spacing={4}>
              <Stack
                justifyContent="center"
                alignItems="center"
                className="imgFrame"
              >
                <img
                  key={_id}
                  src={imgSrc}
                  alt={`${fname} ${sname}`}
                  className="passport"
                />
              </Stack>
              <Stack spacing={4}>
                <Button
                  onClick={markRegister}
                  variant="contained"
                  color={present === true ? "gray" : "success"}
                  sx={{ color: "white" }}
                >
                  {present === true ? "Mark As Absent" : "Mark As Present"}
                </Button>
                <Stack spacing={2}>
                  <Alert severity="info">
                    Mark register before you can <em>submit and logout</em>
                  </Alert>
                  <Button
                    disabled={!activateLogout}
                    onClick={logout}
                    variant="contained"
                  >
                    Submit And Logout
                  </Button>
                </Stack>

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
            </Stack>
          </Grid>
          <Grid sm={8} md={6} item>
            <Stack spacing={2}>
              <Typography variant="h4" textAlign="center" component="h1">
                {fname} {sname}
              </Typography>
              <Stack direction="row" justifyContent="center" spacing={2}>
                <Typography variant="body1">
                  {present === true
                    ? "You marked as present"
                    : "You are currently not in School"}
                </Typography>
                <Circle color={present === true ? "success" : "gray"} />
              </Stack>
              <Stack mb={5} spacing={4}>
                <List>
                  <Stack direction={{ sm: "row" }}>
                    <ListItem>
                      <Stack>
                        {!edit && (
                          <ListItemText
                            primary={fname}
                            secondary="First Name"
                          />
                        )}

                        {edit && (
                          <Stack
                            component="form"
                            onSubmit={handleUpdate}
                            spacing={1}
                          >
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
                        <Stack
                          component="form"
                          onSubmit={handleUpdate}
                          spacing={1}
                        >
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
                      {!edit && (
                        <ListItemText primary={sname} secondary="Surname" />
                      )}

                      {edit && (
                        <Stack
                          component="form"
                          onSubmit={handleUpdate}
                          spacing={1}
                        >
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
                        <ListItemText
                          primary={studentClass}
                          secondary="Class"
                        />
                      )}

                      {edit && (
                        <Stack
                          component="form"
                          sx={{ width: "100%" }}
                          onSubmit={handleUpdate}
                          spacing={1}
                        >
                          <FormControl variant="filled" sx={{ width: "100%" }}>
                            <InputLabel id="class-label">
                              {studentClass}
                            </InputLabel>
                            <Select
                              labelId="class-label"
                              id="class"
                              value={info.studentClass}
                              onChange={handleChange}
                              name="studentClass"
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
                      {!edit && (
                        <ListItemText primary={hostel} secondary="Hostel" />
                      )}

                      {edit && (
                        <Stack
                          sx={{ width: "100%" }}
                          component="form"
                          onSubmit={handleUpdate}
                          spacing={1}
                        >
                          <FormControl
                            variant="filled"
                            sx={{ minWidth: "30%" }}
                          >
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
              </Stack>{" "}
            </Stack>
          </Grid>

          <Grid md={3} item>
            {student &&
              student.records.length > 0 &&
              student.records.map(record => (
                <List
                  key={record.time}
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemText
                      primary={record.status}
                      secondary={record.time}
                    />
                  </ListItem>
                </List>
              ))}
          </Grid>
        </Grid>
      </StyledProfile>
    </Container>
  );
};

export default Student;
