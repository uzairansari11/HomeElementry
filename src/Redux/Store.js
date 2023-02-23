
import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import { productreducer } from "./reducer"
const reducer=combineReducers({
    productreducer
})

const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

export const  store = legacy_createStore(reducer,enhancer(applyMiddleware(thunk)))