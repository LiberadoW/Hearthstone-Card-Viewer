import Card from "./Card";
import { useEffect, useState } from "react";
import sortCards from "../Functions/sortCards";
import filterCards from "../Functions/filterCards";
import CardsPagination from "./CardsPagination";
import CardObject from "../Functions/CardObject";

type DisplayCardProps = {
  setName: string;
  playerClassName: string;
  query: string;
  sortByFilter: string;
  cards: CardObject[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const pageSize: number = 10;

const DisplayCards = ({
  cards,
  playerClassName,
  query,
  sortByFilter,
  currentPage,
  setCurrentPage,
}: DisplayCardProps) => {
  const [pagination, setPagination] = useState({
    from: 0,
    to: pageSize,
  });
  const [filteredCards, setFilteredCards] = useState(cards);

  console.log(cards)


  useEffect(() => {
    const filteredCardsQuery = filterCards(playerClassName, cards, query);
    const sortedFilteredCards = sortCards(filteredCardsQuery, sortByFilter);
    setFilteredCards(sortedFilteredCards);
  }, [playerClassName, cards, query, sortByFilter]);

  const slicedsortedFilteredCards = filteredCards.slice(
    pagination.from,
    pagination.to
  );

  useEffect(() => {
    const from = (currentPage - 1) * pageSize;
    const to = (currentPage - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  }, [currentPage]);

  return (
    <>
    <CardsPagination setCurrentPage={setCurrentPage} filteredCards={filteredCards} pageSize={pageSize}  currentPage={currentPage}/>
      <div className="cards">
        {slicedsortedFilteredCards.map((card: CardObject) => {
          return (
            <Card key={card.cardId} card={card} cardImage={card.img} id={card.cardId} />
          );
        })}
        <div className="flex-dummy"></div>
        <div className="flex-dummy"></div>
        <div className="flex-dummy"></div>
        <div className="flex-dummy"></div>
        <div className="flex-dummy"></div>
      </div>
    </>
  );
};

export default DisplayCards;
