import * as React from 'react';

type CardProps = {
    cardImage: string
    id: string
}

const Card = ({cardImage,id}: CardProps) => {
    return ( 
        <div className="card" id={id}>
            <img src={cardImage} alt="" />
        </div>
     );
}
 
export default Card;