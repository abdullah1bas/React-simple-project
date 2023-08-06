// @ts-nocheck
// import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import React from "react";
import {
  Avatar,
  Link,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import photoIns from "./photoInst.jpg";
import { Menu } from "@mui/icons-material";

const Appbar = ({ drawerWidth, showDrawer }) => {
  return (
    <AppBar
      position="static"
      sx={{
        width: { xs: "100% ", sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: "0", sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          sx={{
            mr: '9px',
            display: { sm: "none" },
          }}
          color="inherit"
          onClick={() => {
            showDrawer();
          }}
        >
          <Menu />
        </IconButton>
        <Link
          href="/"
          underline="none"
          color="inherit"
          sx={{
            // flexGrow: 1,
            cursor: "auto",
            transition: ".3s",
            "&:hover": { fontSize: "18px" },
            width: "content-width",
          }}
        >
          My expenses
        </Link>

        <Typography
          mr={2}
          ml="auto"
          component="h2"
          variant="body1"
          color="inherit"
        >
          Abdullah
        </Typography>

        <Avatar alt="Abdullah" src={photoIns} />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
