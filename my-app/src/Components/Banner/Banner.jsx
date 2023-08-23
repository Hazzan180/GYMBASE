import React from 'react'

const Banner = ({title}) => {
  return (
    <section className='flex flex-col justify-center text-center place-items-center max-md:h-[30vh] h-[50vh] w-[100%]' 
    style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('https://rb.gy/wuukb')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

      }}
    >
        <h1 className='text-[50px] max-sm:text-[30px] uppercase font-Raleway font-bold text-[#fff]'>{title}</h1>
    </section>
  )
}

export default Banner