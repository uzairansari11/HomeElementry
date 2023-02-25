import * as types from "./action.type";

const initialState = {
data:[],

}

const reducer = (state=initialState, action) => {
    const{ type, payload } = action;
  switch(type) {
    case types.ADD_CART_DATA:{
        return {...state, data:[...state.data, payload]}
    }
    case types.GET_CART_DATA: {
        return {...state, data: payload}
    }
    default:
        return {state}
  }
}

export {
    reducer
}