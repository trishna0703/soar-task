import React from "react";
import "./Header.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import SearchInput from "../common/searchInput/SearchInput";
import { ReactComponent as Settings } from "../../assets/settings-outlined.svg";
import { ReactComponent as Notifications } from "../../assets/notification.svg";
import user from "../../assets/user1.svg";

const Header = ({ title }) => {
  return (
    <Stack className="header" direction={"row"}>
      <Typography component={"h2"} className="pageTitle">
        {title}
      </Typography>
      <Stack className="metaSection" direction={"row"} alignItems={"center"}>
        <SearchInput placeholder={"Search for something"} />
        <Typography component={"span"} className="round-icon">
          <Settings />
        </Typography>
        <Typography component={"span"} className="round-icon">
          <Notifications />
        </Typography>
        <Typography component={"span"} className="avatar">
          <Avatar src={user} />
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
