import { Box, Button, Input, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../../common/title/Title";
import useFavoriteTransfers from "../../../hooks/useFavoriteTransfers";
import * as Users from "../../../image-comps/userAvatars";
import "./QuickTransfer.scss";
import { ReactComponent as SendIcon } from "../../../assets/send.svg";
const QuickTransfer = () => {
  const favTransfers = useFavoriteTransfers();

  return (
    <Box>
      <Title title="Quick Transfer" />
      <Box className="generalBox quickTransfersWrapper">
        <Stack direction={"row"} spacing={5} className="quickTransfers">
          {favTransfers.map((favs) => {
            const Avatar = Users[favs.avatar];
            return (
              <Stack
                direction={"column"}
                key={favs.id}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography component={"span"} className="avatar">
                  <Avatar />
                </Typography>
                <Typography
                  component={"h3"}
                  className="textPrimary favTransferName"
                >
                  {favs.name}
                </Typography>
                <Typography
                  component={"span"}
                  className="textPrimary favTransferDesignation"
                >
                  {favs.position}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
        <Stack direction={"row"} spacing={2} className="sendMoneySection">
          <Typography component={"body1"}>Write Amount</Typography>
          <Typography component={"div"} className="sendMoneyInput">
            <Input placeholder="00.00" />
            <Button endIcon={<SendIcon />}>Send</Button>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default QuickTransfer;
