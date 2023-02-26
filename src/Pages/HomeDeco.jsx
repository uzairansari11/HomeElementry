// import React from "react";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { get_product_api } from "../Redux/product/action";
// import { Box, Flex, Grid, Stack, VStack } from "@chakra-ui/react";

// import { sort_product_by_value } from "../Redux/product/api";
// import Pagination from "../Components/Pagination";
// import { useLocation } from "react-router-dom";
// import { Image } from "@chakra-ui/react";

// import ProductBox from "../Components/ProductBox";
// import HomeDecorSorting from "../Components/HomeDecoSorting";

// function HomeDeco() {
//   const dispatch = useDispatch();
//   const product = useSelector((state) => state.productreducer.product);
//   console.log(product);

//   const location = useLocation();

//   useEffect(() => {
//     dispatch(get_product_api());
//   }, []);

//   return (
//     <>
//       {/* <Flex w={"100%"} border={"3px solid green"}  h={"250px"} position={"fixed"} zIndex={5} bg={"white"}>
//         <Box w={"20%"} border={"1px solid yellow "} >
        
//         </Box>
//         <Box w={"80%"} border={"1px solid red"}  >
//         <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Lamps&Lighting_Banner2x_30Nov.jpg" w={"100%"}  h={"100%"}/>
//         </Box>
//       </Flex> */}
//       <Stack direction={["row"]}>
//         <HomeDecorSorting/>
//         <Box>
//           <Grid
//             gap={"10px"}
//             templateColumns={{
//               base: "repeat(1,1fr)",
//               md: "repeat(2,1fr)",
//               lg: "repeat(3,1fr)",
//             }}
//           >
            // {product
            //   ?.filter(
            //     (element) =>
            //       element.category === "vases" ||
            //       element.category === "figurines" ||
            //       element.category === "collectibles" ||
            //       element.category === "photoframes"||
            //       element.category === "festivedecor"
            //   )
            //   .map((el) => (
            //     <ProductBox key={el.id} el={el} />
            //   ))}
//           </Grid>
//         </Box>
//       </Stack>
//       <Stack
//         direction={["row"]}
//         justifyContent={"center"}
//         mt={"10px"}
//         justifyItems={"center"}
//       >
//         <Pagination product={product} />
//       </Stack>
//     </>
//   );
// }

// export default HomeDeco;




import React, { useState } from "react";
import ProductBox from "../Components/ProductBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, get_product_api } from "../Redux/product/action";
import { Box, Flex, Grid, Stack, VStack } from "@chakra-ui/react";
import Sorting from "../Components/Sorting";
import { sort_product_by_value } from "../Redux/product/api";

import { useLocation, useSearchParams } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import { getCartRequest } from "../Redux/cart/api";


import  Pagination  from "../Components/Pagination";
import HomeDecoSorting from "../Components/HomeDecoSorting";
import Loading from "../Components/Loading";




function HomeDeco() {
  const product = useSelector((store) => store.productreducer.products);
  const loading= useSelector((store)=>store.productreducer.isLoading)
 const dispatch = useDispatch();
 const location = useLocation();

 const [activePage, setActivePage] = useState(1);

 const [searchParam] = useSearchParams();


 const handleACtivePage = (data)=> {
  setActivePage(data);
 };
 
 useEffect(() => {
  if (product.length === 0 || location) {
   const filterParama = {
    params: {
     brand: searchParam.getAll("filter"),
     _sort: searchParam.getAll("_sort").toString(),
     _order: searchParam.getAll("_order").toString(),
    },
   };
   dispatch(getProducts(filterParama));
  }
 }, [location.search]);

  return (

    <>
     {loading? <Loading/>:""}
    <Flex justifyContent={'space-between'} >
    <Box p={'2'} w={[ "60%",  "50%","25%","15%"]}   >
        <HomeDecoSorting/>

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
          {product
              ?.filter(
                (element) =>
                  element.category === "vases" ||
                  element.category === "figurines" ||
                  element.category === "collectibles" ||
                  element.category === "photoframes"||
                  element.category === "festivedecor"
              )
              .map((el) => (
                <ProductBox key={el.id} el={el} />
              ))}
        </Grid>
      </Box>
      
    </Flex>
    <Stack direction={["row"]} justifyContent={"center"}  mt={"10px"} justifyItems={"center"}>
      <Pagination product={product}/>
    </Stack>
   
  
    </>
    
  );
}

export default HomeDeco;

