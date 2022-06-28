import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Box } from "@mui/material";

const data = [
  {
    name: "Sun",
    value: 10,
  },
  {
    name: "Mon",
    value: 30,
  },
  {
    name: "Tue",
    value: 100,
  },
  {
    name: "Wed",
    value: 30,
  },
  {
    name: "Thu",
    value: 23,
  },
  {
    name: "Fri",
    value: 34,
  },
  {
    name: "Sat",
    value: 11,
  },
];
interface iSimpleChartProps {
  chart: any;
  percent: any;
}
export const SimpleLineChart = ({ chart, percent }: iSimpleChartProps) => {
  const [tooltip, setTooltip] = useState<any>(null);
  const [point, setPoints] = useState(null);
  const CustomTooltip = (payload: any) => {
    if (payload) {
      return (
        <Box
          sx={{
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            text: "white",
            width: "40px",
            h: "32px",
          }}
        >
          <p>{payload[0]?.value}</p>
        </Box>
      );
    }
    return null;
  };
  const dataChart = chart?.map((item: any, index: number) => {
    return { value: item[index] };
  });
  const updateTooltip = (e: any) => {
    let x = Math.round(e.cx);
    let y = Math.round(e.cy);

    tooltip.style.opacity = "1";
    tooltip.style.transform = `translate(${x}px, ${y}px)`;
    tooltip.childNodes[0].innerHTML = e.value;
  };

  const onChartMouseMove = (chart: any) => {
    if (chart.isTooltipActive) {
      if (point) {
        setPoints(point);
        updateTooltip(chart);
      }
    }
  };

  const onChartMouseLeave = (e: any) => {
    setPoints(null);
    updateTooltip(e);
  };
  return (
    <Box
      sx={{
        // display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          ml: 24,
          // display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          // width: 48,
          alignItems: "center",
          mt: "32px",
          mb: "10px",
          "& > .caption2 , & > .subheading2": {
            display: "none",
          },
        }}
      >
        <p className="caption2">ผลลัพธ์</p>
        <p className="subheading2">680</p>
      </Box>
      <LineChart width={330} height={50} data={dataChart}>
        <CartesianGrid vertical={false} opacity="0.2" />
        {/*<XAxis*/}
        {/*  tick={{ fill: "black" }}*/}
        {/*  axisLine={false}*/}
        {/*  tickLine={false}*/}
        {/*  dataKey="name"*/}
        {/*/>*/}
        {/*<YAxis*/}
        {/*  tickCount={0}*/}
        {/*  axisLine={false}*/}
        {/*  tickLine={false}*/}
        {/*  tick={{ fill: "black" }}*/}
        {/*  type="category"*/}
        {/*/>*/}
        <Line
          fill={percent > 0 ? "#74d4ab" : "#ef6b64"}
          stroke={percent > 0 ? "#74d4ab" : "#ef6b64"}
          type="monotone"
          dataKey="value"
          //@ts-ignore
          activeDot={(e) => {
            onChartMouseMove(e);
            onChartMouseLeave(e);
          }}
        />
      </LineChart>
      <Box
        sx={{
          // display: "flex",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="ui-chart-tooltip"
        ref={(ref) => setTooltip(ref)}
      >
        <div className="ui-chart-tooltip-content"></div>
      </Box>
    </Box>
  );
};