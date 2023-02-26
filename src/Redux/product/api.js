import axios from "axios"



// export const get_product_data_api=async(value)=>{
//     // console.log(value)
//     let response = await axios.get(`http://localhost:8080/products`,value)
//     // console.log(response.data)
//     return response.data
   
// }



// export const sort_product_by_value=async(value)=>{
//     let response=await axios.get(`http://localhost:8080/products/?q=${value}`)
//     return response.data
// }

// export const pagination_api=async(value)=>{
//     let response=await axios.get(`http://localhost:8080/products/?_page=${value}&_limit=5`)
//     return response.data
// }

// export const singlepage_api=async(id)=>{
//     let response=await axios.get(`http://localhost:8080/products/${id}`)
    
//     return response.data


    
// }







export const getProductApi = async (filterValue) => {

    try {
        let response = await axios.get(`http://localhost:8080/products`, filterValue)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const getSingleProduct = async (id) => {

    try {
        let response = await axios.get(`http://localhost:8080/products/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
