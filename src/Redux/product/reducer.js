import * as types from "./action.type"

const initial={
    isLoading:false,
    isError:false,
    product:[]
}


export const reducer=(state=initial,{type,payload})=>{

    switch(type){
        case types.LOADING_PRODUCT: return {
          ...state,  isLoading:true
        }

        case types.GET_PRODUCT: {
            return {
                ...state.product,product:payload
            }
        }


      
        case types.ERROR_PRODUCT: return{
           ...state, isLoading:false,isError:true
        }

        default : return {
            state
        }
    }
}


