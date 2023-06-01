import {
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { mainLinks } from "../data/links";
import { NavbarContext } from "../Providers/NavbarProvider";
import { Link } from "react-router-dom";

const MobileDrawerContent = () => {
  const { handleDrawerToggle } = useContext(NavbarContext);
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link style={{ textDecoration: "inherit", color: "inherit" }} to="/">
          Home
        </Link>
      </Typography>
      <Divider />
      <Stack
        spacing={2}
        component="ul"
        justifyContent="center"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          textTransform: "uppercase",
          height: "100%",
        }}
      >
        {mainLinks.map(item => (
            <li key={item.id}>
              <Link
                className="btn w-100 h-100"
                style={{ color: "inherit", textDecoration: "none" }}
                to={item.link}
              >
                {item.name}
              </Link>
            </li>
        ))}
      </Stack>
    </Box>
  );
};

export default MobileDrawerContent;
