import React from "react";
import {
  Button,
  Modal,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Heading,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
const LoginSuccess = () => {


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
          onOpen();
        }}
      >
        Submit
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent  borderRadius={"15px"} width={"200%"}>
          <ModalHeader >
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
           <Heading textAlign={"center"} fontSize={"30px"}>Woohooo!!! <br />
           You have successfully logged in</Heading>
          </ModalBody> 
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginSuccess;
