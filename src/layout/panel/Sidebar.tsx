import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { drawerWidth } from "../../constants/layout";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const icons = [
  HomeIcon,
  ShoppingCartOutlinedIcon,
  BarChartRoundedIcon,
  ViewQuiltRoundedIcon,
  PersonIcon,
  LockIcon,
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleListItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const drawer = (
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

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
