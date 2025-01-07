import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as CreditCardChip } from "../../../../assets/Chip_Card.svg";
import { ReactComponent as CreditCardChipDark } from "../../../../assets/Chip_Card_dark.svg";
import { ReactComponent as MasterCardIcon } from "../../../../assets/masterType.svg";
import { ReactComponent as VisaCardIcon } from "../../../../assets/visa.svg";
import { ReactComponent as AmexCardIcon } from "../../../../assets/amex.svg";

const MaskedCard = ({ cardNumber }) => {
  const maskCardNumber = (cardNumber) =>
    cardNumber.replace(/(\d{4})-\d{4}-\d{4}-(\d{4})/, "$1 **** **** $2");

  return (
    <Typography component={"h5"} className="cardNumber">
      {maskCardNumber(cardNumber)}
    </Typography>
  );
};
const CreditCard = ({ card }) => {
  const getCardIcon = () => {
    switch (card.cardType) {
      case "visa":
        return <VisaCardIcon />;
      case "master":
        return <MasterCardIcon />;
      case "amex":
        return <AmexCardIcon />;
      default:
        return <MasterCardIcon />;
    }
  };
  const getCardChip = () => {
    switch (card.cardType) {
      case "visa":
        return <CreditCardChipDark />;
      default:
        return <CreditCardChip />;
    }
  };
  return (
    <Box className={`creditCard ${card.cardType}`}>
      <Stack direction={"row"} className="cardRowWrapper">
        <Typography component={"div"}>
          <label>Balance</label>
          <Typography component={"h5"} className="cardBalance">
            ${card.balance}
          </Typography>
        </Typography>
        <Typography component={"div"}>{getCardChip()}</Typography>
      </Stack>

      <Stack direction={"row"} className="cardRowWrapper">
        <Typography component={"div"}>
          <label>Card Holder</label>
          <Typography component={"h5"}>{card.cardHolderName}</Typography>
        </Typography>

        <Typography component={"div"}>
          <label>Valid Thru</label>
          <Typography component={"h5"}>{card.validThru}</Typography>
        </Typography>
      </Stack>

      <Stack direction={"row"} className="cardRowWrapper cardNumberSection">
        {<MaskedCard cardNumber={card.cardNumber} />}
        {getCardIcon()}
      </Stack>
    </Box>
  );
};

export default CreditCard;
