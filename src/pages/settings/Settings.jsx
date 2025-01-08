import React from "react";
import "./Settings.scss";
import { Box } from "@mui/material";
import SettingsContent from "../../components/settings/Settings";
const Settings = () => {
  return (
    <Box className="main-content">
      <SettingsContent />
    </Box>
  );
};

export default Settings;
