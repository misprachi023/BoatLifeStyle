import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Grid,
  Text,
  GridItem,
  Input,
  Menu,
  MenuButton,  
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { useState, useContext } from "react";

import categories from "../data/categories";
import Login from "../drawer/login";
import Cart from "../drawer/cartstart";
import { AuthContext } from "./../context/AuthContextProvider";
import Drawer from "../drawer/drawer";

/**
 * @author Prachi Mishra
 * @function Navbar
 **/
const Navbar = (props) => {
  const navigate = useNavigate();
  const [clickedLink, setClickedLink] = React.useState(null);

  const handleLinkClick = (link) => {
    setClickedLink(link);
  };
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  });

  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    sm: false,
    lg: true,
    xl: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box textAlign={"center"} backgroundColor="gray.100" padding="12px">
        <span style={{ fontWeight: "500" }}>Ranveer Singh</span> is Lost in
        Nirvana. Check it out! 👀
      </Box>
      <Box position="sticky" zIndex={10} top={0}>
        <Box bg={useColorModeValue("white", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
            <Flex justifyContent={"space-between"} gap={2}>
              <IconButton
               backgroundColor={"black"}
               color ={"white"}
               _hover={{ backgroundColor: "black" }}
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <Box>
                <Link to={"/"}>
                  <img
                    src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
                    width="100px"
                    alt=""
                  />
                </Link>
              </Box>
            </Flex>
            <HStack spacing={5} alignItems={"center"}>
              <Menu>
                {isDesktop && <>
                  <MenuButton
                    as={Button}
                    backgroundColor={"white"}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Categories
                  </MenuButton>
            
                <MenuList zIndex={5}>
                  
                    <Grid templateColumns="repeat(5, 1fr)">
                      {categories.map((item) => (
                        <GridItem display={"flex"} gap={1}>
                          <img width={"25%"} src={item.image} />
                          <Text fontSize={"12px"} marginTop={"10px"}>
                            {item.title}
                          </Text>
                        </GridItem>
                      ))} 
                    </Grid>
               
                </MenuList></>}
              </Menu>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <Link
                  to={"/personalisation"}
                  onClick={() => handleLinkClick("personalisation")}
                  _hover={{ color: "#555" }}
                  style={
                    clickedLink === "personalisation"
                      ? { fontWeight: "bold", textDecoration: "underline" }
                      : {}
                  }
                >
                  boAt Personalisation{" "}
                </Link>
                <Link
                  to={"/gift"}
                  onClick={() => handleLinkClick("gift")}
                  _hover={{ color: "#555" }}
                  style={
                    clickedLink === "gift"
                      ? { fontWeight: "bold", textDecoration: "underline" }
                      : {}
                  }
                >
                  Gift with boAt
                </Link>
                <Link
                  to={"/corporate"}
                  onClick={() => handleLinkClick("corporate")}
                  _hover={{ color: "#555" }}
                  style={
                    clickedLink === "corporate"
                      ? { fontWeight: "bold", textDecoration: "underline" }
                      : {}
                  }
                >
                  Corporate Order
                </Link>
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              {!isMobile && <SearchBar />}
              <Button backgroundColor={"white"} onClick={() => navigate("/")}>
                <Login />
              </Button>
              <Button backgroundColor={"white"} onClick={() => navigate("/")}>
                <Cart />
              </Button>
              
            </Flex>
           
          </Flex> 
         
        </Box>
        <Box position="stikcy" zIndex={1} top={0}>

          <Box bg={useColorModeValue("white", "gray.900")} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <HStack spacing={8} alignItems={"center"}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  <Menu>
                    {isDesktop && (
                      <MenuButton
                        as={Button}
                        backgroundColor={"white"}
                        rightIcon={<ChevronDownIcon />}
                        zIndex
                      >
                        More
                      </MenuButton>
                    )}

                    <MenuList lineHeight={"12px"} padding={"5px"}>
                      <MenuItem>Daily Deals</MenuItem>
                      <MenuItem>Do What FloAts Your boAt</MenuItem>
                      <MenuItem>Blogs</MenuItem>
                      <MenuItem>Earn 100</MenuItem>
                      <MenuItem>Careers</MenuItem>
                      <MenuItem>Social Responsibility</MenuItem>
                      <MenuItem>Store Locator</MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </HStack>
              {isMobile && <SearchBar />}
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  ></MenuButton>
                </Menu>
              </Flex>
            </Flex>
          </Box>
        </Box>
        
      </Box>
      {isOpen ? (
          isDesktop?<Box  pb={4} display={{ md: "none" }}>
              <Grid width={"100%"} templateColumns="repeat(5, 1fr)">
                {categories.map((item) => (
                  <GridItem display={"flex"}>
                    <img width={"20%"} src={item.image} />
                    <Text fontSize={"10px"}>{item.title}</Text>
                  </GridItem>
                ))}
              </Grid>
            </Box>:<Drawer/>
         
          ) : null} 
    </>
  );
};
function SearchBar() {
  const navigate = useNavigate();
  const { setProducts } = useContext(AuthContext);
  const [searchItem, setSearchItem] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchItem);

    const res = await fetch(
      `http://localhost:8080/products/search/${searchItem}`
    );
    const data = await res.json();

    console.log(data.products);
    setProducts(data.products);
    navigate(`/personalisation`);
  };
  return (
    <Box
    >
      <Flex position={"relative"} width={"100%"} padding={0}>
        <Input
          borderRadius={"15"}
          width={"100%"}
          size="lg"
          bg="white"
          variant="flushed"
          paddingLeft="50px"
          placeholder="Search"
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <IconButton
          onClick={handleSubmit}
          zIndex={2}
          position={"absolute"}
          top={2}
          left={2}
          backgroundColor={"white"}
          size={"md"}
          color="black"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </Flex>
    </Box>
  );
}
export default Navbar;
