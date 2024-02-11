import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Link} from "react-router-dom"
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import { Box, Text, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
const BlogSlide = [
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/articles/3_2_600x.jpg?v=1695972107",
    date: "23 Sep, 2023",
    title: "The Power of Personalisation: Custom Watch Faces in..",
    description:
      "Check out how with our DIY Watch Face Studio and customisable watches....",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/articles/Aman_600x.png?v=1669814321",
    date: "30 Nov, 2023",
    title: "Aman Gupta boAt (Shark Tank India 2) Age, Net worths...",
    description:
      "We know you keep searching for things on the internet — after all, what..",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/articles/1_1_600x.jpg?v=1695929892",
    date: "22 Sep, 2023",
    title: "How Custom Watch Faces Enhance Your Daily Routine..",
    description:
      "Check out how with our DIY Watch Face Studio and customisable watches....",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/articles/Tips_Tricks_Make_Your_Headphones_Last_longer_600x.png?v=1706792779",
    date: "01 Feb, 2024",
    title: "Way to you make a Headphone lastLonger",
    description:
      "Check out how with our DIY Watch Face Studio and customisable watches....",
  },
];
const BlogStyle = () => {
  const slidesPerView = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  return (
    <>
      <Box> 
        <Flex justifyContent={"space-between"}>
        <Box padding="20px" fontSize="25px">
          <span style={{ fontWeight: "bold" }}>Blogs</span>
        </Box>
        <Link to="/blogs">
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
       
        <Button>
          <span>Popular</span>
        </Button>
        <Button margin={"15px"}>Latest</Button>
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
        {BlogSlide.map((item) => (
          <SwiperSlide>
            <Box
              fontSize={["xs", "sm", "md", "lg"]}
              margin="10px"
              backgroundColor={"#f5f5f5"}
              padding={"10px"}
            >
              <img
                src={item.image}
                style={{ width: "100%", height: "auto" }}
                alt={item.title}
              />
              <Text marginLeft="10px" fontWeight="bold" fontSize={["xs", "sm"]}>
                {item.title}{" "}
              </Text>

              <Text marginLeft="10px" fontSize={["xs", "sm"]}>
                {item.description}
              </Text>

              <Button
                width={"100%"}
                size={"sm"}
                marginTop={"10px"}
                backgroundColor={"white"}
                border={"1px solid gray"}
                borderRadius={"20px"}
              >
                Read More
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default BlogStyle;
