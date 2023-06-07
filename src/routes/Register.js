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
  styled,
} from "@mui/material";
import { PassportContext } from "../Providers/PassportProvider";
import Passport from "../components/Passport";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const Register = () => {
  const [info, setInfo] = useState({
    gender: "",
    studentClass: "",
    hostel: "",
  });
  const [imgError, setImgError] = useState("");
  const formRef = useRef();
  const { imgSrc } = useContext(PassportContext);
  const navigate = useNavigate();

  const handleChange = event => {
    event.preventDefault();

    if (event.target.name === "gender") {
      setInfo({ ...info, gender: event.target.value });
    }

    if (event.target.name === "class") {
      setInfo({ ...info, studentClass: event.target.value });
    }

    if (event.target.name === "hostel") {
      setInfo({ ...info, hostel: event.target.value });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (imgSrc === "") {
      setImgError("Take Student Passport!");
      return;
    }

    setImgError("");

    const data = new FormData(formRef.current);

    const fname = data.get("fname");
    const sname = data.get("sname");
    const mname = data.get("mname");
    const regno = data.get("regno");

    const studentData = {
      fname,
      sname,
      mname,
      regno,
      gender: info.gender,
      studentClass: info.studentClass,
      hostel: info.hostel,
      imgSrc,
      regdate: new Date(),
    };

    async function postData(url, data) {
      try {
        const resp = await axios({ method: "post", url, data });
        console.log(resp);
        navigate("/list", {
          replace: true,
        });
      } catch (err) {
        console.log(err);
      }
    }

    postData(
      "https://school-project-server.onrender.com/register",
      studentData
    );
  };

  return (
    <>
      <DrawerAppBar />
      <StyledBox>
        <Container maxWidth="sm">
          <Stack
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            spacing={4}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Register New Student
            </Typography>

            <Stack spacing={1}>
              <Passport />
              {imgError && (
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{ width: "300px" }}
                >
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
                type="number"
              />

              <FormControl variant="filled" sx={{ minWidth: "30%" }}>
                <InputLabel id="class-label">Class</InputLabel>
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
              // direction={{ sm: "row" }}
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
              <Button
                sx={{ width: { xs: "100%", sm: "50%" } }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Container>
      </StyledBox>
    </>
  );
};

export default Register;
