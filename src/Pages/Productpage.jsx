import React from "react";
import ProductBox from "../Components/ProductBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product_api } from "../Redux/product/action";
import { Box, Grid } from "@chakra-ui/react";

function Productpage() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productreducer.product);
  console.log(product);

  useEffect(() => {
    dispatch(get_product_api());
  }, [dispatch]);

  return (
    <Box>
      <Grid templateColumns={{ base: "repeat(3,1fr)", md: "repeat(5,1fr)" }}>
        {product?.map((el) => (
          <ProductBox key={el.id} el={el} />
        ))}
      </Grid>
    </Box>
  );
}

export default Productpage;
