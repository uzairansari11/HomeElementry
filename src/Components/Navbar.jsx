import React, { useEffect, useState } from "react";
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
  useToast,

} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import Subnavbar from "./Subnavbar";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../Redux/auth/action";
import { Badge } from '@chakra-ui/react';
import {getCartRequest} from "../Redux/cart/api"



const Navbar = () => {
const toast = useToast();
const [seacrhText,setSeacrhText] =useState("")
const navigate=useNavigate()
const allCartItems=useSelector((store)=>store.cartReducer.cartItem)
const id=localStorage.getItem("id")
const isAuth=useSelector((store)=>store.authReducer.isAuth)||localStorage.getItem("isAuth")
const dispatch=useDispatch()
  const handleSearch=()=>{

if(seacrhText && seacrhText.length > 2){
console.log("searxh")
localStorage.setItem("serachquery",seacrhText)
  navigate("/search");

 
}
 
  }
  console.log(isAuth)



  const handleLogout=()=>{
    console.log("111")
dispatch(logoutSuccess())
localStorage.removeItem("isAuth")
localStorage.removeItem("id")

toast({
  title: "Logout Successful",
  status: "success",
  duration: 500,
  isClosable: true,
  position: "top",
});
navigate("/");
window.location.reload(false);
  }

  useEffect(()=>{
    dispatch(getCartRequest(id))
    },[])
    
  return (
    <Box
      position={"fixed"}
      w="100%"
      top="0"
      zIndex={'100'} 
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
   value={seacrhText}
   onChange={(e)=>setSeacrhText(e.target.value)}
           
            />
            <InputRightElement width="4.5rem"     >
              <Button h={{base:"1rem",lg:"1.7rem"}}    
          color='#ea7c12'
          bg={"white"}  _hover={{
            bg: "#ffffff",
          
          }}  
          onClick={handleSearch}
           >
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

   <ReactLink to="/cart">
        <Button
          ml={"2px"}
          fontSize={"sm"}
          fontWeight={600}
       
          color='#ea7c12'
          bg={"white"}
          _hover={{
            bg: "#ea7c12",
            color:"white",
          }}
        >
          <ShoppingCartOutlinedIcon /> <Badge colorScheme={'facebook'}
          borderRadius={"25px"}
          
          >{allCartItems?allCartItems.length:0}</Badge>
        </Button>
</ReactLink>
 {isAuth?<LogoutIcon  
   style={{ margin: "9px", cursor: "pointer" ,color:'red'}}

onClick={handleLogout}

 />:<ReactLink   to="/login">
        <PersonOutlineOutlinedIcon
          style={{ margin: "9px", cursor: "pointer" ,color:'#ea7c12'}}
        />
   </ReactLink >  }
      </Flex>
 
     
      </Center>
      <Subnavbar />

    </Box>


  );
};

export default Navbar;
