import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination } from "swiper";
import { Navigation } from "swiper";

import "./introSlider.css";
import 'swiper/swiper-bundle.css';

import SliderArrow from "../../../assets/img/sliderArrow.svg";

function IntroSlider({card}) {
    return (
        <div className="intro-slider" onClick={(e) => e.stopPropagation()}> 
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                speed={800}
                pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
                navigation={{ nextEl: '.swiper-slider__nav-next', prevEl: '.swiper-slider__nav-prev' }}
            >
                <SwiperSlide>
                    <div className="swiper-slide-item-container">
                        {card}
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide-item-container">
                        {card}
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide-item-container">
                        {card}
                    </div>
                </SwiperSlide>

                <div className="swiper-navigation" onClick={(e) => e.stopPropagation()}>
                    <div className="swiper-slider__nav-button swiper-slider__nav-prev" onClick={(e) => {e.stopPropagation()}}>
                        <img src={SliderArrow} alt="slider arrow" />
                    </div>
                    <div className="swiper-pagination" onClick={(e) => e.stopPropagation()}></div>
                    <div className="swiper-slider__nav-button swiper-slider__nav-next" onClick={(e) => e.stopPropagation()}>
                        <img src={SliderArrow} alt="slider arrow" />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default IntroSlider;