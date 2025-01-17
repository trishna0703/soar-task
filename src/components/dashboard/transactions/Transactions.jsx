import React from "react";
import "./Transactions.scss";
import Title from "../../common/title/Title";
import { Box, Stack, Typography } from "@mui/material";
import useTransactionsHistory from "../../../hooks/useTransactionsHistory";

const Transactions = () => {
  const recentTransactions = useTransactionsHistory();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };
  return (
    <Box className="wrapperContainer recentTransactionsWrapper">
      <Title title="Recent Transactions" />
      <Box className="recentTransactions">
        <Box className="generalBox recentTransactionsInner">
          {recentTransactions.slice(0, 3).map((transaction) => {
            return (
              <Stack
                direction="row"
                key={transaction.id}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <Box
                  className={`transactionIcon`}
                  sx={{
                    backgroundColor:
                      transaction.amount < 0 ? "#fbe7e7" : "#bbf2e1",
                  }}
                >
                  <Typography variant="h6">{transaction.icon}</Typography>
                </Box>
                <Box className="transactionDescription">
                  <Typography variant="body1">
                    {transaction.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {formatDate(transaction.date)}
                  </Typography>
                </Box>
                <Box className="ml-auto">
                  <Typography
                    variant="body1"
                    className="textPrimary"
                    sx={{
                      color: transaction.amount < 0 ? "#FF4B4A" : "#41D4A8",
                      fontWeight: "bold",
                    }}
                  >
                    {transaction.amount < 0
                      ? `- $${Math.abs(transaction.amount).toFixed(2)}`
                      : `+ $${transaction.amount.toFixed(2)}`}
                  </Typography>
                </Box>
              </Stack>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Transactions;
