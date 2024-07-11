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

const icons = [house, cartShopping, chartSimple, objectsColumn, user, lock];
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
          <ListItemButton sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <Box
                component="img"
                src={icons[index]}
                alt={text}
                sx={{
                  width: 20,
                  height: 20,
                  color: "#A3AED0",
                  filter:
                    "invert(53%) sepia(11%) saturate(488%) hue-rotate(181deg) brightness(94%) contrast(92%)",
                }}
              />
            </ListItemIcon>
            <ListItemText primary={text} sx={{ color: "#A3AED0" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
);

const Sidebar = () => {
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
