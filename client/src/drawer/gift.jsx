import React from "react";
import Passion from "../data/passion";
import {
  Box,
  Button,
  HStack,
  Card,
  Grid,
  Flex,
  Text,
  Heading,
  Image,
  Stack,
  CardFooter,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LauncheStyle from "../components/launches";
import CardStyle from "../components/card";
import { StarIcon } from "@chakra-ui/icons";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Gift = () => {
  return (
    <>
      <Box>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/compress_1_197kb_2000x.jpg?v=1694498286"
          alt=""
        />
      </Box>
      {/* // first part */}
      <Flex>
        <Box padding="10px" fontSize="25px">
          {" "}
          For <span style={{ fontWeight: "bold" }}>Special</span> Days
        </Box>
      </Flex>

      <HStack
        as={"nav"}
        spacing={8}
        display={{ base: "none", md: "flex" }}
        fontSize={"20px"}
        color={"gray"}
      >
        <Button fontWeight="bold" borderRadius={"10px"}>
          {" "}
          New Year{" "}
        </Button>
        <Link>Birthtday</Link>
        <Link>Anniversry</Link>
        <Link>Wedding</Link>
      </HStack>

      {/* second part */}

      <LauncheStyle />

      {/* third part */}

      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
        ]}
        gap={6}
      >
        <Card borderRadius={"10px"} margin={"10px"} marginTop={"40px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/gift2_1600x.jpg?v=1692769727"
            borderRadius={"10px"}
            alt=""
          />
        </Card>
        <Card borderRadius={"10px"} margin={"10px"} marginTop={"40px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/gift3_1600x.jpg?v=1692769727"
            borderRadius={"10px"}
            alt=""
          />
        </Card>
      </Grid>

      {/* fourth part */}
      <Flex justifyContent={"space-between"}>
        <Box padding="10px" fontSize="25px">
          {" "}
          For Friends & <span style={{ fontWeight: "bold" }}>Family</span>
        </Box>
      </Flex>

      <HStack
        as={"nav"}
        spacing={8}
        display={{ base: "none", md: "flex" }}
        fontSize={"20px"}
        color={"gray"}
      >
        <Button fontWeight="bold" borderRadius={"10px"}>
          {" "}
          Parents{" "}
        </Button>
        <Link>Sblings</Link>
        <Link>Friends</Link>
        <Link>beloved</Link>
        <Link>Colleagues</Link>
      </HStack>

      {/* fifth part */}
      <CardStyle />

      {/* sixth part */}

      <Box marginTop={"40px"} marginBottom={"40px"}>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/gifting-1_1_2000x.jpg?v=1692769923"
          alt=""
        />
      </Box>

      {/* seventh part */}

      <Grid
        fontSize={["10px", "20px", "20px", "20px", "20px"]}
        templateColumns="repeat(4, 1fr)"
        border={"none"}
      >
        <Card
          textAlign={"center"}
          maxW="s"
          margin={"10px"}
          border={"none"}
          alignItems="center"
        >
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123"
            width={"35%"}
            height={"35%"}
            alt=""
          />
          <Text textAlign={"center"} fontSize={["sm", "md", "lg"]}>
            Made By<span style={{ fontWeight: "bold" }}> Indians</span>
          </Text>
        </Card>
        <Card
          maxW="s"
          borderRadius={"10px"}
          margin={"10px"}
          alignItems="center"
        >
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123"
            width={"35%"}
            height={"35%"}
            alt=""
          />
          <Text textAlign={"center"} fontSize={["sm", "md", "lg"]}>
            Exciting<span style={{ fontWeight: "bold" }}> Offers</span>
          </Text>
        </Card>
        <Card
          maxW="s"
          borderRadius={"10px"}
          margin={"10px"}
          alignItems="center"
        >
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123"
            width={"35%"}
            height={"35%"}
            alt=""
          />
          <Text textAlign={"center"} fontSize={["sm", "md", "lg"]}>
            Fast<span style={{ fontWeight: "bold" }}> Dilevery</span>
          </Text>
        </Card>

        <Card
          maxW="s"
          borderRadius={"10px"}
          margin={"10px"}
          alignItems="center"
        >
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123"
            width={"35%"}
            height={"35%"}
            alt=""
          />
          <Text textAlign={"center"} fontSize={["sm", "md", "lg"]}>
            Exclusive<span style={{ fontWeight: "bold" }}> Benefits</span>
          </Text>
        </Card>
      </Grid>

      {/* eighth part */}
      <Flex justifyContent={"space-between"} marginTop={"40px"}>
        <Box padding="10px" fontSize="25px">
          {" "}
          By & <span style={{ fontWeight: "bold" }}>Passion</span>
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
        spacing={8}
        display={{ base: "none", md: "flex" }}
        fontSize={"20px"}
        color={"gray"}
      >
        <Button fontWeight="bold" borderRadius={"10px"}>
          {" "}
          Audiophiles{" "}
        </Button>
        <Link>Gamers</Link>
        <Link>Workaholics</Link>
        <Link>Artists</Link>
        <Link>Fitness Fanatic</Link>
      </HStack>

      <Grid
        templateColumns={[
          "repeat(1,1fr)",,
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={10}
      >
        {Passion.map((item) => (
          <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
            <Image
              src={item.image}
              style={{
                width: "100%",
                height: "300px",
                borderRadius: "15px",
              }}
              alt={item.title}
            />

            <Box alignItems={"center"}>
              <Text fontWeight={"bold"}>{item.title}</Text>
              <Text fontWeight={"bold"}>
                {item.price}{" "}
                <span style={{ color: " turquoise" }}>{item.text}</span>
              </Text>

              <Flex align="center" justifyContent={"space-between"}>
                <Text marginLeft={"10px"}>
                  {[...Array(1)].map((_, index) => (
                    <StarIcon
                      key={index}
                      color={index < item.rating ? "yellow.400" : "gray.300"}
                    />
                  ))}
                  {item.rating} <span>{item.quantity} </span>{" "}
                </Text>

                <Stack>
                  <CardFooter>
                    <Button
                      backgroundColor="black"
                      color={"white"}
                      _hover={{ backgroundColor: "black", color: "white" }}
                    >
                      <Text fontSize={"20px"}>Add to cart</Text>
                    </Button>
                  </CardFooter>
                </Stack>
              </Flex>
            </Box>
          </Card>
        ))}
      </Grid>

      {/* ninth part */}

      <Grid templateColumns="repeat(2, 1fr)" gap={4} marginTop={"10px"}>

        <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/gift-4_1600x.jpg?v=1692770282"
            borderRadius={"10px"}
            alt=""
          />
        </Card>
        <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/gift-5_1600x.jpg?v=1692770283"
            borderRadius={"10px"}
            alt=""
          />
        </Card>
      </Grid>
    </>
  );
};
export default Gift;
