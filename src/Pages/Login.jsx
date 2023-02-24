import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Image,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  useToast,
  
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { useState } from "react";
import logo from "../logo.png";
export function Login() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email,password);
    toast({
      title: "Login Successful",
      description: "Welcom to Home Elementry",
      status: "success",
      duration: 500,
      isClosable: true,
      position: "top",
    });







    
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={4} mx={"auto"} maxW={"lg"} py={3} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"}>Sign In To  <Image src={logo} alt="logo" mx={"30px"} w={"190px"} /> </Heading>
     
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={3}>
            <FormControl id="email">
              <FormLabel color={"#ea7c12"}>Email address</FormLabel>
              <InputGroup>
                <InputLeftAddon children=<EmailIcon color={"#ea7c12"} /> />
                <Input type="text" placeholder="Please enter your email.."  value={email} onChange={(e)=>setEmail(e.target.value)}  />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel color={"#ea7c12"}>Password</FormLabel>

              <InputGroup>
                <Input type={showPassword ? "text" : "password"}    value={password} onChange={(e)=>setPassword(e.target.value)}  />
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
            <Flex justifyContent={"center"} gap={10}>
              <ReactLink to="/register">
                <Button
                  bg={"#ea7c12"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Register
                </Button>
              </ReactLink>
              <Button
                onClick={handleLogin}
                bg={"#ea7c12"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                Sign in
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
