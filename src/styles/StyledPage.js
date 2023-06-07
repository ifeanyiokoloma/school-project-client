import { Stack, styled } from "@mui/material";

const StyledPage = styled(Stack)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 3rem 0;

  .title {
    text-align: center;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 900;
  }

  h2,
  h3 {
    text-transform: capitalize;
  }
`;

export default StyledPage;
