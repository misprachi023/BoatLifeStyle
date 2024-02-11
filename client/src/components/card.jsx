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
import { Link } from "react-router-dom";
import "swiper/css/scrollbar";
import { StarIcon } from "@chakra-ui/icons";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Box, Text, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
const CardSlide = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
    title: "Nirvana Ion",
    price: "₹2,229 ",
    text: "71% off",
    rating: 5,
    description: "|62",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
    title: "Airpods 131",
    price: "₹899",
    text: "70% off",
    rating: 4.9,
    description: "|1339",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
    title: "Airpods 161",
    price: "₹999",
    text: "60% off",
    rating: 4.8,
    description: "|1556",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_235_V2_ac99fe3f-ea0d-4a97-ae36-ee20e835dbe8.png?v=1688047719",
    title: "Rockerz 235 V2",
    price: "₹999",
    text: "67% off",
    rating: 4.5,
    description: "|1074",
  },
];
const CardStyle = () => {
  const slidesPerView = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        {" "}
        <Box padding="20px" fontSize="25px">
          {" "}
          Today <span style={{ fontWeight: "bold" }}>Offers</span>
        </Box>
        <Link to="/personalisation">
        <Flex padding={"20px"} alignItems={"center"} gap={1} >
            <Text color={"#2F5B96"} fontSize={"15px"} fontWeight={"500"}>
              View all
            </Text>
            <Box>
              <FaRegArrowAltCircleRight  color={"#2F5B96"} /> 
            </Box>
          </Flex>
        </Link>
      </Flex>

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
        {CardSlide.map((item) => (
          <SwiperSlide>
            <Box size={["xs", "sm", "sm", "sm"]} backgroundColor={"#f5f5f5"}>
              <img
                src={item.image}
                style={{
                  width: "100%",
                  height: "auto",
                  padding: "5px",
                  border: "10px 10px  0px 0px",
                }}
                alt={item.title}
              />
              <Text marginLeft="10px" fontWeight={"bold"}>
                {item.title}{" "}
              </Text>
              <Text marginLeft="10px" fontWeight={"bold"}>
                {item.price}{" "}
                <span style={{ color: " turquoise" }}> {item.text}</span>
              </Text>
              <Flex
                align="center"
                justifyContent="space-between"
                marginLeft="10px"
                padding={2}
              >
                <Flex>
                  {[...Array(1)].map((_, index) => (
                    <StarIcon
                      key={index}
                      color={index < item.rating ? "yellow.400" : "gray.300"}
                    />
                  ))}
                  <Text>
                    {item.rating} <span> {item.description}</span>
                  </Text>
                </Flex>
                <Button
                  size={["xs", "md"]}
                  colorScheme="black"
                  background="black"
                >
                  Add to cart
                </Button>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default CardStyle;
