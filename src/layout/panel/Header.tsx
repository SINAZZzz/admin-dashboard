import { AppBar, Toolbar } from "@mui/material";
import { drawerWidth } from "../../constants/layout";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: "15%",
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "#F4F7FE",
        boxShadow: "none",
      }}
    >
      <Toolbar></Toolbar>
    </AppBar>
  );
}
