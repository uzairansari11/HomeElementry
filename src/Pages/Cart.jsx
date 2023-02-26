import { Grid, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartCard } from '../Components/CartCard';
import { getCartRequest } from '../Redux/cart/api';

const Cart = () => {

const allCartData=useSelector((store)=>store.cartReducer.cartItem)
  const dispatch = useDispatch();
const id=localStorage.getItem("id")


useEffect(()=>{
if(id){
  dispatch(getCartRequest(id))
}


},[])

console.log(allCartData)
  return (
    <div>
  
      
<Grid
  justifyContent={"space-around"}
      templateColumns={{ base: `repeat(1, 1fr)`,sm: `repeat(2,1fr)`,md: `repeat(2,1fr)`}}
      gap={2} >

      {allCartData.length?

      allCartData.map((cartItem)=>
      
      
      <CartCard   key={cartItem.id}  {...cartItem} />):
      
       <Text as="b" fontSize={40} color="red">No Items in Cart</Text>}

</Grid>
       
    </div>
  );
}

export default Cart;
