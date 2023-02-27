


import * as types from "./action.type"
import { getProductApi, pagination_api } from "./api"


const productRequest = ()=> {
    return {
        type: types.Product_Request
    }
}

const productError = () => {
    return {
        type: types.Product_Error
    }
}

const getProductSuccess = (data) => {
    return {
        type: types.Get_Product_Success,
        payload: data
    }
}



export const getProducts = (filterValue) => async (dispatch) => {

    dispatch(productRequest())
    try {
        const data = await getProductApi(filterValue)
        if (data) {
            dispatch(getProductSuccess(data))
        }
    } catch (error) {
        dispatch(productError())

    }
}

// export const pagination_api_call = (filterValue) => async (dispatch) => {

//     dispatch(productRequest())
//     try {
//         const data = await pagination_api(filterValue)
//         if (data) {
//             dispatch(getProductSuccess(data))
//         }
//     } catch (error) {
//         dispatch(productError())

//     }
// }