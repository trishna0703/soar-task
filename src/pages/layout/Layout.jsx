import { Box } from "@mui/material";
import React from "react";
import Sidenav from "../../components/sidenav/Sidenav";
import Header from "../../components/header/Header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Sidenav />
      <Header title={"Overview"} />
      {children}
    </Box>
  );
};

export default Layout;
