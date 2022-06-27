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
import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";
import InfiniteScroll from "react-infinite-scroll-component";

// @render
// export async function getStaticProps() {
//   const currencies = await fetchCurrencies();
//
//   return { props: currencies.pages.result };
// }

//@ts-ignore
const LivePrice: React.FC = () => {
  // @context
  const { queryType, search, sort } = useContext(
    CurrencyContext
  ) as CurrencyContextType;
  // @Hook
  const { data, status, error, refetch } = useFetchCurrencies();
  // effect
  useEffect(() => {
    refetch();
  }, [search, sort]);

  let totalData: any =
    status === "success" && data?.pages.map((item) => item.result);
  return (
    status === "success" && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box mt={5}>
          <Container maxWidth={"lg"}>
            <Paper
              sx={{ padding: "20px 20px", borderRadius: 2.3 }}
              elevation={2}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Typography variant={"h4"}>قیمت لحظهای</Typography>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <CircleBounce />
                  <Typography variant={"body1"}>
                    {totalData[0].meta.paginateHelper.total}
                    ارز دیجیتال
                  </Typography>
                </Box>
              </Box>
              <Filter />
              <TableCoins error={error} status={status} data={totalData[0]} />
            </Paper>
          </Container>
        </Box>
      </Box>
    )
  );
};

export default LivePrice;
