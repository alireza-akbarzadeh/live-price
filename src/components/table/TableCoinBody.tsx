//@ React
import React, { useContext } from "react";
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
  lastBookElementRef: any;
}

export const TableCoinsBody: React.FC<ITableCoinsProps> = ({
  data,
  lastBookElementRef,
}) => {
  //@ context
  const { currentCurrency } = useContext(
    CurrencyContext
  ) as CurrencyContextType;
  // @label
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // @ data
  // @JSX
  console.log(data, "in body table");
  return (
    <TableBody>
      {data?.map((row: any, index: any) => {
        if (data.length === index + 1) {
          const { id, icon, faName, enName, coin, price, quote, percent } = row;
          return (
            <TableRow
              ref={() => lastBookElementRef()}
              key={id}
              hover
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
                {/*<Image src={icon} width={"33"} height={"33"} />*/}
                <img
                  src={icon}
                  style={{ width: 33, height: 33 }}
                  alt={faName}
                />
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
                      {index + 1}
                    </Typography>

                    {coin}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {/*<div>*/}
                  {/*  {currentCurrency === "تومان"*/}
                  {/*    ? (price * data?.meta.prices.buy).toLocaleString()*/}
                  {/*    : price}*/}
                  {/*</div>*/}
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
                  {/*<div>*/}
                  {/*  {currentCurrency === "تومان"*/}
                  {/*    ? (price * data?.meta.prices.sell).toLocaleString()*/}
                  {/*    : quote.toLocaleString()}*/}
                  {/*</div>*/}
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
        }
      })}

      {data.map((row: any, index: any) => {
        if (data.length !== index + 1) {
          const { id, icon, faName, enName, coin, price, quote, percent } = row;
          return (
            <TableRow
              ref={lastBookElementRef}
              key={id}
              hover
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
                {/*<Image src={icon} width={"33"} height={"33"} />*/}
                <img
                  src={icon}
                  style={{ width: 33, height: 33 }}
                  alt={faName}
                />
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
                      {index + 1}
                    </Typography>

                    {coin}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {/*<div>*/}
                  {/*  {currentCurrency === "تومان"*/}
                  {/*    ? (price * data?.meta.prices.buy).toLocaleString()*/}
                  {/*    : price}*/}
                  {/*</div>*/}
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
                  {/*<div>*/}
                  {/*  {currentCurrency === "تومان"*/}
                  {/*    ? (price * data?.meta.prices.sell).toLocaleString()*/}
                  {/*    : quote.toLocaleString()}*/}
                  {/*</div>*/}
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
        } else {
          return (
            <div style={{ margin: "50px 0" }} key={data}>
              {index} {data.enName}
            </div>
          );
        }
      })}
    </TableBody>
  );
};
