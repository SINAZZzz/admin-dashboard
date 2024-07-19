import { Box, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { drawerWidth } from "../../constants/layout";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function PanelLayout() {
  return (
    <Box display="flex" mx="-0.5rem">
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 6,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: "#F4F7FE",
          height: "100vh",
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
