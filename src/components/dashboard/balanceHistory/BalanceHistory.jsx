import { Box } from "@mui/material";
import React from "react";
import Title from "../../common/title/Title";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const generateSmoothData = (numPoints) => {
  const amplitude1 = 22;
  const amplitude2 = 15;
  const offset = 100;
  const period1 = 16;
  const period2 = 29;
  const phaseShift1 = Math.PI / 4;
  const phaseShift2 = Math.PI / 4;

  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  };

  const generateDates = (count) => {
    const dates = [];
    const startDate = new Date("2023-07-01");

    for (let i = 0; i < count; i++) {
      dates.push(new Date(startDate));
      const increment = Math.floor(Math.random() * 3) + 4;
      startDate.setDate(startDate.getDate() + increment);
    }
    return dates;
  };

  const dates = generateDates(numPoints);
  const data = [];

  for (let i = 0; i < numPoints; i++) {
    const x = i;
    const y =
      amplitude1 * Math.sin(((2 * Math.PI) / period1) * x + phaseShift1) +
      amplitude2 * Math.sin(((2 * Math.PI) / period2) * x + phaseShift2) +
      offset +
      2 * x;

    data.push({
      date: formatDate(dates[i]),
      balance: Math.max(0, Math.min(600, y)).toFixed(2),
    });
  }
  return data;
};

const BalanceTrendChart = () => {
  const data = generateSmoothData(40);

  return (
    <Box style={{ width: "100%", height: "260px" }}>
      <ResponsiveContainer>
        <AreaChart
          data={data.map((item) => ({
            ...item,
            balanceShadow: item.balance - 40,
          }))}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(45, 96, 255, 0.25)" />
              <stop offset="100%" stopColor="rgba(45, 96, 255, 0)" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            interval={6}
            tickFormatter={(value) => value.split(" ")[0]}
            axisLine={false}
          />
          <YAxis axisLine={false} />
          <Tooltip />
          <Area
            type="monotoneX"
            dataKey="balance"
            stroke="#1814F3"
            strokeWidth={3}
            dot={false}
            fill="url(#colorBalance)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

const BalanceHistory = () => {
  return (
    <Box width={"55%"} className="wrapperContainer">
      <Title title="Balance History" />
      <Box className="generalBox">
        <BalanceTrendChart />
      </Box>
    </Box>
  );
};

export default BalanceHistory;
