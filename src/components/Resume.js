import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaceIOContext, authenticate, restartSession } from "./Faceio";
import { enqueueSnackbar } from "notistack";
import { updateStudent } from "../services/functions";
import StyledPage from "../styles/StyledPage";
import { Button, Stack } from "@mui/material";

const Resume = () => {
  const navigate = useNavigate();
  const { handleError } = useContext(FaceIOContext);

  async function handleResume() {
    try {
      const user = await authenticate();
      enqueueSnackbar("Student has resumed", {
        variant: "success",
      });
      const data = await updateStudent({ resume: new Date() }, user.facialId);
      console.log(data);
      await restartSession({});
      navigate(`/students/${user.facialId}`, {
        replace: true,
      });
    } catch (error) {
      await restartSession({});
      handleError(error);
      enqueueSnackbar("Student verification failed", {
        variant: "error",
      });
      navigate("/", {
        replace: true,
      });
    }
  }

  return (
    <StyledPage>
      <Stack alignItems="center">
        <Button variant="contained" onClick={handleResume}>
          Resume
        </Button>
      </Stack>
    </StyledPage>
  );
};

export default Resume;
