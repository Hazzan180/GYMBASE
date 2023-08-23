import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './heroSlider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const HeroSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src='https://shorturl.at/ADNPR' alt='slider1' />
          <div className="text">
            <h2 className='text-[50px] font-Raleway font-bold text-[#fff]'>No Pain No Gain</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://shorturl.at/bhtJS' alt='slider2' />
          <div className="text">
            <h2 className='text-[50px] font-Raleway font-bold text-[#fff]'>Turn Fat To Fitness</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://shorturl.at/flHZ9' alt='slider3' />
          <div className="text">
            <h2 className='text-[50px] font-Raleway font-bold text-[#fff]'>Keep Your Body Fit And Strong</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://shorturl.at/jnuMQ' alt='slider4' />
          <div className="text">
            <h2 className='text-[50px] font-Raleway font-bold text-[#fff]'>Build A Perfect Muscle</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://shorturl.at/ituU5' alt='slider' />
          <div className="text">
            <h2 className='text-[50px] font-Raleway font-bold text-[#fff]'>Shape Your Body</h2>
          </div>
        </SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end" style={{color: '#fff'}}>
          <svg viewBox="0 0 48 48" ref={progressCircle} >
            <circle cx="24" cy="24" r="20" style={{stroke: '#fff'}}></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
  )
}

export default HeroSlider





