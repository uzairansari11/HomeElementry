import * as types from "./action.type";

const initialState = {
  cartItem: [],
  order: [],
  wishList: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_CART_DATA:
      return { ...state, cartItem: payload };

    case types.GET_CART_DATA:
      return { ...state, cartItem: payload };

    default:
      return state;
  }
};

export { reducer };
