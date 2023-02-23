import React from "react";
import { Box,Image,Badge, } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icon"


function ProductBox(el) {
  const property=el
  console.log(property);

  return (
    <>
    {property?.map((el)=>
      
    
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
        <Image src={el.images[0]} alt={""} />

        <Box p="6">
          <Box display="flex" alignItems="start">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            {/* <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box> */}
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {el.title}
          </Box>

          <Box color="orange.300" fontSize={"md"} fontWeight={"bold"} textAlign={"start"}>
         
            $ {el.price}
            
          </Box>

          <Box color="green.300" fontSize="md" fontWeight={"bold"} textAlign={"start"}>
            {el.discount}% off
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {/* {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))} */}
            <Box as="span" ml="2" color="gray.600" fontSize="md">
              {el.warranty} 
            </Box>
          </Box>
        </Box>
      </Box>

    
     )}
    </>
  );
}

export default ProductBox;
