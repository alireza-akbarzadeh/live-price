// @React
import React from "react";
// @mui/material
import { Box } from "@mui/material";
// @ next-link
import Link from "next/link";

// @JSX
const Home: React.FC = (props) => {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Link href={"/live-price"}>Go TO Live Price</Link>
    </Box>
  );
};

export default Home;
