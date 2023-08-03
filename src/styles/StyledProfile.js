import { Box, styled } from "@mui/material";

export const StyledProfile = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
  margin-bottom: 3rem;

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
      width: 100%;
    }

    .capture {
      width: 300px;
    }
  }
`;
