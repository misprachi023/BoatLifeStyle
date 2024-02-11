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
    <Box width={"55%"} backgroundColor={"white"}>
      <Accordion allowMultiple fontWeight={"500"} >
        <AccordionItem >
          {({ isExpanded }) => (
            <> 
              <h2> 
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                    Categories
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <HStack spacing={8}>
                  <Grid templateColumns="repeat(3, 1fr)">
                    {categories.map((item) => (
                      <GridItem display={"flex"} gap={3}>
                        <img width={"20%"} src={item.image} />
                        <Text fontSize={"10px"} marginTop={"10px"}>
                          {item.title}
                        </Text>
                      </GridItem>
                    ))}
                  </Grid>
                </HStack>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          <h2>
            {" "}
            <Link to="/personalisation">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left"  fontWeight={"bold"}>
                  boAt Personlization
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Link>
          </h2>
        </AccordionItem>
          <AccordionItem>
          <h2>
            {" "}
            <Link to="/gift">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left"  fontWeight={"bold"}>
                  Gift with boAt
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Link>
          </h2>
        </AccordionItem>
        <AccordionItem>
          <h2>
            {" "}
            <Link to="/corporate">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left"  fontWeight={"bold"}>
                  Corporate Order
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Link>
          </h2>
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                    More
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList listStyleType="none">
                    <ListItem>Daily Deals</ListItem>
                    <ListItem>Do What FloAts Your boAt</ListItem>
                    <ListItem>Blogs</ListItem>
                    <ListItem>Earn 100</ListItem>
                    <ListItem>Careers</ListItem>
                    <ListItem>Social Responsibility</ListItem>
                    <ListItem>Store Locator</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

      </Accordion>
    </Box>
  );
};
export default Drawer;
