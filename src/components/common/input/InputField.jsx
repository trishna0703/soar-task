import { Box, Input, Typography } from "@mui/material";
import React from "react";

const InputField = ({ field, onChange, error }) => {
  const { key, label, inputType, placeholder, validationMessage } = field;
  return (
    <Box className="inputFieldWrapper">
      <label className="textPrimary">{label}</label>
      <Input
        name={key}
        type={inputType}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`customInputField ${error ? "field-error" : ""}`}
      />
      {error && (
        <Typography className="validationMsg" component={"body1"}>
          {validationMessage}
        </Typography>
      )}
    </Box>
  );
};

export default InputField;
