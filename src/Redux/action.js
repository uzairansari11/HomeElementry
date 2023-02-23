import * as types from "./action.type"
import axios from "axios"


const  get_product=(payload)=>{
    return {
        type:types.GET_PRODUCT,
        payload
    }
}

const loading=()=>{
    return {
        type:types.LOADING_PRODUCT
    }
}

const error=()=>{
    return {
        type:types.ERROR_PRODUCT
    }
}


export const get_product_api=()=>async(dispatch)=>{
    dispatch(loading())
    try{
     let response= await axios.get("http://localhost:8080/lighting").then((res)=>{
        // console.log(res.data);
        dispatch(get_product(res.data))
    })  
    }
    catch{
        dispatch(error())
    }
}




export default {loading,get_product,error}