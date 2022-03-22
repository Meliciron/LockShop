import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/swiper-bundle.css';

SwiperCore.use([FreeMode, Navigation, Thumbs]);


function ProductSlider({ images }) {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    let imgPath = "/img/cardsImages/" + images;

    return (
        <div className="product-slider" key={34756509182375}>
            <Swiper
                style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff', width: 605, height: 513, marginBottom: '20px' }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
                key={195781235}
            >
                <SwiperSlide><img style={{ width: 605, height: 513 }} src={`${imgPath}/description4.png`} alt="slide" /></SwiperSlide>
                <SwiperSlide><img style={{ width: 605, height: 513 }} src={`${imgPath}/description1.png`} alt="slide" /></SwiperSlide>
                <SwiperSlide><img style={{ width: 605, height: 513 }} src={`${imgPath}/description2.png`} alt="slide" /></SwiperSlide>
                <SwiperSlide><img style={{ width: 605, height: 513 }} src={`${imgPath}/description3.png`} alt="slide" /></SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
                key={7801}
            >
                <SwiperSlide style={{ width: 142, height: 133, marginRight: 12 }}><img style={{ width: 142, height: 133, cursor: 'pointer' }} src={`${imgPath}/description4.png`} alt="slide" /></SwiperSlide>
                <SwiperSlide style={{ width: 142, height: 133, marginRight: 12 }}><img style={{ width: 142, height: 133, cursor: 'pointer' }} src={`${imgPath}/description1.png`} alt="slide" /></SwiperSlide>
                <SwiperSlide style={{ width: 142, height: 133, marginRight: 12 }}><img style={{ width: 142, height: 133, cursor: 'pointer' }} src={`${imgPath}/description2.png`} alt="slide" /></SwiperSlide>
                <SwiperSlide style={{ width: 142, height: 133 }}><img style={{ width: 142, height: 133, cursor: 'pointer' }} src={`${imgPath}/description3.png`} alt="slide" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductSlider;