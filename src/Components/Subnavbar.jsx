
import { Box,  Grid, Text} from "@chakra-ui/react";
import React from "react";
import { NavLink as ReactLink } from "react-router-dom";

const Subnavbar = () => {
  let activeStyle = {
    color: "white",
    backgroundColor: "#ea7c12",
padding:"4px",
    borderRadius: "3px",
  };

  return (
  
    <Box>
   
      <Grid   mt={'3.5'}
      templateColumns={{base:'repeat(4, 1fr)',lg:'repeat(8, 1fr)'}  }  
justifyItems={'center'}

 
    
       >
     
      <Text    w={'fit-content'}  >
        <ReactLink
      
          to="/furniture"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          
        >
        
      Furniture
        </ReactLink>
</Text>    

<Text    w={'fit-content'}  >
        <ReactLink
          to="/homedeco"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          HomeDécor
        </ReactLink>
</Text>  
  <Text    w={'fit-content'}  >
        <ReactLink
          to="/lampslighting"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
     
Lighting
        </ReactLink>
        </Text>
        <Text    w={'fit-content'}  >
        <ReactLink
          to="/furnishings"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Furnishings
        </ReactLink>
        </Text>
        <Text    w={'fit-content'}  >
        
        <ReactLink
          to="/mattresses"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Mattresses
        </ReactLink>
        </Text>
        <Text    w={'fit-content'}  >
        <ReactLink
          to="/appliances"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Appliances
        </ReactLink>
        </Text>
        <Text    w={'fit-content'}  >
        <ReactLink
          to="/modular"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Modular
        </ReactLink>
        </Text>
        <Text    w={'fit-content'}  >
        <ReactLink
          to="/giftcards"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Gift Cards
        </ReactLink>
        </Text>
   
      </Grid>
   
    </Box>
 
  );
};

export default Subnavbar;
