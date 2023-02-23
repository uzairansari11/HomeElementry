import * as types from "./action.type"

const initial={
    isLoading:false,
    isError:false,
    product:[]
}


export const productreducer=(state=initial,{type,payload})=>{
    console.log(type);
    switch(type){

        case types.GET_PRODUCT: {
            return {
                ...state.product,product:payload
            }
        }


        case types.LOADING_PRODUCT: return {
            isLoading:true,isError:false
        }
        case types.ERROR_PRODUCT: return{
            isLoading:false,isError:true
        }

        default : return {
            state
        }
    }
}


