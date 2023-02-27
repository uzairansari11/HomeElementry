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
  useToast,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getSingleProduct} from '../Redux/product/api';
import Bottomimage from '../Pages/Bottomimage';
import { useDispatch, useSelector } from 'react-redux';
import { addCartRequest, getCartRequest } from '../Redux/cart/api';

export default function SingleProduct() {
  const {id}=useParams()
  const location=useLocation()
  console.log(location.pathname)

  const allCartItems=useSelector((store)=>store.cartReducer.cartItem)

  const [iddata, setiddata] = useState();

  const toast = useToast();
  const dispatch = useDispatch();

  const userId = localStorage.getItem("id");


  const handleCart = (el) => {
    
    const alreadyAdded=allCartItems.filter((product)=>product.id===el.id)

if(alreadyAdded.length===1){



  toast({
    title: "Product Alreacy  Added In Cart",
   
    variant: "subtle",
    status: "error",
    position: "top-right",
    duration: 1000,
    isClosable: true,
  });
  return
}

    if(userId){
    const newProductAddedtoCart={...el,quantity:1}
      const patchCartData=[...allCartItems,newProductAddedtoCart]
      dispatch(addCartRequest(userId,patchCartData ));
      toast({
        title: "Product Added In Cart",
        description: "Product deleted from cart",
        variant: "subtle",
        status: "success",
        position: "top-right",
        duration: 1000,
        isClosable: true,
      });
      console.log(id)
    }else{
      toast({
        title: "Please Login First",
        status: "error",
        duration: 500,
        isClosable: true,
        position: "top",
      });
    }
    
    
      };
    
      useEffect(() => {
        if (id) {
          dispatch(getCartRequest(id));
        }
      }, []);
    
















 
  useEffect(()=>{


    getSingleProduct(id).then((res)=>{
        setiddata(res)
    })
  
  },[])
  console.log(iddata)



 
 
  

  return (

    <>
   
      <Container maxW={'6xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 3, md: 0 }}
        py={{ base: 5, md: 19 }}>
        <Flex direction={"column"} h={["100%","100%", "70%"]} >
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
             iddata?.images[0]
            
            }
            
            p={1}
            align={'center'}
            w={{ base:'100%', sm: '100%', lg: '90%' }}
            h={{ base: '50%', sm: '60%', lg: '70%' }}
          />

          <Stack>
            <Bottomimage  iddata={iddata}   />
          </Stack>
        
        </Flex>

        

        <Stack spacing={{ base: 2, md: 4 }}>
          <Box as={'header'}>
            <Heading
            textAlign={"start"}
              // lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: 'lg', sm: 'lg', lg: 'xl' }}>
              {iddata?.title}
            </Heading>

            
 
            <Text
              textAlign={"start"}
              mt={"10px"}
              color={"orange"}
              fontWeight={400}
              fontSize={'2xl'}>
              ₹ {iddata?.price}
            </Text>
            <Text
              textAlign={"start"}
              mt={"10px"}
              color={"black"}
              fontWeight={400}
              fontSize={'xl'}>
             Category:-  {iddata?.category}
            </Text>

            <Text
              textAlign={"start"}
              mt={"10px"}
              color={"black"}
              fontWeight={400}
              fontSize={'xl'}>
             Brand:-  {iddata?.brand}
            </Text>

          </Box>

          <Stack
            spacing={{ base: 1, sm: 2 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack  display={"inline"}>
              <Text
                textAlign={"start"}
                color="black"
                fontSize={'xl'}
                fontWeight={'300'}>
                {iddata?.warranty} Month's Warranty 
              </Text>
             
            </VStack>

            <Button
            rounded={'none'}
            w={'30%'}
            // mt={8}
            size={'sm'}
            py={'7'}
            colorScheme='orange'
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            
            onClick={()=>handleCart(iddata)}
            
            >
            Add to cart
          </Button>
            <Box w={"100%"}>
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