import { Box } from "@mui/material";
import React, { useMemo } from "react";
import Title from "../../common/title/Title";
import "./WeeklyActivity.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import useTransactionsHistory from "../../../hooks/useTransactionsHistory";

const BankingChart = ({ transactions }) => {
  // const chartData = useMemo(() => {
  //   const dailyTotals = new Map();

  //   transactions.forEach((transaction) => {
  //     const date = new Date(transaction.date);
  //     const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

  //     if (!dailyTotals.has(dayName)) {
  //       dailyTotals.set(dayName, { deposit: 0, withdraw: 0 });
  //     }

  //     const amount = Math.abs(transaction.amount);
  //     if (transaction.amount > 0) {
  //       dailyTotals.get(dayName).deposit += amount;
  //     } else {
  //       dailyTotals.get(dayName).withdraw += amount;
  //     }
  //   });

  //   const daysOrder = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   return Array.from(dailyTotals.entries())
  //     .map(([day, values]) => ({
  //       day,
  //       deposit: values.deposit,
  //       withdraw: values.withdraw,
  //     }))
  //     .sort((a, b) => daysOrder.indexOf(a.day) - daysOrder.indexOf(b.day));
  // }, [transactions]);

  // const maxValue = useMemo(() => {
  //   const values = chartData.flatMap((item) => [item.deposit, item.withdraw]);
  //   return Math.ceil(Math.max(...values) / 100) * 100;
  // }, [chartData]);
  const chartData = [
    { day: "Sat", deposit: 220, withdraw: 450 },
    { day: "Sun", deposit: 120, withdraw: 320 },
    { day: "Mon", deposit: 250, withdraw: 300 },
    { day: "Tue", deposit: 350, withdraw: 450 },
    { day: "Wed", deposit: 230, withdraw: 150 },
    { day: "Thu", deposit: 230, withdraw: 380 },
    { day: "Fri", deposit: 320, withdraw: 380 },
  ];
  console.log({ chartData });
  return (
    <Box className="w-full h-96 generalBox">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]}
          />
          <Bar
            dataKey="withdraw"
            fill="#000000"
            radius={[50, 50, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="deposit"
            fill="#4F46E5"
            radius={[50, 50, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

const WeeklyActivity = () => {
  const transactions = useTransactionsHistory();

  return (
    <Box width={"65%"}>
      <Title title="Weekly Activity" />
      <BankingChart {...{ transactions }} />
    </Box>
  );
};

export default WeeklyActivity;
