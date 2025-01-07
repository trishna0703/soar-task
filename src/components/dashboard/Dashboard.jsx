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
    <Stack
      direction={"row"}
      gap={4}
      flexWrap={"wrap"}
      className="dashboardContent"
    >
      <Cards />
      <Transactions />
      <WeeklyActivity />
      <ExpenseStats />
      <QuickTransfer />
      <BalanceHistory />
    </Stack>
  );
};

export default DashboardContent;
