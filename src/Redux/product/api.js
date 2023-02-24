import axios from "axios"



export const get_product_data_api=async(value)=>{
    let response = await axios.get(`http://localhost:8080/lighting/?_sort=price&_order=${value}`)
    return response.data
   
}

export const sort_product_by_value=async(value)=>{
    let response=await axios.get(`http://localhost:8080/lighting/?q=${value}`)
    return response.data
}

export const pagination_api=async(value)=>{
    let response=await axios.get(`http://localhost:8080/lighting/?_page=${value}&_limit=5`)
    return response.data
}