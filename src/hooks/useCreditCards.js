import { useEffect, useState } from "react";
import { getCreditCards } from "../server/credit-card-services/getCreditCards";

const useCreditCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    let { data } = await getCreditCards();
    setCards(data);
  };

  return cards;
};
export default useCreditCards;
