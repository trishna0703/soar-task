import { Box, Button, Stack } from "@mui/material";
import React from "react";
import "./Cards.scss";
import Title from "../../common/title/Title";
import useCreditCards from "../../../hooks/useCreditCards";
import CreditCard from "./creditCard/CreditCard";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const creditCards = useCreditCards();
  const navigate = useNavigate();
  return (
    <Box>
      <Title title="My Cards">
        <Button
          variant="text"
          className="btn-link"
          onClick={() => navigate("/credit-cards")}
        >
          See All
        </Button>
      </Title>
      <Stack direction={"row"} spacing={4}>
        {creditCards.slice(0, 2).map((card) => (
          <CreditCard {...{ card }} key={card.cardNumber} />
        ))}
      </Stack>
    </Box>
  );
};

export default Cards;
