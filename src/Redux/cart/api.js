import axios from "axios";
import { addCartData ,getCartData} from "./action";

export const getCartRequest = (id)=>(dispatch) =>{
  const data=axios.get(`http://localhost:8080/users/${id}`)
  .then((res)=>{
  dispatch(getCartData(res.data.cartItems))
  console.log(res.data.cartItems)}
  )


 
   
};

const getAllUserCartData=(id)=>{
axios.get(``)
}


export const addCartRequest =(id,product)=> async(dispatch) => {
const res= await axios.patch(`http://localhost:8080/users/${id}`,
 {
        cartItems:product
    } );


    dispatch(addCartData(res.data.cartItems))
};

export const deleteCartRequest = async(id) => {
    let res = await axios.delete(`http://localhost:8080/cart${id}`)
};


