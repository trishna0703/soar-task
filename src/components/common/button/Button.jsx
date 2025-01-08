import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ buttonText, type, onClick, disabled }) => {
  return (
    <Button
      className={`primaryButton ${disabled ? "disabledButton" : ""}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </Button>
  );
};

export default PrimaryButton;
