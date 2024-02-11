import React from "react";
import {
  Flex,
  Button,
  Link,
  Text,
  Heading,
  Image,
  Stack,
  Grid,
  Box,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StarIcon } from "@chakra-ui/icons";
import FilterPersonlization from "./filterpersonlization";
import { AuthContext } from "../context/AuthContextProvider";
import { useCart } from "react-use-cart";
const PersonlizationStyle = () => {
  const {setProducts,Products} = React.useContext(AuthContext);
  const { addItem } = useCart();

  React.useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://boatlifestyle.onrender.com/products");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <> 
      <hr />

      <Flex gap={2}>
        <Link to={"/"} padding={"10px"}>
          Home
        </Link>
        <Text padding={"10px"}> Special Range-Personlized Products</Text>
      </Flex>

      <Heading padding={"15px"}>Special Range-Personlized Products</Heading>

      <Button padding={"10px"} margin={"10px"} onClick={() => navigate("/")}>
        <FilterPersonlization />
      </Button>

      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}  
        gap={4}
      >
        {Products.map((item) => ( 
          <Box
            margin={"2"}
            display="flex"
            alignItems="center"
            backgroundColor={"#f5f5f5"}
          >
            <Box>
              <Image
                src={item.image}
                style={{
                  width: "110%",
                  height: "220px",
                  padding: "5px",
                  border: "10px 10px  0px 0px",
                  borderRadius: "15px",
                }}
                alt={item.title}
              />
            </Box>
            <Box marginLeft={"10px"}>
              <Text fontWeight={"bold"} gap={"3"}>
                {[...Array(1)].map((_, index) => (
                  <StarIcon
                    key={index}
                    color={index < item.rating ? "yellow.400" : "gray.300"}
                  />
                ))}
                {item.rating}
              </Text>

              <Text fontWeight={"bold"}>{item.title}</Text>
              <Text fontWeight={"bold"}>{item.price}</Text>
              <hr />

              <Text>{item.description}</Text>
              <hr />
              <Stack>
                <Box key={item.id}>
                  <Button
                    size={["md", "md"]}
                    colorScheme="black" 
                    background="black"
                    marginTop={"5"}
                    width={"100%"}
                    onClick={() => addItem(item)}
                  >
                    Add to cart 
                  </Button>{" "}
                </Box>
              </Stack>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default PersonlizationStyle;
