import { useDispatch } from "react-redux";
import { Box, InputAdornment, TextField } from "@mui/material";
import profile from "../assets/img/profile.jpg";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import NightlightIcon from "@mui/icons-material/Nightlight";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchIcon from "@mui/icons-material/Search";
import { toggleTheme } from "../store/themeSlice";

export default function ElementsHeader() {
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        mx: "1.5rem",
        mb: "1rem",
      }}
    >
      <Box display="flex" flexDirection="column">
        <Box color="#707EAE">Pages / Dashboard</Box>
        <Box fontSize="2rem" fontWeight="bold" mt="0.5rem">
          Main Dashboard
        </Box>
      </Box>
      <Box
        bgcolor="background.paper"
        display="flex"
        alignItems="center"
        borderRadius="5rem"
        padding="0.4rem"
      >
        <Box>
          <TextField
            placeholder="Search"
            variant="outlined"
            sx={{
              bgcolor: "background.default",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
              borderRadius: "5rem",
              height: "2.5rem",
              width: "13rem",
              mr: "1rem",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{}}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <NotificationsNoneRoundedIcon
            sx={{ color: "#A3AED0", cursor: "pointer" }}
          />
          <NightlightIcon
            sx={{
              color: "#A3AED0",
              transform: "rotate(-20deg)",
              mx: "1rem",
              cursor: "pointer",
            }}
            onClick={handleToggleTheme}
          />
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
            src={profile}
            sx={{
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
