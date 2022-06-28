import React from "react";
// @mui
import { TableRow, TableBody } from "@mui/material";
// @components
import TableItem from "@components/table/TableItem";
// @interface
interface ITableCoinsProps {
  data: any;
  lastBookElementRef: any;
}
// @JSX
export const TableCoinsBody: React.FC<ITableCoinsProps> = ({
  data,
  lastBookElementRef,
}) => {
  // @JSX
  return (
    <TableBody>
      <>
        {data?.map((row: any, index: any) => {
          const { id, icon, faName, enName, coin, price, quote, percent } = row;
          if (data.length === index + 1) {
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
                <TableItem
                  id={id}
                  icon={icon}
                  faName={faName}
                  enName={enName}
                  coin={coin}
                  price={price}
                  quote={quote}
                  percent={percent}
                  index={index}
                />
              </TableRow>
            );
          } else {
            return (
              <TableRow
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
                <TableItem
                  id={id}
                  icon={icon}
                  faName={faName}
                  enName={enName}
                  coin={coin}
                  price={price}
                  quote={quote}
                  percent={percent}
                  index={index}
                />
              </TableRow>
            );
          }
        })}
      </>
    </TableBody>
  );
};
