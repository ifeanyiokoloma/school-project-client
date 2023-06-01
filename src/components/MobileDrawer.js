import { Box, Drawer } from "@mui/material";
import { useContext } from "react";
import MobileDrawerContent from "./MobileDrawerContent";
import { NavbarContext } from "../Providers/NavbarProvider";

const MobileDrawer = ({ window }) => {
  const { handleDrawerToggle, mobileOpen } = useContext(NavbarContext);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawerWidth = 240;
  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <MobileDrawerContent />
      </Drawer>
    </Box>
  );
};

export default MobileDrawer;
