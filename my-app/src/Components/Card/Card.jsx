import React,{useState} from 'react'
import './card.css'
import {Link} from 'react-router-dom'


//trainer card
export const Card = ({img, name, title}) => {
    return (
        <div className="cardLg-container shadow-lg">
          <div className="cardLg-image-container">
            <img src={img} alt='img'></img>
          </div>
          <div className='cardLg-container-text'>
            <h1 className="font-bold text-xl mb-2 mt-2 uppercase font-Raleway">{name}</h1>
            <h4 className="text-gray-700 text-base font-Raleway">{title}</h4>
          </div>
        </div>
      );
}

//exercises card
export const ExercisesCard = ({ exerciseID }) => {

  const { id, bodyPart, equipment, gifUrl, name, target } = exerciseID;
  const [loading, setLoading] = useState(true);

  return (
      <Link to={`/exercise/${id}`}>
          <div className="rounded overflow-hidden shadow-lg">
              <img
                  className="w-full"
                  src={gifUrl}
                  alt={name}
                  loading="lazy"
                  onLoad={() => setLoading(false)} // Update loading state when image loads
              />
              {loading && ( // Display loading indicator while image is loading
                  <div className="w-full h-64 flex justify-center items-center">
                      <p>Loading...</p>
                  </div>
              )}
              <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 font-Raleway">
                      BodyPart: {bodyPart}
                  </div>
                  <p className="text-gray-700 text-base font-Raleway">
                      Name: {name}
                  </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                  <span className="inline-block font-Raleway bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Target: {target}
                  </span>
                  <span className="inline-block font-Raleway bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Equipment: {equipment}
                  </span>
              </div>
          </div>
      </Link>
  );
};
