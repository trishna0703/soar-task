import cards from "../../data/credit_cards_list.json";
export const getCreditCards = async () => {
  return {
    status: 200,
    data: cards.creditCards,
  };
};
