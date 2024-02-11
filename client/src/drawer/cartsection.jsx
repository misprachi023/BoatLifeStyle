import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Menu,
  MenuList,
  MenuItem,
  RadioGroup,
  Box,
  Text,
  MenuButton,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import CartDataStyle from "./cartData";
import UserName from "./username";
import { AuthContext } from "../context/AuthContextProvider";
const CartSection = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isModal, setIsModal] = useState(true);
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    const res = await fetch("deploy link/user/signup", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    const token = await res.json();
    console.log(token);
  };
  const btnRef = React.useRef();
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
  const { isLogin } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: modal1IsOpen,
    onOpen: modal1OnOpen,
    onClose: modal1OnClose,
  } = useDisclosure();
  const {
    isOpen: modal2IsOpen,
    onOpen: modal2OnOpen,
    onClose: modal2OnClose,
  } = useDisclosure();
  const {
    isOpen: modal3IsOpen,
    onOpen: modal3OnOpen,
    onClose: modal3OnClose,
  } = useDisclosure();
  const {
    isOpen: modal4IsOpen,
    onOpen: modal4OnOpen,
    onClose: modal4OnClose,
  } = useDisclosure();
  const {
    isOpen: modal5IsOpen,
    onOpen: modal5OnOpen,
    onClose: modal5OnClose,
  } = useDisclosure();

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [placement, setPlacement] = React.useState("right");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button onClick={modal1IsOpen}>{/* <BsHandbag /> */}</Button>
      <Drawer
        placement={placement}
        isOpen={modal1IsOpen}
        onClose={modal1OnClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {" "}
            <Heading> Your Cart</Heading>
          </DrawerHeader>
          <DrawerBody>
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
              {/* <CartSection /> */}
              {/* <Button
           style={{
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "black",
            color: "white",
          }}>
              Start Shopping
          
          </Button> */}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Button
        style={{
          width: "100%",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          modal1OnClose();
          onOpen();
        }}
      >
        Start Shopping
      </Button>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>
          <DrawerBody>
            <Flex
              backgroundColor={"#F5F5F5"}
              margin={"auto"}
              gap={5}
              padding={"6px"}
            >
              <Text fontWeight={"bold"} lineHeight={"20px"}>
                Sign in to Redeem boAt reward <br />
                Points on this order
              </Text>
              {!isLogin && <UserName />}
            </Flex>
            <Box>
              <Text padding={"20px"} fontWeight={"bold"}>
                Unlock additional 15% OFF
              </Text>

              <CartDataStyle />
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Flex margin={"auto"} gap={5}>
              <Menu>
                <MenuButton as={Button}>
                  <p>Inclusive of all taxes</p>
                </MenuButton>
                <MenuList padding={"10px"}>
                  <Text fontWeight={"bold"} fontSize={"17px"}>
                    Apply Coupon
                  </Text>
                  <MenuItem>Cart Total:</MenuItem>
                  <MenuItem>Shipping:</MenuItem>
                  -----------------------------------------
                  <hr />
                  <MenuItem>To Pay:</MenuItem>
                </MenuList>
              </Menu>
              <Button
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Confirm Order
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Modal isCentered isOpen={modal2IsOpen} onClose={modal2OnClose}>
        {overlay}
        <ModalContent padding={"45px"} borderRadius={"15px"}>
          <ModalHeader textAlign={"center"} fontSize={"30px"}>
            Get <span style={{ fontWeight: "bold" }}>started</span>{" "}
          </ModalHeader>
          <Text textAlign={"center"}>
            Please enter your Email ID to continue
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={4}>
              <FormControl width={"100%"}>
                <FormLabel>Full name</FormLabel>
                <Input
                  type="text"
                  placeholder="Type Here"
                  name="userName"
                  onChange={(e) => handlechange(e)}
                  width={"100%"}
                />
              </FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                placeholder="Type Here"
                name="email"
                onChange={(e) => handlechange(e)}
              />
            </FormControl>
            <FormControl width={"100%"}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Type Here"
                name="password"
                onChange={(e) => handlechange(e)}
                width={"100%"}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent={"space-evenly"}>
            <Button
              style={{
                width: "100%",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={() => {
                setOverlay(<OverlayOne />);
                modal3OnOpen();
                modal2OnClose();
              }}
            >
              SENT OTP
            </Button>
          </ModalFooter>
          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy.
          </Text>
        </ModalContent>
      </Modal>
      {/* modal 2--------------------------------------------------------------- */}
      <Modal isCentered isOpen={modal3IsOpen} onClose={modal3OnClose}>
        {overlay}
        <ModalContent padding={"45px"} borderRadius={"15px"}>
          <ModalHeader textAlign={"center"} fontSize={"30px"}>
            OTP <span style={{ fontWeight: "bold" }}>Verification</span>{" "}
          </ModalHeader>
          <Text textAlign={"center"}>
            Please enter the OTP sent to your Email ID
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              // id="otp"
              placeholder="Type Here"
              // value={otp}
              // onChange={handleOtpChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              style={{
                width: "100%",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={() => {
                setOverlay(<OverlayOne />);
                modal3OnClose();
                modal4OnOpen();
              }}
            >
              Continue
            </Button>
          </ModalFooter>
          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy.
          </Text>
        </ModalContent>
      </Modal>
      <Modal isCentered isOpen={modal4IsOpen} onClose={modal4OnClose}>
        {overlay}
        <ModalContent padding={"30px"} borderRadius={"15px"} width={"150%"}>
          <ModalHeader
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"bold"}
          >
            Continue with Email ID
          </ModalHeader>
          <Text textAlign={"center"}>
            {" "}
            Please enter your Name & email ID to continue
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <FormControl width={"100%"}>
              <FormLabel>Full name</FormLabel>
              <Input
                type="text"
                placeholder="Type Here"
                name="userName"
                onChange={(e) => handlechange(e)}
                width={"100%"}
              />
            </FormControl>
            <FormControl width={"100%"}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Type Here"
                name="password"
                onChange={(e) => handlechange(e)}
                width={"100%"}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              style={{
                width: "100%",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
              }}
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
                setOverlay(<OverlayOne />);
                modal4OnClose();
                modal5OnOpen();
              }}
            >
              Submit
            </Button>
          </ModalFooter>

          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy
          </Text>
        </ModalContent>
      </Modal>
      {/* modal 4--------------------------------------------------------------- */}
      <Modal isCentered isOpen={modal5IsOpen} onClose={modal5OnClose}>
        {overlay}
        <ModalContent borderRadius={"15px"} width={"200%"}>
          <ModalHeader>
            <Flex align="center" justify="center">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/final-loader.gif"
                width="30%"
                alt=""
              />
            </Flex>
            {/* <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/final-loader.gif" alignItems={"center"} width={"30%"}  alt="" /> */}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading textAlign={"center"} fontSize={"30px"}>
              Woohooo!!! <br />
              You have successfully logged in
            </Heading>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CartSection;
