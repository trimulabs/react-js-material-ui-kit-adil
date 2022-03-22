import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <MenuItem onClick={handleClose}>
          <ListItemText>Landing Pages</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>About Us</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Contact Us</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Author</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Sign In</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
