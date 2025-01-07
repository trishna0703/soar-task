import { Stack, Typography } from "@mui/material";
import React from "react";

const Title = ({ title, children }) => {
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={"row"}
    >
      <Typography component={"h3"} className="sectionTitle">
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default Title;
