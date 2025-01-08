import "./Sidenav.scss";
import React from "react";
import * as Icons from "../../image-comps/icons";
import MenuItems from "../../data/sidenav_menu.json";
import Logo from "../../assets/mingcute_task-fill.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem, Stack, Typography } from "@mui/material";

const Sidenav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Stack direction="column" spacing={2} className="sidenav">
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
      {MenuItems.map((menu) => {
        const IconComponent = Icons[menu.icon];
        return (
          <MenuItem
            key={menu.id}
            className={`menuItem ${
              location.pathname === menu.href ? "active" : ""
            }`}
            onClick={() => navigate(menu.href)}
          >
            <Typography component={"div"} className="menuIcon">
              <IconComponent />
            </Typography>
            <Typography component={"h3"}>{menu.name}</Typography>
          </MenuItem>
        );
      })}
    </Stack>
  );
};

export default Sidenav;
