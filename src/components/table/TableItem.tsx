import React, { useContext } from "react";
import { Box, Checkbox, TableCell, Typography } from "@mui/material";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";

interface ITableProps {
  index: any;
  id: string;
  icon: string;
  faName: string;
  enName: string;
  coin: string;
  price: number;
  quote: string;
  percent: number;
}
export const TableItem: React.FC<ITableProps> = ({
  icon,
  faName,
  enName,
  coin,
  percent,
  index,
  id,
  price,
  quote,
}: ITableProps) => {
  //@ context
  const { currentCurrency, meta } = useContext(
    CurrencyContext
  ) as CurrencyContextType;
  // @label
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <TableCell
        sx={{
          display: "flex",
          gap: 0.6,
          alignItems: "center",
        }}
      >
        {/*<Image src={icon} width={"33"} height={"33"} />*/}
        <img src={icon} style={{ width: 33, height: 33 }} alt={faName} />
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
          <div>
            {currentCurrency === "تومان"
              ? //@ts-ignore
                (price * meta?.prices?.buy).toLocaleString()
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
              ? //@ts-ignore
                (price * meta.prices?.sell).toLocaleString()
              : quote.toLocaleString()}
          </div>
          <div>{currentCurrency === "تومان" ? "تومان" : <span>USDT</span>}</div>
        </Box>
      </TableCell>
      <TableCell align="center">
        {percent > 0 ? (
          <Box
            sx={{
              height: "30px",
              textAlign: "center",
              boxSizing: " content-box",
              filter: "hue-rotate(85deg) saturate(80%) brightness(0.85)",
            }}
            component={"img"}
            src={"/images/chart-1.svg"}
          />
        ) : (
          <Box
            sx={{
              height: "30px",
              textAlign: "center",
              boxSizing: " content-box",
              filter:
                " hue-rotate(300deg) saturate(210%) brightness(0.7) contrast(170%)",
            }}
            component={"img"}
            src={"/images/chart-2.svg"}
          />
        )}
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
    </>
  );
};

export default TableItem;
