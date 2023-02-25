import React from 'react'
import {
  
  Button,
  Center,
  Flex,
  Heading,
  Image,
  
  Stack,
  Text,
  useColorModeValue,
  
} from '@chakra-ui/react';
export const CartCard = ({data}) => {
  return (
    <div>
      <Center py={6}>
        
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue("orange.200")}
        boxShadow={'2xl'}
        padding={4}>
          
          
        <Flex flex={1} bg="blue.200">
          <Image
          
            objectFit="cover"
            boxSize="100%"
            src={
              'https://ii1.pepperfry.com/media/catalog/product/w/h/800x880/white-acrylic-sweetheart-table-vase-by-oasis-floral-products-white-acrylic-sweetheart-table-vase-by--8xyoxd.jpg'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'1xl'} fontFamily={'body'} color={useColorModeValue('teal')} >
          White Acrylic Sweetheart Table Vase
          </Heading>
          <Text fontWeight={600} color={'blue'} size="sm" mb={4}>
            Price:240
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            
            
            
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              -
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              0
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              +
            </Button>
            
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              color={'white'}
              // bg={'blue.400'}
              bg= {'pink.500'}
              _hover={{
                bg: 'teal.500',
              }}
              >
              Buy Now
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Remove
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
    </div>
  )
}
