import React,{useState} from 'react'
import './card.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

//trainer card
export const Card = ({img, name, title}) => {
    return (
        <div className="cardLg-container shadow-lg">
          <div className="cardLg-image-container">
            <motion.img whileHover={{scale: 0.9}} src={img} alt='img'></motion.img>
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
              <motion.img whileHover={{scale: 0.9}}
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

//video card
export const VideoCard = ({img, name, title}) => {
    return (
        <div className="rounded overflow-hidden shadow-lg">
              <motion.img whileHover={{scale: 0.9}}
                  className="w-full"
                  src={img}
                  alt={name}
              />
              <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2 mt-2 uppercase font-Raleway">{name}</h1>
              <h4 className="text-gray-700 text-base font-Raleway">{title}</h4>
              </div>
        </div>
    );
}

//similarexercises card
export const SimilarCard = ({exerciseID}) => {
    const { id, bodyPart, equipment, gifUrl, name, target } = exerciseID;
    return (
        <div className="rounded overflow-hidden shadow-lg flex-shrink-0 m-2">
        <motion.img
          whileHover={{ scale: 0.9 }}
          className="w-[100%] h-[50vh]"
          src={gifUrl}
          alt={name}
          loading="lazy"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 font-Raleway">
            BodyPart: {bodyPart}
          </div>
          <p className="text-gray-700 text-base font-Raleway">Name: {name}</p>
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
    );
}