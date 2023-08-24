import React from 'react'
import equipmentImg from '../../../assets/icons/equipment.png'
import bodyPartImg from '../../../assets/icons/body-part.png'
import targetImg from '../../../assets/icons/target.png'


const Detail = ({exerciseDetail}) => {
    const {bodyPart, equipment, gifUrl, name, target, id } = exerciseDetail

    const detail = [
        {
            icon: bodyPartImg,
            name: bodyPart,
        },
        {
            icon: targetImg,
            name: target,
        },
        {
            icon: equipmentImg,
            name: equipment,
        },
    ]
  return (
    <div className='flex max-md:flex-col flex-row justify-between gap-10'>
        <div className='w-[50%] max-md:w-[100%]'>
            <img src={gifUrl} alt={name} loading='lazy' className='w-[100%] h-[100%]'/>
        </div>
        <div className='w-[50%] max-md:w-[100%]'>
           <h1 className='mb-5 font-Raleway uppercase text-[40px] max-sm:text-[30px] text-[#000] font-bold'>{name}</h1>
           <p className='text-[gray] font-Raleway text-[18px]'>
            Exercises Keep you strong. {name} {''} is one of the
            best exercise to target your {target}. It helps burn calories, 
            contributing to weight loss and weight maintenance. 
            It also helps regulate metabolism, making it easier to manage a healthy weight.
           </p> 
           <div className='mt-7'>
            {
                detail.map((item, index) => (
                    <div key={index} className='flex gap-5 mb-7'>
                        <button>
                            <img src={item.icon} alt={item.name} />
                        </button>
                        <h1 className='flex flex-col place-content-center tex-[35px] font-semibold text-[#000] text-center'>{item.name}</h1>
                    </div>
                ))
            }
           </div>
        </div>
    </div>
  )
}

export default Detail