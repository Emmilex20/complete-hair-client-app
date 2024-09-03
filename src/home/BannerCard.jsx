import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-20"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-800 text-white text-lg font-semibold p-4 rounded-lg shadow-lg">
  <div className="text-center">
    More On Our Page <span role="img" aria-label="down-arrow">👇👇</span>
  </div>
</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard