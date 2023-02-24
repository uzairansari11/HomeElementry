import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputLeftAddon,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import logo from "../logo.png";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");



const handleRegistration=()=>{
  console.log(email,password,firstName,lastName)
}



  return (
    <Flex
     
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={4} mx={"auto"} maxW={"lg"} py={2} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"} textAlign={"center"}>
          Become A Part Of  <Image src={logo} alt="logo" mx={"30px"} w={"190px"} />
          </Heading>
        
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={4}
        >
          <Stack spacing={2}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color={"#ea7c12"}>First Name</FormLabel>
                  <Input type="text" placeholder="First Name..."  
value={firstName}
onChange={(e) => setFirstName(e.target.value)} />

        
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel color={"#ea7c12"}>Last Name</FormLabel>
                  <Input type="text"  placeholder="Last Name..."  
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} />
                  
          
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel color={"#ea7c12"}>Email address</FormLabel>
              <InputGroup>
                <InputLeftAddon children=<EmailIcon color={"#ea7c12"} /> />
                <Input type="tel" placeholder="Please Enter Your Email..."
                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                 />
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={"#ea7c12"}>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"}  placeholder="Please Enter Your Password..."    
                
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                
                 />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <ViewIcon color={"#ea7c12"} />
                    ) : (
                      <ViewOffIcon color={"#ea7c12"} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={6} pt={2}>
              <Button
                bg={"#ea7c12"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}

                onClick={handleRegistration}
              >
                Register
              </Button>
            </Stack>
            <Stack pt={1}>

          
              <Text align={"center"}>
                Already a user? 
                <ReactLink   to='/login' color={"#ea7c12"}>
                Login
                </ReactLink>
              </Text>
           
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
