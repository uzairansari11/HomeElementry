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
import { sort_product_by_value } from "../Redux/product/api";
import { useDispatch, useSelector } from "react-redux";
import { get_product_api, query_product_api } from "../Redux/product/action";
import { useEffect, useState } from "react";
import { useFetcher, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import {}

// const FilterAndSort = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const initialFilterValues = searchParams.getAll('filter')
//     const [filterValues, setFilterValues] = useState<>(initialFilterValues || []);
//     const handleFilterChange  = (value: string[]) => {
//         setFilterValues(value)
//     }

//     useEffect(() => {
//         let params: {filter?: string[]} = {}
//         if(filterValues.length) params.filter = filterValues;
//         setSearchParams(params)
//     }, [filterValues])

function Sorting() {
  // console.log(product)
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productreducer.product);

  const [searchParams, setSearchParams] = useSearchParams();
  // const [searchParmssorting,setsearchparamssorting]=useSearchParams()

  const location = useLocation();
  const query = location.search;

  
  const order=searchParams.getAll("_order").toString()
  const initialFilterValues = searchParams.getAll("brand");

  const [orderBy, setOrderBy] = useState(order || "");
  const [filterValues, setFilterValues] = useState(initialFilterValues || []);


  const handleradios = (e) => {
  setOrderBy(e)
    
  };

  const handleFilterChange = (value) => {
    setFilterValues(value);
  };



  useEffect(() => {
    const param = {};
    if (filterValues.length >= 0 || orderBy) {
     param.brand = filterValues;
  
     if (orderBy) {
      param._sort = "price";
  
      param._order = orderBy;
     }

     setSearchParams(param)
   
    }
   }, [filterValues, setSearchParams, orderBy,]);

  

  useEffect(() => {
      if (product?.length === 0 || location) {
       const filterParama = {
        params: {
         brand: searchParams.getAll("brand"),
         _sort: searchParams.getAll("_sort").toString(),
         _order: searchParams.getAll("_order").toString(),
        },
       };
       dispatch(get_product_api(filterParama))

      }
     }, [query]);

  return (
    <Stack direction={["column"]} mt={"30px"}>
      <Box w={"100%"} h={"100px"}>
        <Heading
          color={"orange"}
          fontSize={"20px"}
          textAlign={"start"}
          mb={"8px"}
        >
          Sort Price
        </Heading>
        <RadioGroup defaultValue="2" onChange={handleradios}>
          <Stack direction={["column"]}>
            <Radio colorScheme="green" value="desc" >
              High to low
            </Radio>
            <Radio colorScheme="orange" value="asc" >
              low to high
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box>
        <Heading
          color={"orange"}
          fontSize={"20px"}
          textAlign={"start"}
          mb={"8px"}
        >
          Brand
        </Heading>
        <CheckboxGroup
          colorScheme="green"
          value={filterValues}
          onChange={handleFilterChange}
        >
          <VStack spacing={[1, 5]} direction={["row", "row"]}>
            <Checkbox value="Foziq">Foziq</Checkbox>
            <Checkbox value="Mansaa">Mansaa</Checkbox>
            <Checkbox value="Xergy">Xergy</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
    </Stack>
  );
}

export default Sorting;
