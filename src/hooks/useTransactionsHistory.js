import { useEffect, useState } from "react";
import { getTransactionsHistory } from "../server/transaction-services/getTransactionsHistory";

const useTransactionsHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    let { data } = await getTransactionsHistory();
    setTransactions(data);
  };

  return transactions;
};
export default useTransactionsHistory;
