import { Create, Home, Logout, Person, Settings } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModeButton from "./ModeButton";

const ListDrawer = ({ setmyMode, myMode }) => {
  const navigate = useNavigate();
  const themee = useTheme();
  // da bygeeb al path 2le a7na wa2feen 3ando fe al saf7a
  const currentLocation = useLocation();
  // console.log(currentLocation.pathname);

  const myList = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Create', icon: <Create />, path: '/create' },
    { text: 'Profile', icon: <Person />, path: '/profile' },
    { text: 'Setting', icon: <Settings />, path: '/setting' },
    // { text: 'Logout', icon: <Logout />, path: '/logout' },
  ]

  return (
    <List sx={{
      // media query {breakpoints}
      // [themee.breakpoints.down('md')]: {
      //   // backgroundColor: themee.palette.secondary.main,
      // },
    }}>
      <ModeButton setmyMode={setmyMode} myMode={myMode} />
      <Divider />

      {myList.map((list, index) => {
        return (
          <ListItem key={list.text}
            sx={{
              bgcolor:
                // @ts-ignore
                window.location.pathname == list.path && themee.palette.favColor.main,
              // currentLocation.pathname == "/create" && themee.palette.favColor.main,
            }}
            disablePadding
          >
            <ListItemButton onClick={() => navigate(list.path)}>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.text} />
            </ListItemButton>
          </ListItem>
        )
      })}
      <ListItem
            sx={{
              bgcolor:
                // @ts-ignore
                window.location.pathname == '/logout' && themee.palette.favColor.main,
              // currentLocation.pathname == "/create" && themee.palette.favColor.main,
            }}
            disablePadding
          >
            <ListItemButton onClick={() => {}}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>

    </List>
  );
};

export default ListDrawer;
