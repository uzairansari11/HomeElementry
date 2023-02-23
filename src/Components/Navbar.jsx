import React from "react";
import {
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Box,
  Flex,
  VStack,
  Image,
  Center,

} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { NavLink as ReactLink } from "react-router-dom";
import logo from "../logo.png";
import Subnavbar from "./Subnavbar";

const Navbar = () => {
  return (
    <Box
      position={"fixed"}
      w="100%"
      top="0"
      z-index={"5"}
      left={"0"}
      p={'2'}
      boxShadow={'2xl'}
      height={'120px'}
     bg={'white'}

    >
<Center>
      <Flex align={"center"} p={"0"} w="95%" justifyContent={"space-between"}
      
    >
      <ReactLink to="/" >
        <VStack>
          <Image
            src={logo}
            alt="logo"
            mx={"30px"}
            w={"190px"}
          />
        </VStack>
</ReactLink>
        <VStack w={{ base: "200px", md: "300px", lg: "550px" }}>
          <InputGroup size="md"     w={{base:"120px",lg:"400px"}}   >
            <Input
              pr="1rem"
              variant="outline"
              focusBorderColor="#ea7c12"
              placeholder="Your door to happiness opens with a search ...."
   
           
            />
            <InputRightElement width="4.5rem">
              <Button h={{base:"1rem",lg:"1.7rem"}}    
          color='#ea7c12'
          bg={"white"}  _hover={{
            bg: "#ffffff",
          
          }} >
                <SearchIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
     
          </VStack>

<ReactLink   to="/help">

        <HelpOutlineOutlinedIcon style={{ margin: "9px", cursor: "pointer" ,    color:'#ea7c12'}} />
        </ReactLink>
        <ReactLink   to="/wishlist">
        <FavoriteBorderOutlinedIcon
          style={{ margin: "9px", cursor: "pointer",color:'#ea7c12' }}
        />
        </ReactLink>
 <ReactLink   to="/login">
        <PersonOutlineOutlinedIcon
          style={{ margin: "9px", cursor: "pointer" ,color:'#ea7c12'}}
        />
   </ReactLink>
   <ReactLink to="/cart">
        <Button
          ml={"2px"}
          fontSize={"sm"}
          fontWeight={600}
       
          color='#ea7c12'
          bg={"white"}
          _hover={{
            bg: "#ea7c12",
            color:"black",
          }}
        >
          <ShoppingCartOutlinedIcon />0
        </Button>
</ReactLink>
      </Flex>
 
     
      </Center>
      <Subnavbar />

    </Box>


  );
};

export default Navbar;
