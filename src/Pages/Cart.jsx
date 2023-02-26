import { Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartCard } from '../Components/CartCard';

const Cart = () => {
  // const state= useSelector(state => state.cartReducer);
  // const {data} = state.state;
  // const dispatch = useDispatch();
// console.log(data)
  return (
    <div>
      {/* {data.length ? <CartCard /> : <Text as="b" fontSize={40} color="red">No Items in Cart</Text>} */}
      
    </div>
  );
}

export default Cart;
