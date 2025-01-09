import { Box } from "@mui/material";
import React, { useMemo } from "react";
import Title from "../../common/title/Title";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useTransactionsHistory from "../../../hooks/useTransactionsHistory";
import "./ExpenseStats.scss";
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={10}
    >
      <tspan x={x} dy="-0.5em">
        {name}
      </tspan>
      <tspan x={x} dy="1.2em">{`${(percent * 100).toFixed(0)}%`}</tspan>
    </text>
  );
};

const ExpensePieChart = ({ transactions }) => {
  const pieData = useMemo(() => {
    const expensesByCategory = transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, curr) => {
        const category = curr.category || "Others";
        acc[category] = (acc[category] || 0) + Math.abs(curr.amount);
        return acc;
      }, {});

    const totalExpenses = Object.values(expensesByCategory).reduce(
      (a, b) => a + b,
      0
    );

    return Object.entries(expensesByCategory).map(([name, value]) => ({
      name,
      value: Math.round((value / totalExpenses) * 100),
      amount: value,
      offset: Math.floor(Math.random() * 3) + 1,
    }));
  }, [transactions]);

  const COLORS = {
    Entertainment: "#1E3A8A",
    Expense: "#F97316",
    Investment: "#3B82F6",
    Others: "#1F2937",
  };

  return (
    <Box className="w-full h-96 generalBox">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
            label={renderCustomizedLabel}
            labelLine={false}
            innerRadius={50}
          >
            {pieData.map((entry, index) => {
              const offset = entry.offset * 40;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[entry.name]}
                  translateX={
                    Math.cos((index * 90 - 45) * (Math.PI / 180)) *
                      offset *
                      10 +
                    25
                  }
                  translateY={
                    Math.sin((index * 90 - 45) * (Math.PI / 180)) *
                      offset *
                      10 +
                    25
                  }
                />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

const ExpenseStats = () => {
  const transactions = useTransactionsHistory();
  return (
    <Box className="wrapperContainer expenseStatsWrapper">
      <Title title="Expense Statistics" />
      <ExpensePieChart {...{ transactions }} />
    </Box>
  );
};

export default ExpenseStats;
