import { Box, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { drawerWidth } from "../../constants/layout";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function PanelLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
}
