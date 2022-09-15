import * as React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

type Props = {
  setName: string;
  playerClassName: string;
};

const FetchCards = ({ setName, playerClassName }: Props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${setName}?collectible=1`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0ecee4585fmsh033f34690b7ff7bp15e48ejsna3b64b419bc1",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, [setName]);

  const filteredCards = playerClassName === "All" ? cards : cards.filter(
    (card: { playerClass: string }) => card.playerClass === playerClassName
  );

  console.log(filteredCards)

  return (
    <div className="cards">
      {filteredCards.map((card: { img: string; cardId: string }) => {
        return <Card key={card.cardId} cardImage={card.img} id={card.cardId} />;
      })}
    </div>
  );
};

export default FetchCards;
