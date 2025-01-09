import "./Sidenav.scss";
import React from "react";
import * as Icons from "../../image-comps/icons";
import MenuItems from "../../data/sidenav_menu.json";
import Logo from "../../assets/mingcute_task-fill.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, MenuItem, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/features/sidebarSlice";

const Sidenav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.sidebar.isVisible);
  const isMobileOrTablet = window.matchMedia("(max-width: 992px)").matches;

  return (
    showSidebar && (
      <Stack direction="column" spacing={2} className="sidenav">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={4}
            justifyContent={"space-between"}
            className="logoWrapper"
          >
            <img src={Logo} alt="logo" />
            <Typography component={"h1"} className="logoTitle">
              Soar Task
            </Typography>
          </Stack>
          <Button
            onClick={() => dispatch(toggleSidebar())}
            className="closeSidebar textPrimary primaryColor"
          >
            X
          </Button>
        </Stack>
        {MenuItems.map((menu) => {
          const IconComponent = Icons[menu.icon];
          return (
            <MenuItem
              key={menu.id}
              className={`menuItem ${
                location.pathname === menu.href ? "active" : ""
              }`}
              onClick={() => {
                navigate(menu.href);
                if (isMobileOrTablet) {
                  dispatch(toggleSidebar());
                }
              }}
            >
              <Typography component={"div"} className="menuIcon">
                <IconComponent />
              </Typography>
              <Typography component={"h3"}>{menu.name}</Typography>
            </MenuItem>
          );
        })}
      </Stack>
    )
  );
};

export default Sidenav;
