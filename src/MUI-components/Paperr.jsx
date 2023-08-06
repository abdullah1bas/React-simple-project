import React from 'react';
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const Paperr = ({price , name, deletePaper, paper}) => {
  return (
      <Paper
        sx={{
          width: "366px",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
          borderBottom: "solid black 1px",
        }}
      >
        <Typography sx={{ ml: "16px", fontSize: "1.3rem" }} variant="h6">
          {name}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              mr: "33px",
              fontWeight: "500",
              fontSize: "1.4rem",
              opacity: ".8",
            }}
            variant="h6"
          >
            ${price}
          </Typography>
          <IconButton sx={{ position: "absolute", top: "0", right: "0" }}
            onClick={() => {
              deletePaper(paper)
            }}>
            <Close sx={{fontSize: "20px"}} />
          </IconButton>
        </Box>
      </Paper>
  );
}

export default Paperr;
