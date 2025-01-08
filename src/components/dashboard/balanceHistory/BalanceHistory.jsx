import { Box } from "@mui/material";
import React from "react";
import Title from "../../common/title/Title";
import {
  LineChart,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
const generateSmoothData = (numPoints) => {
  const amplitude1 = 20;
  const amplitude2 = 13;
  const offset = 100;
  const period1 = 17;
  const period2 = 30;
  const phaseShift1 = Math.PI / 4;
  const phaseShift2 = Math.PI / 4; // Phase shift for the second wave

  const data = [];
  for (let i = 0; i < numPoints; i++) {
    const x = i;
    const y =
      amplitude1 * Math.sin(((2 * Math.PI) / period1) * x + phaseShift1) +
      amplitude2 * Math.sin(((2 * Math.PI) / period2) * x + phaseShift2) +
      offset +
      2 * x;
    data.push({
      date: `2023-01-${i + 1}`,
      balance: Math.max(0, Math.min(600, y)).toFixed(2),
    });
  }
  return data;
};
// Example usage

const BalanceTrendChart = () => {
  const data = generateSmoothData(60); // 30 points, amplitude=50, period=30, offset=100

  return (
    <Box style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer>
        <AreaChart
          data={data.map((item) => ({
            ...item,
            balanceShadow: item.balance - 40, // Offset the shadow line downward
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
          />
          <YAxis />
          <Tooltip />
          {/* Shadow Line */}
          <Area
            type="monotoneX"
            dataKey="balance"
            stroke="#1814F3" /* Solid blue */
            strokeWidth={3}
            dot={false}
            fill="url(#colorBalance)" /* Reference the gradient by ID */
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

const BalanceHistory = () => {
  return (
    <Box width={"55%"}>
      <Title title="Balance History" />
      <Box className="generalBox">
        <BalanceTrendChart />
      </Box>
    </Box>
  );
};

export default BalanceHistory;
