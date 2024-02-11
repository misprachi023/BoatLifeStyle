import React from "react";
import {
  Flex,
  Card,
  Button,
  Link,
  Text,
  Heading,
  Image,
  Stack,
  CardFooter,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CartSlide from "../data/cartdata";

const CartDataStyle = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Grid
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "repeat(2,1fr)",
            ]}
            gap={2}
          >
            {CartSlide.map((item) => (
              <Box
                margin={"1"}
                display="flex"
                alignItems="center"
                outline={"1px solid wheat"}
                borderRadius={"10px"}
                backgroundColor={"#f5f5f5"}
              >
                <Box>
                  <Image
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "80px",
                      // padding: "5px",
                      borderRadius: "10px",
                    }}
                    alt={item.title}
                  />
                </Box>
                <Box textAlign={"center"} alignItems={"center"} padding={"5px"}>
                  <Text fontWeight={"bold"}>{item.title}</Text>
                  <hr />
                  <Text fontWeight={"bold"}>{item.price}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default CartDataStyle;
