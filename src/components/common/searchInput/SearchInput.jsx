import { Box, Input } from "@mui/material";
import React from "react";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
const SearchInput = ({ placeholder }) => {
  return (
    <Box className="searchInput">
      <SearchIcon />
      <Input type="text" placeholder={placeholder} />
    </Box>
  );
};

export default SearchInput;
