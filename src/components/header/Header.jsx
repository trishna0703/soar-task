import React, { useEffect } from "react";
import "./Header.scss";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import SearchInput from "../common/searchInput/SearchInput";
import { ReactComponent as Settings } from "../../assets/settings-outlined.svg";
import { ReactComponent as Notifications } from "../../assets/notification.svg";
import user from "../../assets/user1.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/features/sidebarSlice";
const Header = ({ title }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    if (window.innerWidth < 992) {
      handleToggle();
    }
  }, []);

  return (
    <Box className="header">
      <Stack direction={"row"} className="headerInner">
        <MenuIcon className="mobileSidenav" onClick={handleToggle} />
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
      <Stack
        className="mobileMetaSection"
        direction={"row"}
        alignItems={"center"}
      >
        <SearchInput placeholder={"Search for something"} />
      </Stack>
    </Box>
  );
};

export default Header;
