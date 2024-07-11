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
import {
  cartShopping,
  chartSimple,
  house,
  lock,
  objectsColumn,
  user,
} from "../../constants/icons";
import { useState } from "react";

const icons = [house, cartShopping, chartSimple, objectsColumn, user, lock];

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
                  component="img"
                  src={icons[index]}
                  alt={text}
                  sx={{
                    width: 20,
                    height: 20,
                    filter:
                      "invert(53%) sepia(11%) saturate(488%) hue-rotate(181deg) brightness(94%) contrast(92%)",
                    color: activeIndex === index ? "#fff" : "#A3AED0",
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
