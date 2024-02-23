import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import HoverVideoPlayer from "react-hover-video-player";
import { FreeMode, Pagination } from "swiper/modules";
const Slider = () => {
  const slidesPerView = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const breakpoint = {
    md: "200px",
    lg: "300px",
    xl: "350px",
    "2xl": "300px",
  };
  return (
    <>
      <Box padding="20px" fontSize="25px">
        {" "}
        Explore <span style={{ fontWeight: "bold" }}>Bestsellers</span>
      </Box>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer style={{ width: "100%" , height: "100%", padding: "5px", borderRadius: "10px"}} videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Smartwatches
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Wireless Earbuds
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Neckbanda
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Wirless Speakers
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Headphone
          </Text>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
