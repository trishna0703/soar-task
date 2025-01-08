import React, { useState } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import "./Settings.scss";
import EditProfile from "./editProfile/EditProfile";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="tabPanel">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `settings-tab-${index}`,
    "aria-controls": `settings-tabPanel-${index}`,
  };
};

const SettingsContent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="generalBox settingsContent">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="settings-tab">
          <Tab label="Edit Profile" {...a11yProps(0)} className="tab-title" />
          <Tab label="Preferences" {...a11yProps(1)} className="tab-title" />
          <Tab label="Security" {...a11yProps(2)} className="tab-title" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <EditProfile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Preferences Coming Soon...
      </TabPanel>
      <TabPanel value={value} index={2}>
        Security Coming Soon...
      </TabPanel>
    </Box>
  );
};

export default SettingsContent;
