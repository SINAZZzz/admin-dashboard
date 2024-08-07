import { useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { links } from "../constants/links";
import { icons } from "../constants/icons";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function DrawerSidebar() {
  const [activeIndex, setActiveIndex] = useState<number | null>();
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  const handleListItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.7rem",
          fontWeight: "bold",
          my:'1rem'
        }}
      >
        Sina Zinsz
      </Toolbar>
      <Divider sx={{mb:'1rem'}} />
      <List>
        {[
          "Dashboard",
          "NFT Marketplace",
          "Tables",
          "Kanban",
          "Profile",
          "Sign In",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={links[index]}
              onClick={() => handleListItemClick(index)}
              sx={{
                "&:hover": {
                  backgroundColor: "inherit",
                },
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  right: 0,
                  top: 5,
                  bottom: 0,
                  width: 4,
                  height: "calc(100% - 10px)",
                  borderRadius: "5px",
                  backgroundColor:
                    activeIndex === index ? "#4318FF" : "transparent",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 35 }}>
                <Box
                  component={icons[index]}
                  sx={{
                    width: 24,
                    height: 24,
                    color: !isDarkMode ? activeIndex === index ? "#4318FF" : "#A3AED0" : activeIndex === index ? "#fff" : "#A3AED0",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: !isDarkMode ? activeIndex === index ? "#000" : "#A3AED0" : activeIndex === index ? "#fff" : "#A3AED0" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
