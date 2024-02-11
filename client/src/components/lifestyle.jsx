import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Box, Text,  Flex, useBreakpointValue } from "@chakra-ui/react";
const LifeStyleSlide = [
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/RS_for_shop_by_lifestyle_section_1.png?v=1706763090",
    title: "For Entertainment",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687",
    title: "For Fitness",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349",
    title: "For Parties",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745",
    title: "For Work",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658",
    title: "For Audiophiles",
  },
];
const LifeStyle = () => {
  const slidesPerView = useBreakpointValue({ base: 2, md: 4, lg: 5 });
  return (
    <>
      <Box padding="20px" fontSize="25px">
        {" "}
        Shop by <span style={{ fontWeight: "bold" }}>Lifestyle</span>
      </Box>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, FreeMode]}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        freeMode={true}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {LifeStyleSlide.map((item) => (
          <SwiperSlide>
            <Box
              fontSize={["sm", "md", "md"]}
              margin="10px"
              backgroundColor="#F0FFFF"
              borderRadius="10px"
            >
              <img
                src={item.image}
                style={{ width: "100%", height: "auto", padding: "5px" }}
                alt={item.title}
              />
              <Text
                fontSize={["xs", "md", "lg"]}
                textAlign="center"
                fontWeight="bold"
              >
                {item.title}{" "}
              </Text>
              <Flex padding={"20px"} alignItems={"center"} gap={1} >
            <Text color={"#2F5B96"} fontSize={"15px"} fontWeight={"500"}>
              View all
            </Text>
            <Box>
              <FaRegArrowAltCircleRight  color={"#2F5B96"} /> 
            </Box>
          </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default LifeStyle;
