import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  BarChartRoundedIcon,
  HomeIcon,
  LockIcon,
  PersonIcon,
  ShoppingCartOutlinedIcon,
  ViewQuiltRoundedIcon,
} from "../constants/icons";

export default function DrawerSidebar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const icons = [
    HomeIcon,
    ShoppingCartOutlinedIcon,
    BarChartRoundedIcon,
    ViewQuiltRoundedIcon,
    PersonIcon,
    LockIcon,
  ];

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
        }}
      >
        Sina Zinsz
      </Toolbar>
      <List sx={{}}>
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
                  top: 0,
                  bottom: 0,
                  width: 4,
                  height: "100%",
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
                    color: activeIndex === index ? "#4318FF" : "#A3AED0",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: activeIndex === index ? "#000" : "#A3AED0" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
