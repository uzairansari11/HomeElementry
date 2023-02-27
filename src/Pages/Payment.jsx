import CheckoutData from "../Components/checkout/CheckoutData"
import CheckoutForm from "../Components/checkout/CheckoutForm";
import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { getCartRequest } from "../Redux/cart/api";
import { useDispatch, useSelector } from "react-redux";

const Payment = () => {
 
  const allCartData=useSelector((store)=>store.cartReducer.cartItem)
  const id=localStorage.getItem("id")
  const dispatch = useDispatch();
let totalAmountFromApi = 0;
allCartData.forEach(
    (cartItem) =>
      (totalAmountFromApi =
        totalAmountFromApi + cartItem.quantity * cartItem.price)
  );

useEffect(()=>{
if(id){
  dispatch(getCartRequest(id))
}
},[])

  return (
     
      <Flex
        bg="#FAF9F6"
        minH="100vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
        
      >
        <Container maxW="5xl">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            <CheckoutData cartTotal={60} />
            <CheckoutForm cartTotal={60} />
          </Grid>
        </Container>
      </Flex>
  
  );
};

export default Payment;
