import { Box, Flex, GridItem, Heading, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
// import { formatCurrency } from "@/utils/formatCurrency";

const CheckoutData = ({ cartTotal }) => {

  return (
    <GridItem p={10}>
      <Flex alignItems="center">
        <Box
          cursor="pointer"
          p={2}
          rounded="full"
          border="1px solid black"
          
          onClick={() => {
           
          }}
        >
          <BiArrowBack fontSize="20px" />
        </Box>
        <Text color={"teal"} ml={2}>HomeElementry</Text>
        <Tag colorScheme="yellow" ml={3}>
          TEST MODE
        </Tag>
      </Flex>
      <Box ml="44px" >
        <Text mt={10} fontSize="lg" color={"#c20c51"}>
          Pay-HomeElementry
        </Text>
        <Heading color={"teal"}>{(cartTotal)}</Heading>
      </Box>
    </GridItem>
  );
};

export default CheckoutData;
