// import {
//     Box,
//     Heading,
//     Radio,
//     RadioGroup,
//     Stack,
//     VStack,
//     Checkbox,
//     CheckboxGroup,
//   } from "@chakra-ui/react";
//   import React from "react";
//   import { useDispatch, useSelector } from "react-redux";
//   import { get_product_api } from "../Redux/product/action";
//   import { useEffect, useState } from "react";
//   import {  useSearchParams } from "react-router-dom";
//   import { useLocation } from "react-router-dom";
  
  
//   function  HomeDecorSorting() {
    
//     const dispatch = useDispatch();
//     const product = useSelector((state) => state.productreducer.product);
  
//     const [searchParams, setSearchParams] = useSearchParams();
  
  
//     const location = useLocation();
//     const query = location.search;
  
    
//     const order=searchParams.getAll("_order").toString()
//     const initialFilterValues = searchParams.getAll("brand");
  
//     const [orderBy, setOrderBy] = useState(order || "");
//     const [filterValues, setFilterValues] = useState(initialFilterValues || []);
  
  
//     const handleradios = (e) => {
//     setOrderBy(e)
      
//     };
  
//     const handleFilterChange = (value) => {
//       setFilterValues(value);
//     };
  
  
  
//     useEffect(() => {
//       const param = {};
//       if (filterValues.length >= 0 || orderBy) {
//        param.brand = filterValues;
    
//        if (orderBy) {
//         param._sort = "price";
    
//         param._order = orderBy;
//        }
  
//        setSearchParams(param)
     
//       }
//      }, [filterValues, setSearchParams, orderBy,]);
  
    
  
//     useEffect(() => {
//         if (product?.length === 0 || location) {
//          const filterParama = {
//           params: {
//            brand: searchParams.getAll("brand"),
//            _sort: searchParams.getAll("_sort").toString(),
//            _order: searchParams.getAll("_order").toString(),
//           },
//          };
//          dispatch(get_product_api(filterParama))
  
//         }
//        }, [query]);
  
//     return (
//       <Stack direction={["column"]}  >
//         <Box w={"100%"}  >
//           <Heading
//             color={"orange"}
//             fontSize={"20px"}
//             textAlign={"start"}
//             mb={"8px"}
//           >
//             Sort Price
//           </Heading>
//           <RadioGroup defaultValue="2" onChange={handleradios}>
//             <Stack direction={["column"]}>
//               <Radio colorScheme="orange" value="desc" >
//                 High to low
//               </Radio>
//               <Radio colorScheme="orange" value="asc" >
//                 low to high
//               </Radio>
//             </Stack>
//           </RadioGroup>
//         </Box>
  
//         <Box   >
//           <Heading
//             color={"orange"}
//             fontSize={"20px"}
//             textAlign={"start"}
//             mb={"8px"}
           
//           >
//             Brand
//           </Heading>
//           <CheckboxGroup
            
//             colorScheme="orange"
  
//             value={filterValues}
//             onChange={handleFilterChange}
            
  
//           >
            
            // <VStack spacing={[1, 2]} direction={["row", "row"]} alignItems={"start"}>
            //   <Checkbox value="Imli street" >Imli street</Checkbox>
            //   <Checkbox value="Golden Peacock">Golden PeacockCasaCraft</Checkbox>
            //   <Checkbox value="Exim Decor">Exim Decor</Checkbox>
            //   <Checkbox value="Art Street">Art Street</Checkbox>
            //   <Checkbox value="CraftVatika">CraftVatika</Checkbox>
            //   <Checkbox value="Swastik Pooja">Swastik Pooja</Checkbox>
            //   <Checkbox value="CraftVatika">CraftVatika</Checkbox>
            //   <Checkbox value="Itiha">Itiha</Checkbox>
            //   <Checkbox value="Hosley">Hosley</Checkbox>
            // </VStack>
//           </CheckboxGroup>
//         </Box>
//       </Stack>
//     );
//   }
  
//   export default HomeDecorSorting;



import {
  Box,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  VStack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product_api } from "../Redux/product/action";
import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


function HomeDecoSorting() {
  
  // const dispatch = useDispatch();
  // const product = useSelector((state) => state.productreducer.product);

  // const [searchParams, setSearchParams] = useSearchParams();


  // const location = useLocation();
  // const query = location.search;

  
  // const order=searchParams.getAll("_order").toString()
  // const initialFilterValues = searchParams.getAll("brand");

  // const [orderBy, setOrderBy] = useState(order || "");
  // const [filterValues, setFilterValues] = useState(initialFilterValues || []);


  // const handleradios = (e) => {
  // setOrderBy(e)
    
  // };

  // const handleFilterChange = (value) => {
  //   setFilterValues(value);
  // };



  // useEffect(() => {
  //   const param = {};
  //   if (filterValues.length >= 0 || orderBy) {
  //    param.brand = filterValues;
  
  //    if (orderBy) {
  //     param._sort = "price";
  
  //     param._order = orderBy;
  //    }

  //    setSearchParams(param)
   
  //   }
  //  }, [filterValues, setSearchParams, orderBy,]);

  

  // useEffect(() => {
  //     if (product?.length === 0 || location) {
  //      const filterParama = {
  //       params: {
  //        brand: searchParams.getAll("brand"),
  //        _sort: searchParams.getAll("_sort").toString(),
  //        _order: searchParams.getAll("_order").toString(),
  //       },
  //      };
  //      dispatch(get_product_api(filterParama))

  //     }
  //    }, [query]);


  const [searchParam, setSearcParam] = useSearchParams();
  const initialSearchParam = searchParam.getAll("filter");
 
  const order = searchParam.getAll("_order").toString();
  const [orderBy, setOrderBy] = useState(order || "");
  // _sort = views & _order=asc  //
  const handleSort = (value) => {
   setOrderBy(value);
  };
 
  const [filterValue, setFilterValue] = useState(initialSearchParam || []);
 
  const handleFilter = (value) => {
   setFilterValue(value);
  };
 
  useEffect(() => {
   const param = {};
   if (filterValue.length >= 0 || orderBy) {
    param.filter = filterValue;
 
    if (orderBy) {
     param._sort = "price";
 
     param._order = orderBy;
    }
 
    setSearcParam(param);
   }
  }, [filterValue, setSearcParam, orderBy]);



  return (
    <Stack direction={["column"]}  >
      <Box w={"100%"}  >
        <Heading
          color={"orange"}
          fontSize={"20px"}
          textAlign={"start"}
          mb={"8px"}
        >
          Sort Price
        </Heading>
        <RadioGroup defaultValue="2" onChange={handleSort}>
          <Stack direction={["column"]}>
            <Radio colorScheme="orange" value="desc" >
              High to low
            </Radio>
            <Radio colorScheme="orange" value="asc" >
              low to high
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box   >
        <Heading
          color={"orange"}
          fontSize={"20px"}
          textAlign={"start"}
          mb={"8px"}
         
        >
          Brand
        </Heading>
        <CheckboxGroup
          
          colorScheme="orange"

          value={filterValue}
          onChange={handleFilter}
          

        >
          
          <VStack spacing={[1, 2]} direction={["row", "row"]} alignItems={"start"}>
              <Checkbox value="Imli street" >Imli street</Checkbox>
              <Checkbox value="Golden Peacock">Golden</Checkbox>
              <Checkbox value="Exim Decor">Exim Decor</Checkbox>
              <Checkbox value="Art Street">Art Street</Checkbox>
              <Checkbox value="CraftVatika">CraftVatika</Checkbox>
              <Checkbox value="Swastik Pooja">Swastik Pooja</Checkbox>
              <Checkbox value="CraftVatika">CraftVatika</Checkbox>
              <Checkbox value="Itiha">Itiha</Checkbox>
              <Checkbox value="Hosley">Hosley</Checkbox>
            </VStack>
        </CheckboxGroup>
      </Box>
    </Stack>
  );
}

export default HomeDecoSorting;
  