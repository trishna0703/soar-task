import { Box, Stack } from "@mui/material";
import React from "react";
import useCreditCards from "../../hooks/useCreditCards";
import CreditCard from "../../components/dashboard/cards/creditCard/CreditCard";

const CreditCards = () => {
  const creditCards = useCreditCards();
  return (
    <Box className="main-content">
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
        {creditCards.map((card) => (
          <CreditCard {...{ card }} key={card.cardNumber} />
        ))}
      </Stack>
    </Box>
  );
};

export default CreditCards;
