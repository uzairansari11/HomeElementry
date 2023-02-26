import React from "react";
import ProductBox from "../Components/ProductBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product_api } from "../Redux/product/action";
import { Box, Flex, Grid, Stack, VStack } from "@chakra-ui/react";
import Sorting from "../Components/Sorting";
import { sort_product_by_value } from "../Redux/product/api";
import Pagination from "../Components/Pagination";
import { useLocation } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import { getCartRequest } from "../Redux/cart/api";


function Productpage() {
  const id=localStorage.getItem("id");
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productreducer.product);
  console.log("product",product);
  const location=useLocation()
  // console.log(location);


  useEffect(() => {
    dispatch(get_product_api())


  },[location]);

  return (

    <>
     
    <Flex justifyContent={'space-between'} >
    <Box p={'2'} w={'13%'}   position={'fixed'}>
        <Sorting  />

        </Box>
      <Box  w={'85%'}  ml={'15%'} >
        <Grid
        gap={"10px"}
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
        >
          {product?.filter((element)=> (element.category==="lamps") || (element.category==="wall light") || (element.category==="Festival light")).map((el) => (
            <ProductBox key={el.id} el={el}  />
          ))}
        </Grid>
      </Box>
      
    </Flex>
    <Stack direction={["row"]} justifyContent={"center"}  mt={"10px"} justifyItems={"center"}>
      {/* <Pagination product={product}/> */}
    </Stack>
  
    </>
    
  );
}

export default Productpage;
