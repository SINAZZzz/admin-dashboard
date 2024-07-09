import {
  Box,
  Divider,
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

const icons = [house, cartShopping, objectsColumn, chartSimple, user, lock];
const drawer = (
  <div>
    <Toolbar />
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
          <ListItemButton>
            <ListItemIcon>
              <img
                src={icons[index]}
                alt={text}
                style={{ width: 24, height: 24 }}
              />
            </ListItemIcon>
            <ListItemText primary={text} />
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
