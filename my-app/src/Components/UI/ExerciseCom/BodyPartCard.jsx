import React from 'react'

const BodyPartCard = ({item, bodypart, setBodyPart, }) => {
  return (
    <button
    style={{backgroundColor: bodypart === item ? '#409915' : ''}}
        className='className="inline-block rounded border-[1px] border-[#000] px-6 pb-[6px] pt-2 text-xs font-Raleway uppercase 
        leading-normal text-[#000] transition duration-150 ease-in-out hover:border-[#fff] font-semibold
        hover:text-white hover:bg-[#409915]'
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 300, left: 100, behavior: 'smooth' });
        }}
    >{item}</button>
  )
}

export default BodyPartCard