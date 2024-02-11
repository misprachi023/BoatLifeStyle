import React from "react";
import {
  Button,
  Modal,
  Text,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import UserName from "./username";
const Optverification = () => {
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
        SENT OTP
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
              placeholder="Type Here"
            />
          </ModalBody>
          <ModalFooter>
            <UserName />
          </ModalFooter>
          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy.
          </Text>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Optverification;
