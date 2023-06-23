import React, { createContext } from "react";
import faceIO from "@faceio/fiojs";

export const FaceIOContext = createContext();

const FaceioProvider = ({ children }) => {
  const { enroll, fetchAllErrorCodes, authenticate, restartSession } =
    new faceIO("fioa0965");

  async function handleEnroll(payload) {
    // call to faceio.enroll() here will automatically trigger the on-boarding process
    const userInfo = await enroll({
      locale: "auto", // Default user locale
      payload,
    });

    console.log(userInfo);
  }

  function handleError(errCode) {
    // Handle error here
    // Log all possible error codes during user interaction..
    // Refer to: https://faceio.net/integration-guide#error-codes
    // for a detailed overview when these errors are triggered.
    const fioErrCode = fetchAllErrorCodes();
    switch (errCode) {
      case fioErrCode.PERMISSION_REFUSED:
        console.log("Access to the Camera stream was denied by the end user");
        break;
      case fioErrCode.NO_FACES_DETECTED:
        console.log(
          "No faces were detected during the enroll or authentication process"
        );
        break;
      case fioErrCode.UNRECOGNIZED_FACE:
        console.log("Unrecognized face on this application's Facial Index");
        break;
      case fioErrCode.MANY_FACES:
        console.log("Two or more faces were detected during the scan process");
        break;
      case fioErrCode.FACE_DUPLICATION:
        console.log(
          "User enrolled previously (facial features already recorded). Cannot enroll again!"
        );
        break;
      case fioErrCode.MINORS_NOT_ALLOWED:
        console.log("Minors are not allowed to enroll on this application!");
        break;
      case fioErrCode.PAD_ATTACK:
        console.log(
          "Presentation (Spoof) Attack (PAD) detected during the scan process"
        );
        break;
      case fioErrCode.FACE_MISMATCH:
        console.log(
          "Calculated Facial Vectors of the user being enrolled do not matches"
        );
        break;
      case fioErrCode.WRONG_PIN_CODE:
        console.log("Wrong PIN code supplied by the user being authenticated");
        break;
      default:
        console.log("Error Unknown");
        break;
      // ...
      // Refer to the boilerplate at: https://gist.github.com/symisc/34203d2811a39f2a871373abc6dd1ce9
      // for the list of all possible error codes.
    }
  }

  async function handleAuthenticate() {
    // call to faceio.authenticate() here will automatically trigger the facial authentication process
    const userInfo = await authenticate({
      locale: "auto", // Default user locale
    }).catch(errCode => {
      /* handle the error */
      handleError(errCode);
    });

    console.log(userInfo);

    console.log("Success, user identified");
    // Grab the facial ID linked to this particular user which will be same
    // for each of his successful future authentication. FACEIO recommend
    // that your rely on this Facial ID if you plan to uniquely identify
    // all enrolled users on your backend for example.
    // console.log("Linked facial Id: " + userData.facialId);
    // Grab the arbitrary data you have already linked (if any) to this particular user
    // during his enrollment via the payload parameter of the enroll() method.
    // console.log("Payload: " + JSON.stringify(userData.payload)); // {"whoami": 123456, "email": "john.doe@example.com"} from the enroll() example above
  }

  async function logout() {
    const boolean = await restartSession({});
    console.log(boolean);
  }

  return (
    <FaceIOContext.Provider
      value={{ handleAuthenticate, handleEnroll, logout }}
    >
      {children}
    </FaceIOContext.Provider>
  );
};

export default FaceioProvider;
