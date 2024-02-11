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
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Box, Text, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
const BoatSlide = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
    title: "Airdopes 162",
    text: "60% off",
    price: "₹999",
    rating: 4.9,
    description: "|156",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
    title: "Airdopes 131 PRO",
    price: "₹999",
    text: "67% off",
    rating: 4.9,
    description: "|185",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Flex_Connect.jpg?v=1689751649",
    title: "Wave Flex Connect",
    price: "₹1,499",
    text: "81% off",
    rating: 4.8,
    description: "|31",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765",
    title: "Airdopes 141",
    price: "₹1,999",
    text: "77% off",
    rating: 4.8,
    description: "|667",
  },
];
const BoatStyle = () => {
  const slidesPerView = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  return (
    <>
      <Flex justifyContent={"space-between"}gap={2}>
        <Box padding="20px" fontSize="25px">
          {" "}
          Best Of <span style={{ fontWeight: "bold" }}>BoAt</span>
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

      <HStack
        as={"nav"}
        spacing={4}
        padding={"20px"}
        display={{ base: "none", md: "flex" }}
      >
        <Button fontWeight="bold"> Best Sellers </Button>
        <Link>Home Theater System & Soundbars</Link>
        <Link>Top Earbuds</Link>
        <Link>Top Watches</Link>
        <Link>Top Accessories</Link>
      </HStack>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, FreeMode]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        freeMode={true}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {BoatSlide.map((item) => (
          <SwiperSlide>
            <Box backgroundColor={"#f5f5f5"} borderRadius={"20px"}>
              <img
                src={item.image}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "10px 10px  0px 0px",
                }}
                alt={item.title}
              />
              <Text
                marginLeft="10px"
                fontSize={["xs", "sm"]}
                fontWeight={"bold"}
              >
                {item.title}{" "}
              </Text>
              <Text marginLeft="10px" fontWeight={"bold"}>
                {item.price}{" "}
                <span style={{ color: " turquoise" }}>{item.text}</span>{" "}
              </Text>
              <Flex padding={2} justifyContent={"space-between"} align="center">
                <Flex>
                  {[...Array(1)].map((_, index) => (
                    <StarIcon
                      key={index}
                      color={index < item.rating ? "yellow.400" : "gray.300"}
                    />
                  ))}
                  <Text>
                    {item.rating} <span>{item.description}</span>
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
export default BoatStyle;
