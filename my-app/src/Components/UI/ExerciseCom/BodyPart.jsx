import React from 'react';
import Carousel from '../../Carousel/Carousel';
import BodyPartCard from './BodyPartCard';

const BodyPart = ({data, setBodyPart, bodypart}) => {
  return (
    <div className='px-[80px] max-sm:px-[20px] max-md:px-[40px]'>
  <Carousel>
   <div className='flex justify-start max-sm:justify-start gap-[20px]'>
    {data.map((item) => (
      <div 
      key={item.id || item}
      itemID={item.id || item}
      title={item.id || item}
      >
        <BodyPartCard  item={item} bodypart={bodypart} setBodyPart={setBodyPart}/>
      </div>
    ))}
   </div>
   </Carousel>
   </div>
  )
}

export default BodyPart