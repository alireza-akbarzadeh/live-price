//@ React
import React, { useContext } from "react";
// @mui
import {
  Table,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Box,
} from "@mui/material";
/// @components
import { Scrollbar } from "@components";
// @context
import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";
// @component
import { TableCoinsBody } from "@components/table/TableCoinBody";
// @scroll
import InfiniteScroll from "react-infinite-scroll-component";
import { useFetchCurrencies } from "@Hook";

// @Interface
interface ITableProps {
  data: any;
  error: any;
  status: string;
  hasNextPage: any;
  fetchNextPage: any;
}

// @jsX
export const TableCoins: React.FC<ITableProps> = ({
  data,
  status,
  error,
  fetchNextPage,
  hasNextPage,
}) => {
  //@ context
  const { currentCurrency, infiniteData } = useContext(
    CurrencyContext
  ) as CurrencyContextType;
  // @table Head
  // @Hook

  const TABLE_HEAD = [
    { id: "ارز دیجیتال", label: "ارز دیجیتال", alignRight: false },
    {
      id: "قیمت خرید",
      label: currentCurrency === "تومان" ? "قیمت خرید" : "قیمت جهانی",
      alignRight: false,
    },
    {
      id: "قیمت فروش",
      label: currentCurrency === "تومان" ? "قیمت فروش" : "ارزش بازار",
      alignRight: false,
    },
    { id: "نمودار", label: "نمودار", alignRight: false },
    { id: "تغییرات", label: "تغییرات", alignRight: false },
    { id: "نشان کردن", label: "نشان کردن", alignRight: false },
  ];
  // @JSX
  return (
    <Box sx={{ direction: "rtl" }} mt={4}>
      <InfiniteScroll
        dataLength={data.meta.paginateHelper.total}
        next={fetchNextPage}
        //@ts-ignore
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        <TableContainer sx={{ minWidth: 800 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#fafafa" }}>
              <TableRow
                sx={{
                  "& th ": {
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                  },
                }}
              >
                {TABLE_HEAD.map((cell, index) => (
                  <TableCell align={"right"} key={cell.id + index}>
                    <Box color={"#212121"}>{cell.label}</Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableCoinsBody data={data} infiniteData={infiniteData} />
          </Table>
        </TableContainer>
      </InfiniteScroll>
    </Box>
  );
};
