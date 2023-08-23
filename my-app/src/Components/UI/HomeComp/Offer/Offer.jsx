import React from 'react'
import './offer.css'

import {motion} from 'framer-motion'

const serviceData = [
    {
      img: 'https://rb.gy/byf63',
      title: 'CROSSFIT',
      about: 'High-intensity fitness training program that combines elements of various exercises, including weightlifting, cardio, gymnastics, and functional movements.',
    },
    {
      img: 'https://rb.gy/syayf',
      title: 'HEALTHY LIFE',
      about: 'Prioritizing your well-being through healthy habits supports your physical vitality, mental clarity, and emotional resilience, contributing to a fulfilling and vibrant life.',
    },
    {
      img: 'https://rb.gy/nesec',
      title: 'STRATEGIES',
      about: 'Effective strategies consider strengths, weaknesses, opportunities, and threats, adapting to changing circumstances while maintaining a clear focus on coming to gym',
    },
    {
      img: 'https://rb.gy/ftmy0',
      title: 'WORKOUT',
      about: 'Customizing workouts based on individual goals and fitness levels helps individuals achieve desired results while promoting physical well-being.',
    }
  ]

const Offer = () => {
  return (
    <section className='offer'>
     <h1 data-aos="fade-down" data-aos-duration="1000" className='font-Raleway max-sm:text-[30px] text-[50px] text-[#409915] font-bold'>WHAT WE OFFER</h1>

     <div className='feature'>
        <div className='feature-box section-p1'>
        {
          serviceData.map((item, index) => (
            <div className='fe-box cursor-pointer' key={index}>
             <motion.img whileHover={{scale: 0.6}} src={item.img} className='mb-[20px]'/>
              <h6 className='font-Raleway text-[30px] text-[#000] font-bold'>{item.title}</h6>
              <p className='font-Raleway text-[gray]'>{item.about}</p>
            </div>
          ))
        }
        </div>
      </div>

    </section>
  )
}

export default Offer