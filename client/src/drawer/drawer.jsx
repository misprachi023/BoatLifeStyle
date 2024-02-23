import React, { useEffect, useRef } from "react";
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

const Drawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Box
      ref={drawerRef}
      width={"55%"}
      backgroundColor={"white"}
      position="fixed" // or "absolute" depending on your needs
      top="0"
      bottom="0"
      left={isOpen ? "0" : "-55%"} // Slide in/out based on isOpen state
      zIndex="10"
      overflowY="auto"
      boxShadow="2xl"
      transition="left 0.3s ease-in-out" // Add smooth transition
      maxHeight="80vh" // Adjust the height as needed
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

        {/* Additional Accordion items go here */}

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
