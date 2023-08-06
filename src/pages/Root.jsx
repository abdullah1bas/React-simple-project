// @ts-nocheck
import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawerr";
import { Box, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import getDesignTokens from "style/Mytheme";

const modeLocal = localStorage.getItem("mode");

const drawerWidth = 240;
const Root = () => {
  const [mode, setmyMode] = useState(modeLocal != null ? modeLocal : "dark");
  const [noneOrBlock, setnoneOrBlock] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");

  const showDrawer = () => {
    setnoneOrBlock('block')
    setDrawerType('temporary')
  }
  const hideDrawer = () => {
    setnoneOrBlock("none");
    setDrawerType('permanent');
  }
  // Update the theme only if the mode changes
   const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  // console.log({...{hideDrawer, drawerType, noneOrBlock, setmyMode, drawerWidth}})
  return (
    // theme dh 3shan al dark mode
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar
          showDrawer={showDrawer}
          drawerWidth={drawerWidth}
        />

        <Drawerr
          {...{hideDrawer, drawerType, noneOrBlock, setmyMode, drawerWidth}}
          myMode={mode}
        />

        <Box
          component="main"
          sx={{
            ml: { xs: 0, sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          {/* al outlet de y3ne 7otle al msar hytktb ba3d / gwa root azherwo ta7t al header */}
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
