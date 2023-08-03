import { useContext, useRef, useState } from "react";
import DrawerAppBar from "../components/Navbar";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PassportContext } from "../Providers/PassportProvider";
import Passport from "../components/Passport";
import { useNavigate } from "react-router-dom";
import StyledPage from "../styles/StyledPage";
import { enqueueSnackbar } from "notistack";
// import LoadingButton from "@mui/lab/LoadingButton";
import { Send } from "@mui/icons-material";
import {
  createStudent,
  getFormVals,
  getInputVals,
} from "../services/functions";
import { FaceIOContext, enroll } from "../components/Faceio";

const Register = () => {
  const [info, setInfo] = useState({
    gender: "",
    studentClass: "",
    hostel: "",
  });
  const [imgError, setImgError] = useState("");
  const [studentData, setStudentData] = useState("");
  const formRef = useRef();
  const { imgSrc } = useContext(PassportContext);
  const { handleError } = useContext(FaceIOContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setInfo({ ...info, ...getInputVals(e) });
  };

  function addFaceData(id, timestamp) {
    setStudentData(() => {
      studentData.faceID = id;
      studentData.faceTimestamp = timestamp;
    });
  }

  async function sendStudentData(data) {
    const resp = await createStudent("/register", data);
    console.log(resp)
  }

  async function handleFaceRecognition() {
    try {
      const faceData = await enroll({
        locale: "auto",
        payload: studentData,
        userConsent: true,
      });

      addFaceData(faceData.facialId, faceData.timestamp);
      await sendStudentData(studentData);
      enqueueSnackbar("Successfully registered a student", {
        variant: "success",
      });
      navigate("/list", {
        replace: true,
      });
    } catch (error) {
      handleError(error);
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    // setLoading(true);

    if (imgSrc === "") {
      setImgError("Take student passport!");
      return;
    }

    setImgError("");

    const data = getFormVals(e);

    data.imgSrc = imgSrc;

    setStudentData(data);
    console.log(data);
  };

  return (
    <>
      <DrawerAppBar />
      <Container maxWidth="sm">
        <StyledPage
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          spacing={4}
          sx={{
            alignItems: { sm: "center" },
            display: studentData ? "none" : "flex",
          }}
        >
          <Box component="header" className="title">
            <Typography variant="h4" component="h1">
              Register New Student
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Passport />
            {imgError && (
              <Alert variant="filled" severity="error" sx={{ width: "300px" }}>
                {imgError}
              </Alert>
            )}
          </Stack>

          <Stack
            spacing={1}
            direction={{ sm: "row" }}
            justifyContent="space-between"
            width="100%"
          >
            <TextField
              name="sname"
              id="sname"
              variant="filled"
              required
              label="Surname"
            />

            <TextField
              id="fname"
              name="fname"
              variant="filled"
              required
              label="First name"
            />

            <TextField
              id="mname"
              name="mname"
              variant="filled"
              required
              label="Middle name"
            />
          </Stack>

          <Stack
            spacing={1}
            direction={{ sm: "row" }}
            justifyContent="space-between"
            width="100%"
          >
            <TextField
              id="regno"
              name="regno"
              variant="filled"
              required
              label="Registration Number"
              type="text"
            />

            <FormControl variant="filled" sx={{ minWidth: "30%" }}>
              <InputLabel id="class-label">Class</InputLabel>
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

            <FormControl variant="filled" sx={{ minWidth: "30%" }}>
              <InputLabel id="hostel-label">Hostel</InputLabel>
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
          </Stack>

          <Stack
            spacing={2}
            gap={2}
            justifyContent="space-between"
            width="100%"
          >
            <FormControl variant="filled" sx={{ minWidth: "30%" }}>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                value={info.gender}
                onChange={handleChange}
                name="gender"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button variant="contained" type="submit" endIcon={<Send />}>
              Submit
            </Button>
            {/* <LoadingButton
              sx={{ width: { xs: "100%", sm: "50%" } }}
              variant="contained"
              type="submit"
              endIcon={<Send />}
              loading={loading}
              loadingPosition="end"
            >
              Submit
            </LoadingButton> */}
          </Box>
        </StyledPage>

        <Button
          onClick={handleFaceRecognition}
          variant="contained"
          color="primary"
          sx={{
            color: "white",
            display: studentData ? "block" : "none",
            marginTop: 5,
            textAlign: "center",
          }}
        >
          Enroll For Face Recognition
        </Button>
      </Container>
    </>
  );
};

export default Register;
