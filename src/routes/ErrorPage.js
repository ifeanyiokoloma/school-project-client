import { Box, styled } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";

const StyledErrorPage = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <StyledErrorPage>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </StyledErrorPage>
  );
};

export default ErrorPage;
