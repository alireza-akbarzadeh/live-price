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
// Recharts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

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
  // @ data

  // @JSX
  return (
    <TableBody>
      {data?.items.map((row: any, i: number) => {
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
          >
            <TableCell
              sx={{
                display: "flex",
                gap: 0.6,
                alignItems: "center",
              }}
            >
              <Image src={icon} width={"33"} height={"33"} />
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
                    ? (price * data?.meta.prices.buy).toLocaleString()
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
                    ? (price * data?.meta.prices.sell).toLocaleString()
                    : quote.toLocaleString()}
                </div>
                <div>
                  {currentCurrency === "تومان" ? "تومان" : <span>USDT</span>}
                </div>
              </Box>
            </TableCell>
            <TableCell align="right">
              {/*<AreaChart*/}
              {/*  margin={{*/}
              {/*    top: 10,*/}
              {/*    right: 30,*/}
              {/*    left: 0,*/}
              {/*    bottom: 0,*/}
              {/*  }}*/}
              {/*  width={300}*/}
              {/*  height={160}*/}
              {/*  data={data}*/}
              {/*>*/}
              {/*  <CartesianGrid strokeDasharray="3 3" />*/}
              {/*  <XAxis dataKey="name" />*/}
              {/*  <YAxis />*/}
              {/*  <Tooltip />*/}
              {/*  <Area*/}
              {/*    type="monotone"*/}
              {/*    dataKey="uv"*/}
              {/*    stroke="#8884d8"*/}
              {/*    fill="#8884d8"*/}
              {/*  />*/}
              {/*</AreaChart>*/}
            </TableCell>
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
      {data?.data?.result?.items.length === 0 && (
        <TableBody>
          <TableRow>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "Center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={"/images/NotFound.svg"} alt="Not Found" />
              Not Fount
            </Box>
          </TableRow>
        </TableBody>
      )}
    </TableBody>
  );
};
