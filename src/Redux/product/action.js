import * as types from "./action.type";
import axios from "axios";

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

export const get_product_api = () => async (dispatch) => {
  dispatch(loading());
  try {
    let response = await axios.get("http://localhost:8080/lighting");
    dispatch(get_product(response.data));
  } catch {
    dispatch(error());
  }
};
