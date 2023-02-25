import {
  Box,
  Button,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";

const Checkout = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        ml={20}
        mt={5}
        mr={20}
        mb={5}
        
      >
       
        
      </Box>
      <hr />
      <Box display="flex">
        <Box width="65%" ml={20} mt={5} border="1px gray solid" h="100vh" bg={"teal"}>
          <Box ml={2} mt={5} mb={5} display="flex" gap={2}>
            <GoLocation style={{ marginTop: "5px" }}></GoLocation>
            <Heading size="md" fontWeight="20px">
            
              Delivery Address
            </Heading>
          </Box>
          <Box bg="#f5f5f5" width="100%" m="auto">
            <Box ml={2} mt={5} mb={5} color={"orange"}>
              
              Personal Details
            </Box>
            <Box display="flex">
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter First Name
                </span>
                <Input size="sm"  bg="white" placeholder="First Name"/>
              </Box>
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Last Name
                </span>
                <Input size="sm" w={200} bg="white" placeholder="Last Name"/>
              </Box>
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Contact Number
                </span>
                <Input size="sm" w={350} bg="white" placeholder="Mobile Number"/>
              </Box>
            </Box>
            <Box mt={5} mb={5} display="flex">
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  House No
                </span>
                <Input size="sm" w={200} bg="white" placeholder="House No-"/>
              </Box>

              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Apartment Name
                </span>
                <Input size="sm" w={560} bg="white" placeholder="Apartment Name"/>
              </Box>
            </Box>
            <Box mt={5} mb={5} display="flex">
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Street Details
                </span>
                <Input size="sm" w={400} bg="white" placeholder="Street Details"/>
              </Box>

              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Landmark For Easy Reach Out
                </span>
                <Input size="sm" w={360} bg="white" placeholder="Landmark"/>
              </Box>
            </Box>
            <Box display="flex">
              <Box w={200} display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter city name
                </span>
                <Select
                  size="sm"
                  bg="#f5f5f5"
                  color="black"
                  placeholder="Bangalore"
                >
                  <option value="option1">Jaipur</option>
                  <option value="option2">Mumbai</option>
                  <option value="option3">Hyderabad</option>
                  <option value="option3">Chennai</option>
                  <option value="option3">Kerala</option>
                  <option value="option3">Delhi</option>
                </Select>
              </Box>
              <Box w={360} display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Area details
                </span>
                <Input size="sm" bg="white" placeholder="Area"/>
              </Box>
              <Box w={185} display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  * Enter Pincode
                </span>
                <Input size="sm" bg="white" placeholder="Pincode"/>
              </Box>
            </Box>
            <Box mt={3} w={250} display="flex" ml={2} flexDirection="column">
              <span
                style={{
                  marginLeft: "1px",
                  marginBottom: "10px",
                  fontSize: "13px",
                }}
              >
                Choose nick name for this address
              </span>
              <Box>
                <Button border="1px gray solid" ml={1} bg="white" size="sm">
                  HOME
                </Button>
                <Button border="1px gray solid" ml={1} bg="white" size="sm">
                  OFFICE
                </Button>
                <Button border="1px gray solid" ml={1} bg="white" size="sm">
                  OTHER
                </Button>
              </Box>
              <Button
                w={150}
                border="1px gray solid"
                ml={1}
                mt={3}
                bg="#444"
                color="red"
                mb={10}
                size="sm"
              >
                ADD ADDRESS
              </Button>
            </Box>
          </Box>
        </Box>
       
      </Box>
    </div>
  );
};

export default Checkout;
