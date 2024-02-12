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
import {useToast} from "@chakra-ui/react";
import {Input, Select, Checkbox,FormControl, FormLabel,} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StarIcon } from "@chakra-ui/icons";
import FilterPersonlization from "./filterpersonlization";
import { AuthContext } from "../context/AuthContextProvider";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
const PersonlizationStyle = () => {
  const { setProducts, Products } = React.useContext(AuthContext);
  const { addItem } = useCart();
  const { isLogin } = React.useContext(AuthContext);
  const navigate = useNavigate();


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

      {isLogin ? (
        <>
          <Flex gap={2}>
            <Link to={"/"} padding={"10px"}>
              Home
            </Link>
            <Text padding={"10px"}> Special Range-Personlized Products</Text>
          </Flex>

          <Heading padding={"15px"}>Special Range-Personlized Products</Heading>

          <Button
            padding={"10px"}
            margin={"10px"}
            onClick={() => navigate("/")}
          >
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
      ) : (
        <Login />
      )}
    </>
  );
};

export default PersonlizationStyle;
function Login() {
  const toast=useToast()
  const { setIsLogin } = React.useContext(AuthContext);
  const [userLoginDetails, setUserLoginDetails] = React.useState({});
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setUserLoginDetails({
      ...userLoginDetails,
      [name]: value,
    });
  };
  const handleLoginSubmit = async (e) => {   
    e.preventDefault();
    console.log(userLoginDetails);
    const res = await fetch("https://boatlifestyle.onrender.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userLoginDetails),
    });
    const data = await res.json();
    console.log(data);
    if (data.msg == "user login successfully.") {
      toast({
        title: "Login success",
        description: " You've logged in your account.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setIsLogin(true);
      localStorage.setItem("user", data.userName);
    } else {
      toast({
        title: "Login error",
        description: "check your credentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <Box width={["60%", "50%", "40%","40%"]} boxShadow={ "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
    margin={"auto"} marginTop={"30px"} padding={"10px"} borderRadius={"10px"}>
      <Heading padding={"10px"} textAlign={"center"}>Login</Heading>
      <Text textAlign={"center"}>
            {" "}
            Please enter your email ID & password to login
          </Text>
      <form action="" onSubmit={handleLoginSubmit}>
        <FormControl width={"100%"}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Type Here"
            name="email"
            onChange={(e) => handleLogin(e)}
            width={"100%"}
          />
        </FormControl>
        <FormControl width={"100%"}>
          <FormLabel paddingTop={"10px"}>Password</FormLabel>
          <Input
            type="password"
            placeholder="Type Here"
            name="password"
            onChange={(e) => handleLogin(e)}
            width={"100%"}
          />
          <Input
            style={{
              width: "100%",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "10px",
              backgroundColor: "black",
              color: "white",
              marginTop: "30px",
             
            }}
            type="submit"
            value="Login"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy
          </Text>
        </FormControl>
      </form>
    </Box>
  );
}
