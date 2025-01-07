import React from "react";
import "./Dashboard.scss";
import Cards from "./cards/Cards";
import { Stack } from "@mui/material";
import Transactions from "./transactions/Transactions";
import ExpenseStats from "./expenseStats/ExpenseStats";
import QuickTransfer from "./quickTransfer/QuickTransfer";
import WeeklyActivity from "./weeklyActivity/WeeklyActivity";
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
