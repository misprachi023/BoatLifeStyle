import React from "react";
import {
  Modal,
  Button,
  Text,
  Heading,
  Input,
  useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserName from "./username";
const Createuser = () => {
  const toast = useToast();
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const naviagate = useNavigate();
  const [otp, setotp] = useState({});
  const [userLoginDetails, setUserLoginDetails] = useState({});
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
  const handleOtpChange = (e) => {
    const { name, value } = e.target;
    setotp({
      ...otp,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setUserLoginDetails({
      ...userLoginDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    const res = await fetch("http://localhost:8080/usertemp/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userDetails),
    });
    const data = await res.json();
    console.log(data);

    toast({
      title: data.msg,
      description: " ",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    console.log(otp);
    const res = await fetch("http://localhost:8080/usertemp/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(otp),
    });
    const data = await res.json();
    toast({
      title: data.msg,
      description: " ", 
      status: "success",
      duration: 2000,
      isClosable: true, 
    });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(otp);
    await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginDetails),
    })
      .then((res) => { 
        if (res.json().msg == "user login successfully.") {
          setIsModal(false);
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: err,
          description: " ",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
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
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <UserName />
      <Text fontWeight={"bold"} paddingTop={"10px"} fontSize={"20px"}>
        New user ?
      </Text>
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
        zIndex={10}
        onClick={() => {
          setOverlay(<OverlayOne />);
          modal1OnOpen();
        }}
      >
        Create Account
      </Button>
      <Modal isCentered isOpen={modal1IsOpen} onClose={modal1OnClose}>
        {overlay}
        <ModalContent padding={"45px"} borderRadius={"15px"}>
          <ModalHeader textAlign={"center"} fontSize={"30px"}>
            Get <span style={{ fontWeight: "bold" }}>started</span>{" "}
          </ModalHeader>
          <Text textAlign={"center"}>
            Please enter your Details to get started
          </Text>
          <ModalCloseButton />
          <ModalBody> 
            <form onSubmit={handleSubmit} action="">
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
              <FormControl mt={4}>
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
              <FormControl width={"100%"}>
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
                  value="SENT OTP"
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    modal2OnOpen();
                    modal1OnClose();
                  }}
                  type="submit"
                  width={"100%"}
                />
              </FormControl>
              <Text color="red" textAlign={"center"}>
                {err}
              </Text>
              <Text textAlign={"center"}>
                By creating an account, you agree to boAt's Terms and Conditions
                and Privacy Policy.
              </Text>
            </form>
          </ModalBody>
          <ModalFooter justifyContent={"space-evenly"}></ModalFooter>
        </ModalContent>
      </Modal>
      {/* modal 2--------------------------------------------------------------- */}
      <Modal isCentered isOpen={modal2IsOpen} onClose={modal2OnClose}>
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
            <form onSubmit={handleVerifySubmit} action="">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleOtpChange}
              />
              <FormLabel paddingTop={"10px"}>OTP</FormLabel>
              <Input
                type="text"
                name="otp"
                placeholder="Type Here"
                onChange={handleOtpChange}
              />
              <Input
                type="submit"
                value="continue"
                style={{
                  width: "100%",
                  fontSize: "20px",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  backgroundColor: "black",
                  color: "white",
                  marginTop: "20px",
                }}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  modal2OnClose();
                  modal3OnOpen();
                }}
              />
              <Text color="red" textAlign={"center"}>
                {err}
              </Text>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy.
          </Text>
        </ModalContent>
      </Modal>
      {/* modal 3--------------------------------------------------------------- */}
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
                <Text color="red" textAlign={"center"}>
                  {err}
                </Text>
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
      {/* modal 4--------------------------------------------------------------- */}
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
export default Createuser;
