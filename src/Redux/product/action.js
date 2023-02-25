import * as types from "./action.type";
import axios from "axios";
import { get_product_data_api, pagination_api, sort_product_by_value } from "./api";

export const get_product = (payload) => {
  return {
    type: types.GET_PRODUCT,
    payload,
  };
};

export const loading = () => {
  return {
    type: types.LOADING_PRODUCT,
  };
};

export const error = () => {
  return {
    type: types.ERROR_PRODUCT,
  };
};



export const get_product_api = (value) => (dispatch) => {
  console.log(value)
  dispatch(loading());
  try {
      get_product_data_api(value).then((res)=>{
        dispatch(get_product(res))
      })
    }
   catch {
    dispatch(error());
  }
};

export const query_product_api=(value)=>(dispatch)=>{
  dispatch(loading())
  try{
    sort_product_by_value(value).then((res)=>{
      dispatch(get_product(res))
    })
  }
  catch{
    dispatch(error())
  }
}

export const pagination_api_call=(value)=>async(dispatch)=>{
  dispatch(loading())
  try{
    pagination_api(value).then((res)=>{
      console.log(res);
      dispatch(get_product(res))
    })
  }
  catch{
    dispatch(error())
  }
}


// export const getProducts = (filterValue) => async (dispatch) => {

//   dispatch(productRequest())
//   try {
//       const data = await getProductApi(filterValue)
//       if (data) {
//           dispatch(getProductSuccess(data))
//       }
//   } catch (error) {
//       dispatch(productError())

//   }
// }
