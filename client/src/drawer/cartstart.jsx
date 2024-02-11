import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  Box,
  DrawerContent,
  useDisclosure,
  Text,
  Flex,
  Heading,
  RadioGroup,
} from "@chakra-ui/react";
import { BsHandbag } from "react-icons/bs";
import { AuthContext } from "../context/AuthContextProvider";
import { CartMain } from "../components/Page";
import { useContext } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const { isEmpty, totalItems } = useCart();
  const { isLogin } = useContext(AuthContext);
  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
      </RadioGroup>
      <Button position="relative" onClick={onOpen} backgroundColor="white">
      <BsHandbag size={30} />
      <Box position="absolute" top={1} right={2}backgroundColor="red" borderRadius="50%" padding={1}>
        <FaCircle size={8} color='red' />
        <Box position="absolute" top={0} right={1} color="white" fontSize="13px">
          {totalItems}
        </Box>
      </Box>
    </Button>  
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {" "}
            <Heading> Your Cart</Heading>
          </DrawerHeader>
          <DrawerBody>
            {isEmpty && (
              <>
                <Flex direction="column" justify="space-between" h="60%">
                  <img
                    src="https://5.imimg.com/data5/TF/CT/SU/SELLER-6509583/online-shopping-bag-500x500.jpg"
                    justify="center"
                    height={"200px"}
                    width={"200px"}
                    align="center"
                    alt=""
                  />
                  <Text
                    direction="column"
                    fontWeight={"bold"}
                    textAlign={"center"}
                    padding={"20px"}
                  >
                    Your Cart is feeling lonely
                  </Text>
                </Flex>
                <Button
                  style={{
                    backgroundColor: "black",
                    width: "100%",
                    color: "white",
                  }}
                  onClick={() => {
                    navigate("/personalisation");
                    onClose();
                  }}
                >
                  Start Shopping
                </Button>
              </>
            )}
            <CartMain />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
