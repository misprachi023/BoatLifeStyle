import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import HoverVideoPlayer from 'react-hover-video-player'
const TribeSlider = () => {
  const slidesPerView = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const breakpoint = {
    md: "300px",
    lg: "300px",
    xl: "350px",
    "2xl": "350px",
  };
  return (
    <>
      <Box padding="20px" fontSize="25px" paddingTop={"20px"}>
        {" "}
        Join the <span style={{ fontWeight: "bold" }}>Tribe</span>
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
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_m5lov99epm2goemk4npgmi1q.mp4"/>
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Party Pal 195
          </Text>
          <Text textAlign={"center"} fontWeight={"bold"}>
           ₹7,499 <span style={{ color: "green" }}>    71% off</span>
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"} 
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_xfrqjnd2d7yhnsalb39os04u.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Wave Elevate Pro
          </Text>
          <Text textAlign={"center"} fontWeight={"bold"}>
           ₹3,799 <span style={{ color: "green" }}>    71% off</span>
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_ss8wlbkjs2uq890vnequcty6.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Nirvana Ion ANC
          </Text>
          <Text textAlign={"center"} fontWeight={"bold"}>
           ₹2,899 <span style={{ color: "green" }}>    71% off</span>
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={breakpoint}   
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_j88xq8kqgwevksxkcw33z5ub.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Wave Sigma
          </Text>
          <Text textAlign={"center"} fontWeight={"bold"}>
           ₹1,599 <span style={{ color: "green" }}>    80% off</span>
          </Text>
        </SwiperSlide>
        
        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_gMW8dkmTGwBEODDUSPloV.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Airdopes 141 ANC
          </Text>
          <Text textAlign={"center"} fontWeight={"bold"}>
           ₹1,799 <span style={{ color: "green" }}>    55% off</span>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_oegv9y5uxixy96p8fma3ancg.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Wave Astra
          </Text>
          <Text textAlign={"center"} fontWeight={"bold"}>
           ₹2,099 <span style={{ color: "green" }}>    55% off</span>
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={breakpoint}
            overflow={"hidden"}
            borderRadius={"10px"}
            objectFit={"cover"}
          >
            <HoverVideoPlayer videoSrc="https://www.boat-lifestyle.com/cdn/shop/files/quinn_ekt7nggih68oxu4cdtiyrg65.mp4" />
          </Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Wave Glory
          </Text>
          <Text textAlign={"center"} fontWeight={"bold"}>
           ₹2,099 <span style={{ color: "green" }}>    55% off</span>
          </Text>
        </SwiperSlide>

        

      </Swiper>
    </>
  );
};
export default TribeSlider;
