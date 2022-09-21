import CardObject from "../Functions/CardObject";

const filterCards = (
  playerClassName: string,
  cards: CardObject[],
  query: string
) => {
  const filteredCards: CardObject[] =
    playerClassName === "All classes"
      ? cards
      : cards.filter((card) => card.playerClass === playerClassName);

  const filteredCardsQuery: CardObject[] = filteredCards.filter(
    (card) =>
      card.name.toLowerCase().includes(query) ||
      (card.text && card.text.toLowerCase().includes(query))
  );

  return filteredCardsQuery;
};

export default filterCards
