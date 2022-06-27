//@ React
import React, { useContext } from "react";
//@Next
import Image from "next/Image";
// @mui
import {
  TableCell,
  TableRow,
  Typography,
  Box,
  Checkbox,
  TableBody,
} from "@mui/material";
// @react-icons
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import {
  IoMdArrowDropup,
  IoMdArrowDropright,
  IoMdArrowDropdown,
} from "react-icons/io";
import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";

interface ITableCoinsProps {
  data: any;
}

export const TableCoinsBody: React.FC<ITableCoinsProps> = ({ data }) => {
  //@ context
  const { currentCurrency } = useContext(
    CurrencyContext
  ) as CurrencyContextType;
  // @label
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // @JSX
  return (
    <TableBody>
      {data?.data?.result?.items?.map((row: any, i: number) => {
        const { id, icon, faName, enName, coin, price, quote, percent } = row;
        return (
          <TableRow
            hover
            key={id}
            sx={{
              "& td ": {
                borderBottom: "1px solid #e0e0e0",
                py: 3,
              },
            }}
            tabIndex={-1}
            role="checkbox"
            // selected={isItemSelected}
            // aria-checked={isItemSelected}
          >
            <TableCell sx={{ display: "flex", gap: 0.6, alignItems: "center" }}>
              <Image src={icon} width={"40"} height={"40"} />
              <Box>
                <Typography component={"div"} variant={"body2"}>
                  {enName}
                </Typography>
                <Typography
                  color={"rgba(0, 0, 0, 0.6)"}
                  fontSize={13}
                  component={"span"}
                  variant={"body1"}
                >
                  <Typography
                    component={"span"}
                    sx={{
                      background: "#e0e0e0",
                      fontSize: 14,
                      fontWeight: "bold",
                      px: 0.7,
                      mx: 0.9,
                    }}
                  >
                    {i + 1}
                  </Typography>

                  {coin}
                </Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <div>
                  {currentCurrency === "تومان"
                    ? (
                        price * data?.data?.result.meta.prices.buy
                      ).toLocaleString()
                    : price}
                </div>
                <div>
                  {currentCurrency === "تومان" ? (
                    "تومان"
                  ) : (
                    <img
                      src={"/images/tether.svg"}
                      width={13}
                      height={13}
                      alt={"Tether"}
                    />
                  )}
                </div>
              </Box>
            </TableCell>
            <TableCell align="right">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <div>
                  {currentCurrency === "تومان"
                    ? (
                        price * data?.data?.result.meta.prices.sell
                      ).toLocaleString()
                    : quote.toLocaleString()}
                </div>
                <div>
                  {currentCurrency === "تومان" ? "تومان" : <span>USDT</span>}
                </div>
              </Box>
            </TableCell>
            <TableCell align="right">چارت</TableCell>
            <TableCell
              sx={{
                color:
                  percent > 0
                    ? "rgb(48, 190, 129)"
                    : percent < 0
                    ? "rgb(235, 65, 55)"
                    : "#333",
                fontWight: "bold",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.3px",
              }}
              align="right"
            >
              {percent > 0 ? (
                <IoMdArrowDropup />
              ) : percent < 0 ? (
                <IoMdArrowDropdown />
              ) : (
                <IoMdArrowDropright />
              )}
              {percent}
            </TableCell>
            <TableCell align="right">
              <Checkbox
                color={"warning"}
                {...label}
                icon={<AiOutlineStar fontSize={25} />}
                checkedIcon={<AiTwotoneStar fontSize={25} />}
              />
            </TableCell>
          </TableRow>
        );
      })}
      {/*{isUserNotFound && (*/}
      {/*    <TableBody>*/}
      {/*        <TableRow>*/}
      {/*            <TableCell align="center" colSpan={6} sx={{ py: 3 }}>*/}
      {/*                <SearchNotFound searchQuery={filterName} />*/}
      {/*            </TableCell>*/}
      {/*        </TableRow>*/}
      {/*    </TableBody>*/}
      {/*)}*/}
    </TableBody>
  );
};
