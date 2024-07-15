import { AppBar, Box, InputAdornment, TextField } from "@mui/material";
import { drawerWidth } from "../../constants/layout";
import profile from "../../assets/img/profile.jpg";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import NightlightIcon from "@mui/icons-material/Nightlight";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchIcon from "@mui/icons-material/Search";

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
          bgcolor="#FFFFFF"
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
                bgcolor: "#F4F7FE",
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
                    <SearchIcon sx={{ color: "black" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <NotificationsNoneRoundedIcon sx={{ color: "#A3AED0" }} />
            <NightlightIcon
              sx={{ color: "#A3AED0", transform: "rotate(-20deg)", mx: "1rem" }}
            />
            <ErrorOutlineRoundedIcon
              sx={{ color: "#A3AED0", transform: "rotate(180deg)", mr: "1rem" }}
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
    </AppBar>
  );
}
