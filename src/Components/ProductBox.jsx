import React, { useEffect } from "react";
import { Box, Image, Badge, Button, useToast } from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addCartRequest, getCartRequest} from "../Redux/cart/api"
import axios from "axios";

function ProductBox({ el }) {
  const toast = useToast();


// const cardDatafromstore=useSelector((store)=>store.cartReducer.cartItem)
const allCartItems=useSelector((store)=>store.cartReducer.cartItem)


const dispatch = useDispatch();

  const [mouse, setmouse] = useState(false);
  const id = localStorage.getItem("id");


  const handlemouseenter = () => {
    setmouse(true);
  };

  const handlemouseout = () => {
    setmouse(false);
  };

  const handleCart = () => {
if(id){
const newProductAddedtoCart={...el,quantity:1}
  const patchCartData=[...allCartItems,newProductAddedtoCart]
  dispatch(addCartRequest(id,patchCartData ));
  toast({
    title: "Product Added In Cart",
    description: "Product deleted from cart",
    variant: "subtle",
    status: "success",
    position: "top-right",
    duration: 1000,
    isClosable: true,
  });
  console.log(id)
}else{
  toast({
    title: "Please Login First",
    status: "error",
    duration: 500,
    isClosable: true,
    position: "top",
  });
}

  };


  useEffect(()=>{
if(id){
  dispatch(getCartRequest(id))
}

     
    
    
    
      },[])

 

  return (
    <>
      <Box
        // textAlign={"start"}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        w={"90%"}
        mt={"8"}
        onMouseEnter={handlemouseenter}
        onMouseOut={handlemouseout}
        _hover={{
          border: "3px solid orange",
          padding: "2",
          borderRadius: "5",
          cursor: "pointer",
        }}
      >
        <Link to={`${el.id}`}>
          <Image
            src={el.images[0]}
            alt={"dummy"}
            w={"100%"}
            cursor={"pointer"}
          />
        </Link>
        {mouse ? (
          <Button
            position={"relative"}
            top={"-60px"}
            colorScheme="orange"
            onMouseEnter={handlemouseenter}
            onClick={handleCart}
          >
            Add to Cart
          </Button>
        ) : (
          ""
        )}

        <Box p="1">
          <Box display="flex" alignItems="start">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>

          <Box
            textAlign={"start"}
            fontWeight="semibold"
            fontSize={"xl"}
            as="h4"
            lineHeight="25px"
            noOfLines={1}
          >
            {el.title}
          </Box>

          <Box textAlign={"start"} as="h4" fontWeight={"semibold"}>
            {el.brand}
          </Box>

          <Box
            color="orange.300"
            fontSize={"md"}
            fontWeight={"bold"}
            textAlign={"start"}
          >
            ₹ {el.price}
          </Box>

          <Box
            color="green.300"
            fontSize="md"
            fontWeight={"bold"}
            textAlign={"start"}
          >
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
            <Box as="span" color="gray.600" fontSize="md" textAlign={"start"}>
              {el.warranty}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductBox;
