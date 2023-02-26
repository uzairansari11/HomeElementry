import React from "react";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const CartCard = ({ item,deleteHandler,handleUpdateQuantity,handleBuyNow}) => {






  return (
    <div>
      <Center py={2}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "540px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("orange.200")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image objectFit="cover" boxSize="100%" src={item.images[0]} />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading
              fontSize={"1xl"}
              fontFamily={"body"}
              color={useColorModeValue("teal")}
            >
              {item.title}
            </Heading>
            <Text fontWeight={600} color={"blue"} size="sm" mb={4}>
              ₹ {item.price*item.quantity}
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            ></Text>
            <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
              <Button
             isDisabled={item.quantity===1}
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}

                onClick={()=>handleUpdateQuantity(-1,item.id)}

               
              >
                -
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
           {item.quantity}
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                onClick={()=>handleUpdateQuantity(1,item.id)}

                isDisabled={item.quantity===4}
              >
                +
              </Button>
            </Stack>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                color={"white"}
                // bg={'blue.400'}
                bg={"pink.500"}
                _hover={{
                  bg: "teal.500",
                }}

                onClick={()=>handleBuyNow(item.id)}
              >
                Buy Now
              </Button>
              <Button
             
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}

                onClick={()=>deleteHandler(item.id)}
              >
                Remove
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </div>
  );
};
