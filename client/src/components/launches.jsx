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
import { Link, useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Box, Text, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
const LauncheSlide = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_91.jpg?v=1706776330",
    title: "Airdopes 91",
    rating: 4.5,
    price: "₹999",
    text: "67% off",
    description: "Be first to review",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_201.jpg?v=1704780871",
    title: "Immortal 201",
    price: "₹1,299",
    text: "67% off",
    rating: 4.5,
    description: "|11",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_111.jpg?v=1706776330",
    title: "Immortal 111",
    price: "₹1,499",
    text: "67% off",
    rating: 4.5,
    description: "|1",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ION_ANC__1.jpg?v=1703228258",
    title: "Nirvana Ion ANC",
    price: "₹2,799",
    text: "67% off",
    rating: 4.5,
    description: "|22",
  },
];
const LauncheStyle = () => {
  const navigate = useNavigate();
  const slidesPerView = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box padding="20px" fontSize="25px">
          {" "}
          New <span style={{ fontWeight: "bold" }}>Launches</span>
        </Box>

        <Link to="/personalisation">
          {" "}
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
        {LauncheSlide.map((item) => (
          <SwiperSlide>
            <Box backgroundColor={"#f5f5f5"} borderRadius={"20px"}>
              <img
                src={item.image}
                style={{ width: "100%", height: "auto", padding: "5px" }}
                alt={item.title}
              />
              <Text marginLeft="10px" fontWeight={"bold"}>
                {item.title}{" "}
              </Text>
              <Text marginLeft="10px" fontWeight={"bold"}>
                {item.price}{" "}
                <span style={{ color: " turquoise" }}>{item.text}</span>
              </Text>
              <Flex
                align="center"
                padding={2}
                gap="1"
                justifyContent={"space-between"}
              >
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
export default LauncheStyle;
