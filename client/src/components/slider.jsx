import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = (props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      //   scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/AD_91_WEB_1440x.jpg?v=1706697486"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/161_Pro_Buds_Banner_WEB_2_1440x.jpg?v=1706516508"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/Ion_Banner_WEB_5fa902ce-7c71-4c80-873d-61c77012f7b5_1440x.gif?v=1702972067"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/Without_Personalization_WEB_Banner_1_1440x.jpg?v=1703831371"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;
