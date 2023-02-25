import axios from "axios";

const getCartRequest = async() =>{
    let res = await axios.get(`http://localhost:8080/cart`);
    let data = await res.data;
    return data;
};

const addCartRequest = async(id) => {
    let res = await axios.post(`http://localhost:8080/cart${id}`);
    
};

const deleteCartRequest = async(id) => {
    let res = await axios.delete(`http://localhost:8080/cart${id}`)
};


export {
    getCartRequest,
    addCartRequest,
    deleteCartRequest
}