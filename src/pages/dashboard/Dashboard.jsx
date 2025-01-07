import React from "react";
import "./Dashboard.scss";
import DashboardContent from "../../components/dashboard/Dashboard";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box className="main-content">
      <DashboardContent />
    </Box>
  );
};

export default Dashboard;
