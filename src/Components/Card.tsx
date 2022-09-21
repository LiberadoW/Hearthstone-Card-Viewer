import * as React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import CardObject from "../Functions/CardObject";

type CardProps = {
  cardImage: string;
  id: string;
  card:CardObject;
};

const Card = ({ cardImage, id,card }: CardProps) => {
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
        
        <img src={cardImage} alt="" />
        <div className="card-info">
            <h3>{card.name}</h3>
            <p>{card.flavor}</p>
        </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
