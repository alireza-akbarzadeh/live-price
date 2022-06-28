import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <CircularProgress
        sx={{
          position: "fixed",
          bottom: "0",
          left: "50%",
          height: "100vh",
          transition: "translate(-50%,50%)",
        }}
        disableShrink
      />
    </Box>
  );
};
