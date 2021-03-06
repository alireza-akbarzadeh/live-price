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
// @context
import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";
// @component
import { TableCoinsBody } from "@components/table/TableCoinBody";
// @scroll

// @Interface
import { TableHead as TableProps } from "@interface/TableHead";
import { Currencies } from "@interface/Currencies";

interface ITableProps {
  data: Currencies[];
  error: unknown;
  status: string;
  lastBookElementRef: unknown;
  meta: {};
  loading: boolean | undefined;
}

// @jsX
export const TableCoins: React.FC<Partial<ITableProps>> = ({
  data,
  lastBookElementRef,
  loading,
}) => {
  //@ context
  const { currentCurrency } = useContext(
    CurrencyContext
  ) as CurrencyContextType;
  // @table Head
  // @Hook

  const TABLE_HEAD: TableProps[] = [
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
      {data?.length === 0 ? (
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "Center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={"/images/NotFound.svg"} alt='Not Found' />
          Not Fount
        </Box>
      ) : (
        <TableContainer sx={{ minWidth: 800, md: { overflow: "auto" } }}>
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
            <TableCoinsBody
              loading={loading}
              lastBookElementRef={lastBookElementRef}
              data={data}
            />
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
