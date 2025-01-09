import { Box, Button, Input, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../common/title/Title";
import useFavoriteTransfers from "../../../hooks/useFavoriteTransfers";
import * as Users from "../../../image-comps/userAvatars";
import "./QuickTransfer.scss";
import { ReactComponent as SendIcon } from "../../../assets/send.svg";
import CaretDownIcon from "../../../assets/caret.svg";
const QuickTransfer = () => {
  const favTransfers = useFavoriteTransfers();
  const [offset, setOffset] = useState(0);
  const [selectedContactId, setSelectedContactId] = useState(1);
  const [renderFavs, setRenderFavs] = useState(
    [...favTransfers].slice(offset, 3)
  );

  useEffect(() => {
    let trimFavs = [...favTransfers].slice(offset, offset + 3);
    setRenderFavs(trimFavs);
  }, [offset, favTransfers]);

  return (
    <Box className="wrapperContainer">
      <Title title="Quick Transfer" />
      <Box className="generalBox quickTransfersWrapper">
        <Stack
          direction={"row"}
          spacing={3}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} spacing={3} className="quickTransfers">
            {renderFavs.map((favs) => {
              const UserAvatar = Users[favs.avatar];
              return (
                <Stack
                  direction={"column"}
                  key={favs.id}
                  justifyContent={"center"}
                  alignItems={"center"}
                  onClick={() => setSelectedContactId(favs.id)}
                  className={`${
                    favs.id === selectedContactId ? "selected" : ""
                  } cursor-pointer quickContact`}
                >
                  <Typography component={"span"} className="avatar">
                    <UserAvatar />
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
          <Button
            className="nextButton"
            onClick={() =>
              offset + 3 < favTransfers.length
                ? setOffset((prev) => prev + 3)
                : setOffset(0)
            }
          >
            <img src={CaretDownIcon} alt="next" />
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={2} className="sendMoneySection">
          <Typography variant={"body1"}>Write Amount</Typography>
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
