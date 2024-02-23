import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  GridItem,
  Text,
  HStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  AddIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import categories from "../data/categories";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <Box
      width={"55%"}
      backgroundColor={"white"}
      position="fixed" // or "absolute" depending on your needs
      top="0"
      bottom="0"
      left="0"
      zIndex="10"
      overflowY="auto"
      boxShadow="2xl"
    >
      <Accordion allowMultiple fontWeight={"500"}>
        <AccordionItem key="categories">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
              Categories
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <HStack spacing={8}>
              <Grid templateColumns="repeat(3, 1fr)">
                {categories.map((item, index) => (
                  <GridItem key={index} display={"flex"} gap={3}>
                    <img width={"20%"} src={item.image} alt={item.title} />
                    <Text fontSize={"10px"} marginTop={"10px"}>
                      {item.title}
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </HStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem key="personalization">
          <Link to="/personalisation">
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                boAt Personalization
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Link>
        </AccordionItem>

        <AccordionItem key="gift">
          <Link to="/gift">
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Gift with boAt
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Link>
        </AccordionItem>

        <AccordionItem key="corporate">
          <Link to="/corporate">
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Corporate Order
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Link>
        </AccordionItem>

        <AccordionItem key="more">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
              More
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList listStyleType="none">
              <ListItem>Daily Deals</ListItem>
              <ListItem>Do What Floats Your boAt</ListItem>
              <ListItem>Blogs</ListItem>
              <ListItem>Earn 100</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Social Responsibility</ListItem>
              <ListItem>Store Locator</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
export default Drawer;
