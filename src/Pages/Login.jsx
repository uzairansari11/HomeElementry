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
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../logo.png";
import { authSuccess,  error, gettingUsersData, loading } from "../Redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataFromApi } from "../Redux/auth/api";
export function Login() {
const [userData,setUserData]=useState([])
const navigate=useNavigate()

 
  

  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
 getUserDataFromApi().then((res)=>

setUserData(res)
)
  }, []);

  const handleLogin = () => {


    const autherized = userData.filter((user) => {
      return   (user.userEmail === email && user.password === password )
    });


    if (autherized.length === 1) {
      dispatch(loading())
      toast({
        title: "Login Successful",
        description: "Welcom to Home Elementry",
        status: "success",
        duration: 500,
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("isAuth", true);
      localStorage.setItem("id",autherized[0]["id"])
      dispatch(authSuccess())
      navigate("/"  , {replace:true})
      window.location.reload(false);
    } else {
    
      toast({
        title: "Login Unsuccessful",
        description: "Invalid Credentials",
        status: "error",
        duration: 500,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={4} mx={"auto"} maxW={"lg"} py={3} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"}>
            Sign In To <Image src={logo} alt="logo" mx={"30px"} w={"190px"} />{" "}
          </Heading>
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
                <Input
                  type="text"
                  placeholder="Please enter your email.."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel color={"#ea7c12"}>Password</FormLabel>

              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
