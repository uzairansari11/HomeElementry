import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { updateCartApi } from "../../Redux/cart/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ totalAmountFromApi }) => {
  const navigate=useNavigate()
  const cart=[]
  const id=localStorage.getItem("id")
const dispatch=useDispatch()
  const toast = useToast();
const initialState={email:"",cardNumber:""
,expiryDate:"",cvv:"",userName:"",
shippingDetails:"",state:"",pinCode:""
}


const [formState,setFormState]=useState(initialState)

const {email,cardNumber
,expiryDate,cvv,userName,
shippingDetails,state,pinCode}=formState


const handleFromState=(e)=>{

const name=e.target.name
const value=e.target.value

setFormState({...formState,
[name]:value
})
}
const handlePayment=()=>{
  console.log(2)
  if(email===""||cardNumber===""
    ||expiryDate===""||cvv===""||userName===""||
    shippingDetails===""||state===""||pinCode===""){
      toast({
        title: "Please Fill All Details",
        status: "error",
        duration: 500,
        isClosable: true,
        position: "top",
      });
    }else{
      dispatch(updateCartApi(id,cart))
      toast({
        title: "Your Order Bas been  Placed Successfully",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      setTimeout(()=>{
        navigate("/")
      },5000)

    }

  


}

  return (
    <GridItem p={3} bg="white"
    boxShadow={'2xl'}
    >
    

      <VStack mt="10px" spacing={2}>
        <FormControl>
          <FormLabel>Email address</FormLabel>

          <Input type="email"  rounded={'lg'}   name="email" value={email} 

onChange={handleFromState}

          />
        </FormControl>
        <FormControl>
          <FormLabel>Card Information</FormLabel>
          <Flex position="relative">
            <Input
              type="number"
              placeholder="1234 1234 1234 1234"
              borderColor="gray"
              rounded={'lg'} 
              borderBottom="none"
              name="cardNumber"
              value={cardNumber}
              onChange={handleFromState}
            />
            <HStack position="absolute" right="3" top="1" spacing={2}>
              <RiVisaFill fontSize="34px" />
              <FaCcMastercard fontSize="34px" />
              <SiAmericanexpress fontSize="30px" />
            </HStack>
          </Flex>

          <Flex>
            <Input
              type="number"
              borderColor="gray"
              rounded={'lg'} 
              placeholder="MM / YY"
              name="expiryDate"
              onChange={handleFromState}
              value={expiryDate}
            />
            <Input
              type="number"
              borderColor="gray"
              rounded={'lg'} 
              placeholder="CVV"
              name="cvv"
              onChange={handleFromState}
              value={cvv}
            />
          </Flex>
        </FormControl>
        <FormControl>
          <FormLabel>Name on card</FormLabel>
          <Input type="text" borderColor="gray" rounded={'lg'}
          name="userName"
          value={userName}
          onChange={handleFromState}
           />
        </FormControl>
        <FormControl>
          <FormLabel>Shipping Details</FormLabel>
          <Flex position="relative">
            <Input
              type="text"
              placeholder="House no & Street"
              borderColor="gray"
              rounded={'lg'} 
              borderBottom="none"
              name="shippingDetails"
              value={shippingDetails}
              onChange={handleFromState}

            />
          </Flex>

          <Flex>
            <Input
              type="text"
              borderColor="gray"
              rounded={'lg'} 
              placeholder="State"
              name="state"
              value={state}
              onChange={handleFromState}
            />
            <Input
              type="number"
              borderColor="gray"
              rounded={'lg'} 
              placeholder="Pin code"
              name="pinCode"
              value={pinCode}
              onChange={handleFromState}
            />
          </Flex>
        </FormControl>
        <Button
   
          colorScheme="telegram"
          size="lg"
          rounded="md"
          w="50%"
          color="#FAF9F6"
          onClick={handlePayment}
        >
          Pay {(totalAmountFromApi)}
        </Button>
      </VStack>
    </GridItem>
  );
};

export default CheckoutForm;
