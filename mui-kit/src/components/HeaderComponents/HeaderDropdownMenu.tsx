import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function DropDownMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <MenuItem>
          <ListItemText>Landing Pages</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>About Us</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Contact Us</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Author</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Sign In</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
