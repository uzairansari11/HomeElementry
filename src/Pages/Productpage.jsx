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


function Productpage() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productreducer.product);
  // console.log(product);
  const location=useLocation()
  // console.log(location);


  useEffect(() => {
    dispatch(get_product_api())
  }, []);

  return (

    <>
      <Flex w={"100%"} border={"3px solid green"}  h={"250px"} position={"fixed"} zIndex={5} bg={"white"}>
        <Box w={"20%"} border={"1px solid yellow "} >
        <Sorting  />

        </Box>
        <Box w={"80%"} border={"1px solid red"}  >
          <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Lamps&Lighting_Banner2x_30Nov.jpg" w={"100%"}  h={"100%"}/>
        </Box>
      </Flex>
    <Stack direction={["row"]}>
      <Box>
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
      
    </Stack>
    <Stack direction={["row"]} justifyContent={"center"}  mt={"10px"} justifyItems={"center"}>
      {/* <Pagination product={product}/> */}
    </Stack>
  
    </>
    
  );
}

export default Productpage;
