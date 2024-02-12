import React from "react";
import Boat from "../data/boatdata";
import {
  Card,
  Grid,
  CardBody,
  Flex,
  CardFooter,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LifeStyle from "../components/lifestyle";
import { useBreakpointValue } from "@chakra-ui/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Corporate() {
  const fontSize = useBreakpointValue({
    base: "md",
    sm: "lg",
    md: "xl",
    lg: "2xl",
    xl: "3xl",
  });
  return (
    <>
      {/* first part */}
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        padding={"35px"}
        backgroundColor={"#F0FFFF"}
      >
        <Image
          objectFit="cover"
          width={["100%", "50%"]}
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1707478687_1ea3b8f7-d922-416a-a82f-085c1dbfb91a.png?v=1704354916"
          alt="Caffe Latte"
        />

        <Stack>
          
          <CardBody textAlign={"center"} fontSize={fontSize}>
            <Heading>Your Bulk Orders Are Now Hassle Free</Heading>
            <Heading paddingTop={"30px"}>Got A Big boAt Order?</Heading>

            <Text>Come sail with us</Text>
            <Text paddingTop={"20px"}>
              For shipments of 25 units or more, <br />
              <span style={{ fontWeight: "bold" }}>Hit us up!</span>
            </Text>
          </CardBody>
          <CardFooter>
            {" "}
            <Button
              backgroundColor={"black"}
              color={"white"}
              _hover={{ backgroundColor: "black", color: "white" }}
              width={"100%"}
              margin={"20px"}
              // size={["sm", "md"]}
              paddingTop={"20px"}
              paddingBottom={"20px"}
              fontWeight={"500"}
              size={"lg"}
              fontSize={"20px"}
            >
              Submit Your Requirements
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      {/* second part */}
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box padding="20px" fontSize="25px">
          {" "}
          Get a <span style={{ fontWeight: "bold" }}>boAt</span>
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

      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
      
      >
        {Boat.map((item) => (
          <Box
            maxW="s"
            borderRadius={"10px"}
            margin={"10px"}
            backgroundColor={"#f5f5f5"}
          >
            <Image
              src={item.image}
              style={{
                width: "100%",

                height: "300px",
                padding: "5px",
                border: "10px 10px  0px 0px",
                borderRadius: "15px",
              }}
              alt={item.title}
            />
            <Box fontWeight={"bold"}>
              <Text>{item.title}</Text>
              <Text>
                {item.price}{" "}
                <span style={{ color: " turquoise" }}>{item.text}</span>
              </Text>

              <Stack>
                <Button
                  size={["md", "md"]}
                  colorScheme="black"
                  background="black"
                >
                  {item.button}{" "}
                  <span style={{ color: " turquoise" }}> {item.text}</span>
                </Button>
              </Stack>
              <Text color={"CornflowerBlue"} fontWeight={"500"}>
                {item.description}{" "}
                <span style={{ color: " turquoise" }}>{item.text}</span>
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>

      <LifeStyle />
    </>
  );
}
