import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as productreducer } from "./product/reducer";

import {reducer as cartReducer} from "./cart/reducer"


import {reducer as authReducer} from "./auth/reducer"
const rootReducer = combineReducers({
  productreducer,
  authReducer,
  cartReducer
  

});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  enhancer(applyMiddleware(thunk))
);
