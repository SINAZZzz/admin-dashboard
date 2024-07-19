import { AppBar } from "@mui/material";
import { drawerWidth } from "../../constants/layout";

import ElementsHeader from "../../components/ElementsHeader";

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
        color: "black",
        justifyContent: "end",
      }}
    >
      <ElementsHeader />
    </AppBar>
  );
}
 