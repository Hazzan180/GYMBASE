import React from 'react'
import './carousel.css'

const Carousel = ({children}) => {
    return (
        <>
          <div className="carousel-wrapper">
            <div className="carousel-item-container">{children}</div>
          </div>
        </>
    );
}

export default Carousel