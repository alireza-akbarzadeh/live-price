// @React
import React, { useContext, useEffect } from "react";
// @mui/material
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// @components
import { CircleBounce, Filter, TableCoins } from "@components";
// @features
import fetchCurrencies from "@features/api/fetchCurrencies";
// @Hook
import { useFetchCurrencies } from "@Hook";
// @Context
import {
  CurrencyContext,
  CurrencyContextType,
  IQueryProps,
} from "@context/CurrencyContext";
import socketio from "socket.io-client";

// @render
export async function getStaticProps() {
  const currencies = await fetchCurrencies();
  return { props: currencies.data.result };
}

// @JSX
const LivePrice: React.FC = (props) => {
  const { query, setQuery, SOCKET_URL } = useContext(
    CurrencyContext
  ) as CurrencyContextType;
  const { data, status, error } = useFetchCurrencies();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box mt={5}>
        <Container maxWidth={"lg"}>
          <Paper sx={{ padding: "20px 20px", borderRadius: 2.3 }} elevation={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Typography variant={"h4"}>قیمت لحظهای</Typography>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <CircleBounce />
                <Typography variant={"body1"}>296 ارز دیجیتا</Typography>
              </Box>
            </Box>
            <Filter query={query} setQuery={setQuery} />
            <TableCoins error={error} status={status} data={data} />
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default LivePrice;

// const socket = socketio.connect(SOCKET_URL);
// useEffect(() => {
//     socket.emit("currencies", (data) => {
//         console.log(data, "socketData")
//     });
//     socket.on("currencies", (data) => {
//         console.log(data, "data");
//     });
//     return () => {
//         socket.off("new_coins_list");
//     };
// }, []);
