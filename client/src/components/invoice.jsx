import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
const Invoice = () => {
  return (
    <>
      <Box padding="20px" fontSize="25px">
        {" "}
      </Box>
      <Box margin={"35px"}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123"
              alt=""
            />
            <Text fontSize={["xs", "sm"]}>
              <span>1 Year</span> Warranty
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123"
              alt=""
            />
            <Text fontSize={["xs", "sm"]}>
              <span>7-day</span>Replacement
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123"
              alt=""
            />
            <Text fontSize={["xs", "sm"]}>
              <span>Free</span> Shopping
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123"
              alt=""
            />
            <Text fontSize={["xs", "sm"]}>
              <span>GST</span> Billing
            </Text>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};
export default Invoice;
