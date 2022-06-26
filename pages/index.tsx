import React from "react";

import { Header, Main, Cards, Footer } from "@components";
import {Box} from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Main />
      <Cards />
      <Footer />
    </Box>
  );
};

export default Home;
