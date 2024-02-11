import { EmailIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Image,
  space,
  IconButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
export default function Footer() {
  return (
    <>
      <Flex
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        backgroundColor={"#E7F0F5"}
        padding={"20px"}
        marginTop={"20px"}
      >
        <Box>
          <Box margin={"10px"}>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg"
              alt=""
            />
          </Box>
          <Text
            fontWeight={"bold"}
            fontSize={"30px"}
            lineHeight={"30px"}
            margin={"10px"}
          >
            Subscribe to our email <br />
            alerts!
          </Text>
          <FormControl padding={"20px"}>
            <Input
              type="email"
              padding={"25px"}
              width={"auto"}
              backgroundColor={"white"}
              placeholder="Enter your email address"
            />
          </FormControl>
        </Box>
        <Box fontSize={"13px"}>
          <UnorderedList listStyleType={"none"} lineHeight={"30px"}>
            <Text fontWeight={"bold"}>Shop</Text>
            <ListItem>True Wireless Earbuds Wireless Headphone</ListItem>
            <ListItem>Wired Headphones Wireless Speakers</ListItem>
            <ListItem>Home Audio Moblie Accessories</ListItem>
            <ListItem>Smart Watches TRebel</ListItem>
            <ListItem>Misfit Trimmers Earn ₹100</ListItem>
          </UnorderedList>
        </Box>
        <Box fontSize={"13px"}>
          <UnorderedList listStyleType={"none"} lineHeight={"30px"}>
            <Text fontWeight={"bold"}>Help</Text>
            <ListItem>Track Your Order</ListItem>
            <ListItem>Warranty & Support</ListItem>
            <ListItem>Return Policy</ListItem>
            <ListItem>Service Center</ListItem>
            <ListItem>Bulk Order</ListItem>
            <ListItem>FAQs</ListItem>
            <ListItem>Why Buy Direct</ListItem>
          </UnorderedList>
        </Box>
        <Box fontSize={"13px"}>
          <UnorderedList listStyleType={"none"} lineHeight={"30px"}>
            <Text fontWeight={"bold"}>Company</Text>
            <ListItem>About boAt</ListItem>
            <ListItem>News</ListItem>
            <ListItem>Read Our Blog</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Security</ListItem>
            <ListItem>Investor Relations</ListItem>
            <ListItem>Social Responsibility</ListItem>
            <ListItem>Warranty Policy</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </>
  );
}
