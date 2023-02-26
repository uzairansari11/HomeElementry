import axios from "axios";
import { addCartData, deleteCartData, getCartData } from "./action";

export const getCartRequest = (id) => (dispatch) => {
axios.get(`http://localhost:8080/users/${id}`).then((res) => {
    dispatch(getCartData(res.data.cartItems));
    console.log(res.data.cartItems);
  });
};

export const addCartRequest = (id, product) => async (dispatch) => {
  const res = await axios.patch(`http://localhost:8080/users/${id}`, {
    cartItems: product,
  });

  dispatch(addCartData(res.data.cartItems));
};

export const deleteCartApi = (id, newCart) => async (dispatch) => {
  try {
    let res = await axios.patch(`http://localhost:8080/users/${id}`, {
      cartItems: newCart,
    });
    let data = await res.data.cartItems;
    dispatch(deleteCartData(data));
  } catch (e) {
    console.log(e);
  }
};


export const updateCartApi =  (id,newCart)=>async(dispatch) => {
	try {
		let res = await axios.patch(`http://localhost:8080/users/${id}`, {
			cartItems: newCart,
		  });
		let data = await res.data.cartItems;
	dispatch(addCartData(data))
	} catch (e) {
		console.log(e);
	}
}