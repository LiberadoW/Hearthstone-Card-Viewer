
import { useState } from "react";
import Modal from "@mui/material/Modal";
import CardObject from "../Functions/CardObject";
import parse from "html-react-parser";

type CardProps = {
  cardImage: string;
  id: string;
  card: CardObject;
};

const Card = ({ cardImage, id, card }: CardProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="card" id={id}>
        <img onClick={handleOpen} src={cardImage} alt="" />
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modal">
        <span className="modal-button" onClick={handleClose}>X</span>
          <div className="modal-img">
          <img src={cardImage} alt="" />
          </div>
          
          <div className="card-info">
           
            <p>{card.name}</p>
            <p>{parse(card.flavor.replace(/\[|\]|\\n/g, " "))}</p>
            <p>
              {card.text
                ? parse(card.text.replace(/\[x]|#|_|\$|\\n/g, " "))
                : ""}
            </p>
            <p>
              <span>Type: </span>
              {card.type}
            </p>
            <p>
              <span>Rarity: </span>
              {card.rarity}
            </p>
            <p>
              <span>Set: </span>
              {card.cardSet}
            </p>
            <p>
              <span>Class: </span>
              {card.playerClass}
            </p>
            <p>
              <span>Artist: </span>
              {card.artist}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
