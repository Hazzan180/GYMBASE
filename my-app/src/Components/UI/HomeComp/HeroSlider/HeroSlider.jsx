import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './heroSlider.css';

import slider1 from '../../../../assets/images/slider1.jpg'
import slider2 from '../../../../assets/images/slider7.jpg'
import slider3 from '../../../../assets/images/slider6.jpg'
import slider4 from '../../../../assets/images/slider9.jpg'
import slider5 from '../../../../assets/images/slider2.jpg'



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
          <img src={slider1} alt='slider1' />
          <div className="text">
            <h2 className='text-[50px] font-Raleway font-bold text-[#fff]'>No Pain No Gain</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt='slider2' />
          <div className="text">
            <h2 className='text-[50px] font-Raleway font-bold text-[#fff]'>Turn Fat To Fitness</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt='slider3' />
          <div className="text">
            <h2 className='text-[50px] font-Raleway font-bold text-[#fff]'>Keep Your Body Fit And Strong</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt='slider4' />
          <div className="text">
            <h2 className='text-[50px] font-Raleway font-bold text-[#fff]'>Build A Perfect Muscle</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt='slider' />
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





