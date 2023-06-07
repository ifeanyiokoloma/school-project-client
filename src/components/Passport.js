import { Box, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { useContext, useState } from "react";
import Webcam from "react-webcam";
import { PassportContext } from "../Providers/PassportProvider";

const StyledSnap = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  .imgFrame {
    width: 100%;
    height: 300px;
    border: 5px solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .passport {
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

const Passport = () => {
  const [activateCamera, setActivateCamera] = useState(false);
  const [backCamera, setBackCamera] = useState(false);
  const { imgSrc, setImgSrc, webcamRef, capture } = useContext(PassportContext);

  const videoConstraints = {
    width: 600,
    height: 600,
    facingMode: { exact: !backCamera ? "user" : "environment" },
  };

  return (
    <StyledSnap>
      <Box className="imgFrame">
        {activateCamera && imgSrc === "" ? (
          <Webcam
            audio={false}
            height={600}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={600}
            className="passport"
            videoConstraints={videoConstraints}
          />
        ) : imgSrc !== "" ? (
          <img src={imgSrc} alt="new" />
        ) : (
          !activateCamera && (
            <Button
              className="activate-camera"
              onClick={() => setActivateCamera(true)}
              variant="contained"
            >
              Take Passport
            </Button>
          )
        )}
      </Box>

      {imgSrc !== "" && activateCamera ? (
        <Button
          variant="contained"
          className="capture"
          onClick={e => {
            e.preventDefault();
            setImgSrc("");
          }}
        >
          Retake
        </Button>
      ) : (
        activateCamera && (
          <Stack spacing={2} component="ul" sx={{ listStyle: "none", pl: 0 }}>
            <Box component="li">
              <Button
                variant="contained"
                className="capture"
                onClick={e => {
                  e.preventDefault();
                  capture();
                }}
              >
                Capture
              </Button>
            </Box>
            <Box component="li">
              <Button
                variant="contained"
                className="capture"
                onClick={e => {
                  setBackCamera(!backCamera);
                }}
              >
                {backCamera ? "Use Front Camera" : "Use Back camera"}
              </Button>
            </Box>
          </Stack>
        )
      )}
    </StyledSnap>
  );
};

export default Passport;
