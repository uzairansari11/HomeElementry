import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const CartCard = ({
  item,
  deleteHandler,
  handleUpdateQuantity,
  handleBuyNow,

}) => {
  return (
    <Box mb={'4'} ml='1'>

        <Stack
          borderRadius="lg"
          w={{ sm: "100%", md: "540px" }}
          height={{ sm: "100px", md: "10rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("#E99649")}
          boxShadow={"2xl"}
          padding={2}
        >
          <Flex flex={1}>
            <Image src={item.images[0]} />
          </Flex>
          <Flex
            flex={3}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading
              fontSize={"sm"}
              fontFamily={"body"}
              color={useColorModeValue("black")}
            >
              {item.title}
            </Heading>

            <Text fontWeight={600} color={"black"} size="sm">
              ₹ {item.price} / Product
            </Text>
            <Text fontWeight={600} color={"black"} size="sm">
              Total : ₹ {item.price * item.quantity}
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
            ></Text>
            <Stack align={"center"} justify={"center"} direction={"row"} mt={1}>
              <Button
                isDisabled={item.quantity === 1}
                fontSize={"xs"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                size="xs"
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                onClick={() => handleUpdateQuantity(-1, item.id)}
              >
                -
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                size="xs"
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
                size="xs"
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                onClick={() => handleUpdateQuantity(1, item.id)}
                isDisabled={item.quantity === 4}
              >
                +
              </Button>
            </Stack>

            <Stack
              width={"100%"}
              direction={"row"}
              mt={"2"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                flex={0.4}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                size="xs"
                w="xs"
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                onClick={() => deleteHandler(item.id)}
              >
                Remove
              </Button>
            </Stack>
          </Flex>
        </Stack>

    </Box>
  );
};
