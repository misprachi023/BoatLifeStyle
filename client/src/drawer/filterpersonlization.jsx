import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  List,
  Box,
  Flex,
  ListItem,
  Checkbox,
  ListIcon,
  OrderedList,
  UnorderedList,
  Input,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
// import { BsHandbag } from "react-icons/bs";
// import CartSection from "../drawer/cartsection";

const FilterPersonlization = () => {
  const { Products, setProducts } = useContext(AuthContext);
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const btnRef = React.useRef();

  const sortLowToHigh = () => {
    console.log(Products);
    const sortedData = [...Products].sort(
      (a, b) => parseInt(b.price.substring(1)) - parseInt(a.price.substring(1))
    );
    console.log(sortedData);
    setProducts(sortedData);
  };

  
  const sortHighToLow = () => {
    const sortedData = [...Products].sort(
      (a, b) => parseInt(a.price.substring(1)) - parseInt(b.price.substring(1))
    );
    setProducts(sortedData);
  };
  return (
    <>
      <Button
        as={Button}
        rightIcon={<ChevronDownIcon />}
        style={{
          width: "100%",
          fontSize: "18px",
          fontWeight: "500",
          borderRadius: "10px",
          padding: "8px",
          color: "black",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Filter By
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={"xs"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={"bold"} fontSize={"25px"}>
            Filter By
          </DrawerHeader>
          
          <DrawerBody>
          
              <UnorderedList listStyleType={"none"} width={"100%"} margin={"30px"} >
                <Button
                  onClick={sortHighToLow}
                  fontSize={"17px"}
                  backgroundColor={"black"}
                
                  color={"white"}
                  _hover={{ backgroundColor: "gray", color: "white" }}
                >
                  Price High to Low
                </Button>
                <Button
                  onClick={sortLowToHigh}
                  fontSize={"17px"}
                  backgroundColor={"black"}
                  marginTop={"20px"}
                  color={"white"}
                  _hover={{ backgroundColor: "gray", color: "white" }}
                >
                  Price Low to High
                </Button>
              </UnorderedList>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterPersonlization;
