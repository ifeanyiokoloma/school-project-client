import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { mainLinks } from "../data/links";
import MobileDrawer from "./MobileDrawer";
import { NavbarContext } from "../Providers/NavbarProvider";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

function DrawerAppBar() {
  const { handleDrawerToggle } = useContext(NavbarContext);

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              style={{
                textDecoration: "inherit",
                color: "inherit",
                textTransform: "uppercase",
              }}
              to="/"
            >
              Home
            </Link>
          </Typography>
          <Stack
            spacing={3}
            display={{ xs: "none", sm: "flex" }}
            direction="row"
            component="ul"
            sx={{ listStyle: "none", p: 0, m: 0, textTransform: "uppercase" }}
          >
            {mainLinks.map(item => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <MobileDrawer />
      <Toolbar />
    </>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default DrawerAppBar;
