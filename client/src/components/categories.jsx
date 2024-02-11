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
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
const CategorySlide = [
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title: "True Wireless Earbuds",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854",
    title: "Neckbands",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853",
    title: "Smart Watches",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854",
    title: "Wireless Headphones",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854",
    title: "Wireless Speakers",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854",
    title: "Wired Headphones",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854",
    title: "Wired Earphones",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Soundbars_d9a7bdfd-e780-4581-ab85-f2e86f84cd28_small.png?v=1684842854",
    title: "Soundbars",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Gaming-Headphones_small.png?v=1684842853",
    title: "Gaming Headphones",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/w_de57f25b-de5b-4d1a-bed0-765975b25da8_small.png?v=1684847228",
    title: "Party Speakers",
  },
];
const CategoryStyle = () => {
  const slidesPerView = useBreakpointValue({ base: 3, md: 5, lg: 10 });
  return (
    <>
      <Box padding="20px" fontSize="25px">
        {" "}
        Shop by <span style={{ fontWeight: "bold" }}>Categories</span>
      </Box>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, FreeMode]}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        freeMode={true}
        // navigatio
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {CategorySlide.map((item) => (
          <SwiperSlide>
            <Box margin="10px">
              <img
                src={item.image}
                style={{ width: "100%", height: "100px", padding: "5px" }}
                alt={item.title}
              />
              <Text textAlign="center" fontSize={["xs", "xs"]}>
                {item.title}{" "}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default CategoryStyle;
