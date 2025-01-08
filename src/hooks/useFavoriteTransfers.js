import { useEffect, useState } from "react";
import { getFavoriteTransfers } from "../server/favorite-transfers/getFavoriteTransfers";

const useFavoriteTransfers = () => {
  const [favTransfers, setFavTransfers] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    let { data } = await getFavoriteTransfers();
    setFavTransfers(data);
  };

  return favTransfers;
};
export default useFavoriteTransfers;
