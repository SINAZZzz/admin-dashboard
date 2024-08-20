import { Box } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { toggleTheme } from "../../../../store/themeSlice";
import { AppDispatch } from "../../../../store";
import { useDispatch } from "react-redux";
import useAppBarStyles from "../../../../constants/styles";
import Profile from "../../../../assets/img/profile.jpg";
import { useNavigate } from "react-router-dom";
import { setPageTitle } from "../../../../store/pageSlice";

export default function ButtonHead() {
  const { isDarkMode } = useAppBarStyles();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const title = "Sign In";
    dispatch(setPageTitle(title));
    localStorage.setItem("pageTitle", title);
    navigate("sign-in");
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <NotificationsNoneRoundedIcon
        sx={{ color: "#A3AED0", cursor: "pointer" }}
      />
      {isDarkMode ? (
        <LightModeIcon
          sx={{
            color: "#A3AED0",
            transform: "rotate(-20deg)",
            mx: "1rem",
            cursor: "pointer",
          }}
          onClick={handleToggleTheme}
        />
      ) : (
        <NightlightIcon
          sx={{
            color: "#A3AED0",
            transform: "rotate(-20deg)",
            mx: "1rem",
            cursor: "pointer",
          }}
          onClick={handleToggleTheme}
        />
      )}
      <ErrorOutlineRoundedIcon
        sx={{
          color: "#A3AED0",
          transform: "rotate(180deg)",
          mr: "1rem",
          cursor: "pointer",
        }}
      />
      <Box
        component="img"
        src={Profile}
        sx={{
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
        }}
        onClick={handleProfileClick}
      />
    </Box>
  );
}
