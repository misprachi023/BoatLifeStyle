import {
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
const LastFooter = () => {
  return (
    <>
      <Flex
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"#E7F0F5"}
      >
        <Text fontSize={"18px"} fontWeight={"bold"} padding={"20px"}>
          Let's get social
        </Text>
       
        <Flex padding={"15px"} gap={"25px"} fontSize={"22px"}>
          <RiFacebookFill />
          <RiTwitterXLine />
          <FaInstagram />
          <SiYoutube />
          <FaLinkedinIn />
        </Flex>
      </Flex> 
      <Box textAlign={"center"} backgroundColor={"#E7F0F5"} fontSize={"13px"}>
        <Text style={{ padding: "10px" }}>
          Privacy Policy . Terms & Conditions
        </Text>
        <Text style={{ color: "gray", padding: "10px" }}>
          © 2024 Imagine Marketing Limited. All Rights Reserved.
        </Text>
        <Text style={{ color: "gray", padding: "10px" }}>
          For queries contact us: Manager, Imagine Marketing Limited Unit no.
          204 & 205, 2nd floor, D-wing & E-wing, <br />
          Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai,
          Maharashtra-400093, India
        </Text>
      </Box>
    </>
  );
};
export default LastFooter;
