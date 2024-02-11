import React, { useContext } from "react";
import {
  Button,
  Modal,
  Text,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useToast,
  Flex,
  Heading,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
const UserName = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({});
  const toast = useToast();
  const [err, setErr] = useState("");
  const { isLogin, setIsLogin } = useContext(AuthContext);
 
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
        title: "Login success.",
        description: " You've logged in your account.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setIsLogin(true);
      localStorage.setItem("user", data.userName);
    } else {
      toast({
        title: "Login error.",
        description: "check your credentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setErr(data.msg);
    }
  };

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
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
        }}
      >
        Login
      </Button>
      <Modal isCentered isOpen={modal3IsOpen} onClose={modal3OnClose}>
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
            Please enter your email ID & password to login
          </Text>
          <ModalCloseButton />
          <ModalBody>
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
                    marginTop: "20px",
                  }}
                  type="submit"
                  value="Login"
                  onClick={(e) => {
                    handleSubmit(e); 
                    setOverlay(<OverlayOne />);
                    modal3OnClose();
                  }}
                />
                <Text color={"red"}>{err}</Text>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy
          </Text>
        </ModalContent>
      </Modal>
      <Modal isCentered isOpen={modal4IsOpen} onClose={modal4OnClose}>
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

export default UserName;
