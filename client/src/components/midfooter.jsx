// import { EmailIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function MidFooter() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  });
  return (
    <>
      {!isMobile && (
        <Flex
          justifyContent={"space-around"}
          backgroundColor={"#F0FFFF"}
          padding={"20px"}
        >
          <Box fontSize={"13px"}>
            <UnorderedList listStyleType={"none"} lineHeight={"25px"}>
              <Text fontWeight={"bold"} padding={"10px"}>
                True Wireless Earbuds
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>
                True Wireless Earbuds Wireless Headphone
              </ListItem>
              <ListItem color={"gray"}>
                Wired Headphones Wireless Speakers
              </ListItem>
              <ListItem color={"gray"}>Home Audio Moblie Accessories</ListItem>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Price
              </Text>
              <ListItem color={"gray"}>Earbuds Under 1000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 2000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 3000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 4000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 5000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 5000</ListItem>

              <Text fontWeight={"bold"} padding={"10px"}>
                {" "}
                Wired Earphones
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>
                True Wireless Earbuds Wireless Headphone
              </ListItem>
              <ListItem color={"gray"}>
                Wired Headphones Wireless Speakers
              </ListItem>
              <ListItem color={"gray"}>Home Audio Moblie Accessories</ListItem>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Price
              </Text>
              <ListItem color={"gray"}>Earbuds Under 1000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 2000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 3000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 4000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 5000</ListItem>
              <ListItem color={"gray"}>Earbuds Under 5000</ListItem>

              <Text fontWeight={"bold"} padding={"10px"}>
                Gaming Headphones
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>
                True Wireless Earbuds Wireless Headphone
              </ListItem>
              <ListItem color={"gray"}>
                Wired Headphones Wireless Speakers
              </ListItem>
              <ListItem color={"gray"}>Home Audio Moblie Accessories</ListItem>
            </UnorderedList>
          </Box>
          <Box fontSize={"13px"}>
            <UnorderedList listStyleType={"none"} lineHeight={"25px"}>
              <Text fontWeight={"bold"} padding={"10px"}>
                Wireless Speakers
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>Track Your Order</ListItem>
              <ListItem color={"gray"}>Warranty & Support</ListItem>
              <ListItem color={"gray"}>Return Policy</ListItem>
              <ListItem color={"gray"}>Service Center</ListItem>
              <ListItem>Bulk Order</ListItem>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Price
              </Text>
              <ListItem color={"gray"}>Bluetooth Speakers Under 1000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 2000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 3000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 5000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 8000</ListItem>

              <Text fontWeight={"bold"} padding={"10px"}>
                Soundbars
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>Track Your Order</ListItem>
              <ListItem color={"gray"}>Warranty & Support</ListItem>
              <ListItem color={"gray"}>Return Policy</ListItem>
              <ListItem color={"gray"}>Service Center</ListItem>
              <ListItem color={"gray"}>Bulk Order</ListItem>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Price
              </Text>
              <ListItem color={"gray"}>Bluetooth Speakers Under 1000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 2000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 3000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 5000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 8000</ListItem>

              <Text fontWeight={"bold"} padding={"10px"}>
                Smart Watches
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>Track Your Order</ListItem>
              <ListItem color={"gray"}>Warranty & Support</ListItem>
              <ListItem color={"gray"}>Return Policy</ListItem>
              <ListItem color={"gray"}>Service Center</ListItem>
              <ListItem color={"gray"}>Bulk Order</ListItem>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Price
              </Text>
              <ListItem color={"gray"}>Bluetooth Speakers Under 1000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 2000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 3000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 5000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 8000</ListItem>

              <Text fontWeight={"bold"} padding={"10px"}>
                Trimmers
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>Track Your Order</ListItem>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Price
              </Text>
              <ListItem color={"gray"}>Bluetooth Speakers Under 1000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 2000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 3000</ListItem>
            </UnorderedList>
          </Box>
          <Box fontSize={"13px"}>
            <UnorderedList listStyleType={"none"} lineHeight={"25px"}>
              <Text fontWeight={"bold"} padding={"10px"}>
                Limited Editions
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>About boAt</ListItem>
              <ListItem color={"gray"}>News</ListItem>
              <ListItem color={"gray"}>Read Our Blog</ListItem>
              <Text padding={"10px"} fontWeight={"bold"}>
                Car Accessories
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Featues
              </Text>
              <ListItem color={"gray"}>Careers</ListItem>
              <ListItem color={"gray"}>Security</ListItem>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Price
              </Text>
              <ListItem color={"gray"}>Investor Relations</ListItem>
              <ListItem color={"gray"}>Social Responsibility</ListItem>
              <ListItem color={"gray"}>Warranty Policy</ListItem>

              <Text padding={"10px"} fontWeight={"bold"}>
                Trebel Range
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Featues
              </Text>
              <ListItem color={"gray"}>Careers</ListItem>
              <ListItem color={"gray"}>Security</ListItem>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Price
              </Text>
              <ListItem color={"gray"}>Investor Relations</ListItem>
              <ListItem color={"gray"}>Social Responsibility</ListItem>
              <ListItem color={"gray"}>Warranty Policy</ListItem>

              <Text fontWeight={"bold"} padding={"10px"}>
                PowerBanks
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>Track Your Order</ListItem>
              <ListItem color={"gray"}>Warranty & Support</ListItem>
              <ListItem color={"gray"}>Return Policy</ListItem>
              <ListItem color={"gray"}>Service Center</ListItem>
              <ListItem color={"gray"}>Bulk Order</ListItem>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Price
              </Text>
              <ListItem color={"gray"}>Bluetooth Speakers Under 1000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 2000</ListItem>
              <ListItem color={"gray"}>Bluetooth Speakers Under 3000</ListItem>

              <Text fontWeight={"bold"} padding={"10px"}>
                Charges
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem color={"gray"}>Track Your Order</ListItem>
              <ListItem color={"gray"}>Warranty & Support</ListItem>
              <ListItem color={"gray"}>Return Policy</ListItem>
              <ListItem color={"gray"}>Service Center</ListItem>
              <ListItem color={"gray"}>Bulk Order</ListItem>
            </UnorderedList>
          </Box>
          <Box fontSize={"13px"}>
            <UnorderedList listStyleType={"none"} lineHeight={"25px"}>
              <Text fontWeight={"bold"} padding={"10px"}>
                Cables
              </Text>
              <Text padding={"10px"} fontWeight={"500"}>
                Shop by Feautes
              </Text>
              <ListItem>About boAt</ListItem>
              <ListItem color={"gray"}>News</ListItem>
              <ListItem color={"gray"}>Read Our Blog</ListItem>
              <ListItem color={"gray"}>Read Our Blog</ListItem>
              <ListItem color={"gray"}>Read Our Blog</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      )}
    </>
  );
}
