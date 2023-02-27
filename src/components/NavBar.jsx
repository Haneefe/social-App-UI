import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import { Mail, Notifications } from "@mui/icons-material";
import theme from "../theme";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  background: "white",
  padding: "0 px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const IconContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: 20,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const IconSm = styled(Box)(({ theme }) => ({
  display: "none",
  gap: 10,
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };
  return (
    <AppBar
      sx={{
        position: "sticky",
      }}
    >
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social
        </Typography>
        <GroupsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase
            placeholder="Search"
            sx={{
              pl: 2,
            }}
          />
        </Search>
        <IconContainer>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={handleMenu} />
        </IconContainer>
        <IconSm>
          <Avatar sx={{ width: 30, height: 30 }} onClick={handleMenu} />
          <Typography variant="p">Haneef</Typography>
        </IconSm>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
