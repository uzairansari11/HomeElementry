import React from "react";
import ProductBox from "../Components/ProductBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product_api } from "../Redux/product/action";
import { Box, Grid, Stack, VStack } from "@chakra-ui/react";
import Sorting from "../Components/Sorting";
import { sort_product_by_value } from "../Redux/product/api";
import Pagination from "../Components/Pagination";
import { useLocation } from "react-router-dom";


function Productpage() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productreducer.product);
  const location=useLocation()
  // console.log(location);


  useEffect(() => {
    dispatch(get_product_api());
  }, []);

  return (

    <>
    <Stack direction={["row"]}>
      <Box>
        <Sorting  />
      </Box>
      <Box>
        <Grid
        gap={"10px"}
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
        >
          {product?.map((el) => (
            <ProductBox key={el.id} el={el} />
          ))}
        </Grid>
      </Box>
      
    </Stack>
    <Stack direction={["row"]} justifyContent={"center"}>
      <Pagination product={product}/>
    </Stack>
  
    </>
    
  );
}

export default Productpage;
