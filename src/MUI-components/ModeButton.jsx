import { IconButton, ListItem, useTheme } from '@mui/material';
import React from 'react';
import { Brightness4, Brightness7 } from "@mui/icons-material";


const ModeButton = ({setmyMode, myMode}) => {
  const theme = useTheme();
  // console.log(theme.palette.mode)
  return (

      <ListItem sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton 
            onClick={() => {
              if (theme.palette.mode == "dark") {
                setmyMode("light");
                window.localStorage.setItem('mode' , 'light');
              } else {
                setmyMode("dark");
                window.localStorage.setItem('mode' , 'dark');
              }
              // setmyMode(theme.palette.mode == 'dark' ?'light':'dark');
              // myMode == 'dark' ? setmyMode('light') : setmyMode('dark')
            }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 color="warning" /> : <Brightness4 />}
          </IconButton>
      </ListItem>
  );
}

export default ModeButton;
