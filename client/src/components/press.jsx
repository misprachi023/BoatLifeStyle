import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Flex, Box, Heading } from "@chakra-ui/react";
const PressSlide = () => {
  return (
    <>
      <Box padding="20px" fontSize="30px">
        {" "}
        In the <span style={{ fontWeight: "bold" }}>Press</span>
      </Box>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Flex padding="20px" height="300px" justify="center">
            <Box
              width="50%"
              backgroundColor="#E7F0F5"
              textAlign="center"
              paddingTop={"70px"}
              fontWeight="bold"
              fontSize="30px"
            >
              THE TIMES OF INDIA
            </Box>
            <Box width="50%" textAlign="center" paddingTop={"70px"} fontSize={"20px"} fontWeight={"500"}>
              Boat launches its first 4G calling smartwatches , Boat Lunar{" "}
              <br />
              Pro LTE
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex padding="20px" height="300px" justify="center">
            <Box
              width="50%"
              backgroundColor="#E7F0F5"
              textAlign="center"
              paddingTop={"70px"}
              fontWeight="bold"
              fontSize="30px"
            >
              Hindustani Times
            </Box>
            <Box width="50%" paddingTop={"70px"} textAlign="center"  fontSize={"20px"} fontWeight={"500"}>
              Boat launches its first 4G calling smartwatches , Boat Lunar{" "}
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex padding="20px" height="300px" justify="center">
            <Box
              width="50%"
              backgroundColor="#E7F0F5"
              paddingTop={"70px"}
              textAlign="center"
              fontWeight="bold"
              fontSize="30px"
            >
              <span style={{ color: "red" }}>Business Standard</span>
            </Box>
            <Box width="50%" paddingTop={"70px"} textAlign="center"  fontSize={"20px"} fontWeight={"500"}>
              Boat launches its first 4G calling smartwatches , Boat Lunar{" "}
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex padding="20px" height="300px" justify="center">
            <Box
              width="50%"
              backgroundColor="#E7F0F5"
              paddingTop={"70px"}
              textAlign="center"
              fontWeight="bold"
              fontSize="30px"
            >
              Fashion
            </Box>
            <Box width="50%" paddingTop={"70px"} textAlign="center"  fontSize={"20px"} fontWeight={"500"}>
              Boat launches its first 4G calling smartwatches , Boat Lunar{" "}
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex padding="20px" height="300px" justify={"center"}>
            <Box
              width="50%"
              backgroundColor="#E7F0F5"
              paddingTop={"70px"}
              textAlign="center"
              fontWeight="bold"
              fontSize="30px"
            >
              <span style={{ color: "red" }}>BW</span>{" "}
              <span style={{ color: "blue" }}> BusinessWorld</span>
            </Box>
            <Box width="50%" paddingTop={"70px"} textAlign="center"  fontSize={"20px"} fontWeight={"500"}>
              Boat launches its first 4G calling smartwatches , Boat Lunar{" "}
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default PressSlide;
