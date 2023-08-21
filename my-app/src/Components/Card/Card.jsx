import React from 'react'
import './card.css'

const Card = ({img, name, title}) => {
    return (
        <div className="cardLg-container">
          <div className="cardLg-image-container">
            <img src={img} alt='img'></img>
          </div>
          <div className='cardLg-container-text'>
            <h1 className='font-Raleway text-[25px] pt-4 uppercase font-bold'>{name}</h1>
            <h4 className="font-Raleway text-[15px] uppercase">{title}</h4>
          </div>
        </div>
      );
}

export default Card