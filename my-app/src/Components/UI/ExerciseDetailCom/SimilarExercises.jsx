import React from 'react';
//import Carousel from '../../Carousel/Carousel';
import { SimilarCard } from '../../Card/Card';

import '../../../Styles/exercises.css'

import {AiOutlineArrowRight} from 'react-icons/ai'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  if (!Array.isArray(targetMuscleExercises)) {
    return <p className='font-Raleway text-[40px] max-sm:text-[30px] text-center'>Loading...</p>;
  }

  if (!Array.isArray(equipmentExercises)) {
    return <p className='font-Raleway text-[40px] max-sm:text-[30px] text-center'>Loading...</p>;
  }

  return (
    <>
      <h1 className='font-Raleway text-[30px] max-sm:text-center max-sm:text-[20px] text-[#000] font-bold'>
        Similar <span className='text-[#409915]'>Target Muscle</span> Exercises
      </h1>
      <div className='shoW'>
      <p className='flex font-Raleway text-[30px] max-sm:place-content-center max-sm:text-[20px] text-[#409915] font-bold'>
        Scroll 
        <span className='flex flex-col place-content-center'><AiOutlineArrowRight/></span>
      </p>
      </div>
      <div className="flex  overflow-x-auto max-h-[100vh] hide-scrollbar">
        {targetMuscleExercises.map((item) => (
          <SimilarCard key={item.id} exerciseID={item} />
        ))}
      </div>
      

      <h1 className='font-Raleway text-[30px] max-sm:text-center max-sm:text-[20px] text-[#000] font-bold'>
        Similar <span className='text-[#409915]'>Equipment</span> Exercises
      </h1>
      <div className='shoW'>
      <p className='flex font-Raleway text-[30px] max-sm:place-content-center max-sm:text-[20px] text-[#409915] font-bold'>
        Scroll 
        <span className='flex flex-col place-content-center'><AiOutlineArrowRight/></span>
      </p>
      </div>
      <div className="flex  overflow-x-auto max-h-[100vh] hide-scrollbar">
        {equipmentExercises.map((item) => (
          <SimilarCard key={item.id} exerciseID={item} />
        ))}
      </div>
    </>
  );
};

export default SimilarExercises;
