import { Box, Stack } from "@mui/material";
import React from "react";
import Cards from "./cards/Cards";
import "./Dashboard.scss";
import Transactions from "./transactions/Transactions";
import WeeklyActivity from "./weeklyActivity/WeeklyActivity";
import ExpenseStats from "./expenseStats/ExpenseStats";
import QuickTransfer from "./quickTransfer/QuickTransfer";
import BalanceHistory from "./balanceHistory/BalanceHistory";

const DashboardContent = () => {
  return (
    <Box className="dashboardContent">
      <Cards />
      <Transactions />
      <WeeklyActivity />
      <ExpenseStats />
      <QuickTransfer />
      <BalanceHistory />
    </Box>
  );
};

export default DashboardContent;
