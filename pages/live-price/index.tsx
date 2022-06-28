// @React
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
// @mui/material
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// @components
import { CircleBounce, Filter, TableCoins } from "@components";

// @Context
import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";
import useCurrencies from "@Hook/useCurrencies";
//@ts-ignore

const LivePrice: React.FC = () => {
  // @Context
  const { queryType, setQueryType, setMeta } = useContext(
    CurrencyContext
  ) as CurrencyContextType;
  // @Hook
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  // @call data
  const { currencies, hasMore, loading, error } = useCurrencies(
    query,
    pageNumber,
    search,
    sort,
    queryType,
    setMeta
  );
  // @logic for infinite scroll
  const observer = useRef<IntersectionObserver>();
  const lastBookElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          setQueryType("page");
        }
      });
      if (node) observer.current?.observe(node);
    },
    [loading, hasMore]
  );
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
                <Typography variant={"body1"}>
                  {/*{totalData[0].meta.paginateHelper.total}*/}
                  <Typography component={"span"} sx={{ mx: 1 }}>
                    ارز دیجیتال
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Filter
              sort={sort}
              setQuery={setQuery}
              setSort={setSort}
              setSearch={setSearch}
              setPageNumber={setPageNumber}
            />
            <TableCoins
              lastBookElementRef={lastBookElementRef}
              error={error}
              data={currencies}
            />
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default LivePrice;
