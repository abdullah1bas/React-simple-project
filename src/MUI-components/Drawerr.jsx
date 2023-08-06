import React from "react";
import { Box, Drawer } from "@mui/material";
import ListDrawer from "./ListDrawer";

const Drawerr = ({
  setmyMode,
  myMode,
  drawerWidth,
  noneOrBlock,
  drawerType,
  hideDrawer,
}) => {
  return (
    <Box component="nav">
      <Drawer
        sx={{
          display: {
            xs: noneOrBlock,
            sm: "block",
          },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
          transition: ".3s",
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          hideDrawer();
        }}
      >
        <ListDrawer {...{myMode, setmyMode}}  />
      </Drawer>
    </Box>
  );
};

export default Drawerr;
