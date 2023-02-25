import axios from "axios"


export const registerUser=  async(userDetails) =>{

try {
 const res=await axios.post(`http://localhost:8080/users`,userDetails) 
 return res.data

} catch (error) {
    return error
}


}


export const getUserDataFromApi=async()=>{
    try {
        const res=await axios.get(`http://localhost:8080/users`)
        return res.data
    } catch (error) {
        return error
    }
}


