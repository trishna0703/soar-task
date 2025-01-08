import quickTransfer from "../../data/quick_transfers.json";
export const getFavoriteTransfers = async () => {
  return {
    status: 200,
    data: quickTransfer,
  };
};
