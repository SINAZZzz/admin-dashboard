import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { links } from "../../../constants/links";
import { icons } from "../../../constants/icons";
import { useState } from "react";
import useAppBarStyles from "../../../constants/styles";

export default function ListSidebar() {
  const [activeIndex, setActiveIndex] = useState<number | null>();
  const { isDarkMode } = useAppBarStyles();

  const handleListItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
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
                  color: !isDarkMode
                    ? activeIndex === index
                      ? "#4318FF"
                      : "#A3AED0"
                    : activeIndex === index
                    ? "#fff"
                    : "#A3AED0",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={{
                color: !isDarkMode
                  ? activeIndex === index
                    ? "#000"
                    : "#A3AED0"
                  : activeIndex === index
                  ? "#fff"
                  : "#A3AED0",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
