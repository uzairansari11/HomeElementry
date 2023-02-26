// import {
//   Box,
//   chakra,
//   Container,
//   Stack,
//   Text,
//   Image,
//   Flex,
//   VStack,
//   Button,
//   Heading,
//   SimpleGrid,
//   StackDivider,
//   useColorModeValue,
//   VisuallyHidden,
//   List,
//   ListItem,
// } from '@chakra-ui/react';
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { MdLocalShipping } from 'react-icons/md';
// import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useEffect,useState } from 'react';
// import { singlepage_api } from '../Redux/product/api';
// import Bottomimage from '../Pages/Bottomimage';

// export default function SingleProduct() {
//   const {id}=useParams()
//   const location=useLocation()
//   console.log(location.pathname)

//   const [iddata, setiddata] = useState();
 
//   useEffect(()=>{
//     singlepage_api(id).then((re)=>{
//       // console.log(re)
//       setiddata(re)
//     })
//   },[])

//   // console.log(iddata)
//   let imge=""
 
 
  

//   return (

//     <>
   
//       <Container maxW={'7xl'}>
//       <SimpleGrid
//         columns={{ base: 1, lg: 2 }}
//         spacing={{ base: 8, md: 10 }}
//         py={{ base: 18, md: 24 }}>
//         <Flex direction={"column"}>
//           <Image
//             rounded={'md'}
//             alt={'product image'}
//             src={
//              iddata?.images[0]
            
//             }
//             fit={'cover'}
//             align={'center'}
//             w={'100%'}
//             h={{ base: '100%', sm: '400px', lg: '500px' }}
//           />

//           <Stack>
//             <Bottomimage  iddata={iddata} />
//           </Stack>
        
//         </Flex>

        

//         <Stack spacing={{ base: 6, md: 10 }}>
//           <Box as={'header'}>
//             <Heading
//             textAlign={"start"}
//               lineHeight={1.1}
//               fontWeight={600}
//               fontSize={{ base: 'md', sm: 'md', lg: 'md' }}>
//               {iddata?.title}
//             </Heading>
            
      
//               {/* <Image src='https://ii1.pepperfry.com/images/svg/vip-rating-filled-star.svg'/> */}

            
//             <Text
//               textAlign={"start"}
//               mt={"30px"}
//               color={"orange"}
//               fontWeight={400}
//               fontSize={'2xl'}>
//               ₹ {iddata?.price}
//             </Text>
//           </Box>

//           <Stack
//             spacing={{ base: 4, sm: 6 }}
//             direction={'column'}
//             divider={
//               <StackDivider
//                 borderColor={useColorModeValue('gray.200', 'gray.600')}
//               />
//             }>
//             <VStack spacing={{ base: 0, sm: 0 }}>
//               <Text
//                 textAlign={"start"}
//                 color="black"
//                 fontSize={'xl'}
//                 fontWeight={'300'}>
//                 {iddata?.warranty}
//               </Text>
             
//             </VStack>

//             <Button
//             rounded={'none'}
//             w={'full'}
//             mt={8}
//             size={'lg'}
//             py={'7'}
//             colorScheme='orange'
//             textTransform={'uppercase'}
//             _hover={{
//               transform: 'translateY(2px)',
//               boxShadow: 'lg',
//             }}>
//             Add to cart
//           </Button>
            
//             <Box>
//               <Text
//                 fontSize={{ base: '16px', lg: '18px' }}
//                 color={useColorModeValue('yellow.500', 'yellow.300')}
//                 fontWeight={'500'}
//                 textTransform={'uppercase'}
//                 mb={'4'}>
//                 Product Details
//               </Text>

//               <List spacing={2}>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Height:
//                   </Text>{' '}
//                   {iddata?.dimensions.heigth} mm
//                 </ListItem>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Weight:
//                   </Text>{' '}
//                   {iddata?.dimensions.width} mm
//                 </ListItem>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Depth:
//                   </Text>{' '}
//                   {iddata?.dimensions.depth} mm
//                 </ListItem>
                
               
//               </List>
//             </Box>
//           </Stack>

        

          
//         </Stack>
//       </SimpleGrid>
//       </Container>
//     </>




//   );
// }


import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getSingleProduct} from '../Redux/product/api';
import Bottomimage from '../Pages/Bottomimage';

export default function SingleProduct() {
  const {id}=useParams()
  const location=useLocation()
  console.log(location.pathname)

  const [iddata, setiddata] = useState();
 
  useEffect(()=>{


    getSingleProduct(id).then((res)=>{
        setiddata(res)
    })
  
  },[])



 
 
  

  return (

    <>
   
      <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex direction={"column"}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
             iddata?.images[0]
            
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />

          <Stack>
            <Bottomimage  iddata={iddata} />
          </Stack>
        
        </Flex>

        

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
            textAlign={"start"}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'md', sm: 'md', lg: 'md' }}>
              {iddata?.title}
            </Heading>
            
      
              {/* <Image src='https://ii1.pepperfry.com/images/svg/vip-rating-filled-star.svg'/> */}

            
            <Text
              textAlign={"start"}
              mt={"30px"}
              color={"orange"}
              fontWeight={400}
              fontSize={'2xl'}>
              ₹ {iddata?.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 0, sm: 0 }}>
              <Text
                textAlign={"start"}
                color="black"
                fontSize={'xl'}
                fontWeight={'300'}>
                {iddata?.warranty}
              </Text>
             
            </VStack>

            <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            colorScheme='orange'
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
            
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Height:
                  </Text>{' '}
                  {iddata?.dimensions.heigth} mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Weight:
                  </Text>{' '}
                  {iddata?.dimensions.width} mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Depth:
                  </Text>{' '}
                  {iddata?.dimensions.depth} mm
                </ListItem>
                
               
              </List>
            </Box>
          </Stack>

        

          
        </Stack>
      </SimpleGrid>
      </Container>
    </>




  );
}