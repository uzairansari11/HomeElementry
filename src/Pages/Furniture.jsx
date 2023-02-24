import React from "react";
import { Box,  Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CustomGrid, CustomGridBox} from "../Components/CustomGrid";
import { bestSeller, bigDeals, chooseYou, discoverNewLaunch, topBrands, whatsTrending } from "../Utils/home";


export const Furniture = () => {
  return (
    <Box p={8}>
      <Box  margin={"auto"}>
        <Flex>


        <Box  border={"1px solid blue"} w={"25%"} p={"1"} textAlign={"left"} >
        <Text as="b" fontSize={{base:"xs",md:"md",lg:"xl"}}>
              Furniture
            </Text>
          <Box 
           height={{base:'50px',md:'110px'}} 
          overflowY='scroll'
  __css={{
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
     
      borderRadius: '24px',
    },
  }}
          
 >
         


            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
            <Text>Sofa</Text>
          
          
          </Box>
          </Box>
          <Box border={"1px solid yellow"} w={"75%"}    >
            <Image
              src={
                "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Furniture_Banner_2x_06Dec.jpg"
               
              }
              width={'100%'} 
            />
          </Box>
        </Flex>
      </Box>

      <CustomGrid base={2} md={3} lg={6} gapS={2} gapM={3} gapL={4}>
        {bestSeller.map((ele, index) => (
          <CustomGridBox key={index} image={ele} width={"100%"} />
        ))}
      </CustomGrid>

      <CustomGrid base={1} md={2} lg={4} gapS={2} gapM={3} gapL={4}>
        {bigDeals.map((ele, index) => (
          <CustomGridBox key={index} image={ele} width={"100%"} />
        ))}
      </CustomGrid>

      <Box>
        <Heading as="h1" textAlign={"left"}>
          What's #Trending?{" "}
        </Heading>

        <CustomGrid base={1} md={2} lg={4} gapS={2} gapM={3} gapL={4}>
          {whatsTrending.map((ele, index) => (
            <CustomGridBox key={index} image={ele} width={"100%"} />
          ))}
        </CustomGrid>
      </Box>

      <Box>
        <Heading as="h1" textAlign={"left"}>
          Discover New Launches
        </Heading>
        <CustomGrid base={1} md={2} lg={4} gapS={2} gapM={3} gapL={4}>
          {discoverNewLaunch.map((ele, index) => (
            <CustomGridBox key={index} image={ele} width={"100%"} />
          ))}
        </CustomGrid>
      </Box>

      <Box>
        <Heading as="h1" textAlign={"left"}>
          Your Style Chooses You
        </Heading>

        <CustomGrid base={1} md={1} lg={3} gapS={2} gapM={3} gapL={4}>
          {chooseYou.map((ele, index) => (
            <CustomGridBox key={index} image={ele} width={"100%"} />
          ))}
        </CustomGrid>
      </Box>

      <Box>
        <Heading as="h1" textAlign={"left"}>
          Top Brands To Choose From
        </Heading>
        <CustomGrid base={2} md={3} lg={6} gapS={2} gapM={3} gapL={4}>
          {topBrands.map((ele, index) => (
            <CustomGridBox key={index} image={ele} width={"100%"} />
          ))}
        </CustomGrid>
      </Box>
    </Box>
  );
};
