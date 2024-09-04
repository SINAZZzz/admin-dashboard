import { Box } from "@mui/material";
import "./style.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Loading() {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.background = "#0B1437"; // Dark mode background
    } else {
      document.body.style.background = "#F4F7FE"; // Light mode background
    }
  }, [isDarkMode]);

  return (
    <Box className="spinner">
      <Box className="loading"></Box>
      <Box className="loading-text">Loading...</Box>
    </Box>
  );
}
