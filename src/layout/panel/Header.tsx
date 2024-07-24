import { AppBar } from "@mui/material";
import { drawerWidth } from "../../constants/layout";

import ElementsHeader from "../../components/ElementsHeader";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar
      style={{
        background: theme.palette.mode === "dark" ? "#0B1437" : "#F4F7FE", // Set background based on theme mode
      }}
      sx={{
        position: "absolute",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: "15%",
        ml: { sm: `${drawerWidth}px` },
        color: "text.primary",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <ElementsHeader />
    </AppBar>
  );
}
