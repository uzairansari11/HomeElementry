import { Box, Grid, Image } from "@chakra-ui/react";

import React from "react";

export const CustomGrid = ({ children ,md,base,lg,gapS,gapM,gapL}) => {
  return (
    <Grid

      justifyContent={"space-around"}
      templateColumns={{
        base: `repeat(${base}, 1fr)`,
        md: `repeat(${md},1fr)`,
        lg: `repeat(${lg},1fr)`,
      }}
      gap={{ base: `${gapS}`, md:`${gapM}`, lg: `${gapL}` }}
    >
      {" "}
      {children}
    </Grid>
  );
};

export const CustomGridBox = ({ image ,width}) => {
  return (
    <Box margin={"auto"}   boxShadow={'xl'}
    
   _hover={
   {border:"3px solid orange",
   padding:"2",
   borderRadius:"5",
   cursor:"pointer"
   }
   }
     >
      <Image src={image} w={`${width}`}
      
      borderRadius={5}
       />
    </Box>
  );
};
