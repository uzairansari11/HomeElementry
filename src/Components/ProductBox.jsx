import React from "react";
import { Box,Image,Badge, Button, } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icon"
import { useState } from "react";


function ProductBox({el}) {

  const [mouse,setmouse]= useState(false);

  const handlemouseenter=()=>{
    setmouse(true)
  }

  const handlemouseout=()=>{
    setmouse(false)
  }

  const handleCart=()=>{
    console.log("helo");
  }
  
  return (
    <>

      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"  w={"70%"} onMouseEnter={handlemouseenter}>
        <Image src={el.images[0]} alt={"dummy"} w={"100%"} cursor={"pointer"}   />
       {mouse?<Button position={"relative"} top={"-70px"}  colorScheme="orange" onMouseOut={handlemouseout} onClick={handleCart}>Add to Cart</Button>:""}

        <Box p="1">
          <Box display="flex" alignItems="start">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
           
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

    

    </>
  );
}

export default ProductBox;
