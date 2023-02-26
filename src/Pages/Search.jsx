import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ProductBox from "../Components/ProductBox";
import { Badge, Box, Grid } from "@chakra-ui/react";
import { Button } from "bootstrap";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Search = () => {
  // const [mouse, setmouse] = useState(false);
  const searchQuery = localStorage.getItem("serachquery");
  console.log(searchQuery);
  const [searchResults, setSearchResults] = useState(searchQuery || "");

  const [allData, setAllData] = useState([]);

  // console.log(searchQuery);
  const gettingDatFromApiForSearch = () => {
    axios
      .get(`http://localhost:8080/products?q=${searchResults}`)
      .then((res) => {
        setAllData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    gettingDatFromApiForSearch();
    setSearchResults(searchQuery);
  }, [searchQuery]);
  
 
  return (
    <>
        <Grid templateColumns="repeat(3,1fr)" gap={1} m={10} justifyContent={"center"} >
      {allData?.map((el) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            w={"60%"}
            mt={"8"}
           
          >
            <Link to={`${el.id}`}>
              <Image
                src={el.images[0]}
                alt={"dummy"}
                w={"100%"}
                cursor={"pointer"}
              />
            </Link>
            

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
                
                <Box
                  as="span"
                  color="gray.600"
                  fontSize="md"
                  textAlign={"start"}
                >
                  {el.warranty} Month's Warranty
                </Box>
              </Box>
            </Box>
          </Box>
      ))}
      </Grid>
    </>
  );
};
