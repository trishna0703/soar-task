import transactions from "../../data/transactions.json";
export const getTransactionsHistory = async () => {
  return {
    status: 200,
    data: transactions,
  };
};
