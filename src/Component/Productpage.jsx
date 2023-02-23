import React from 'react'
import ProductBox from './ProductBox'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_product_api } from '../Redux/action';

function Productpage() {
    const dispatch=useDispatch()
    const product=useSelector((state)=> state.productreducer.product)
    console.log(product);

    useEffect(() => {
        // console.log("helo");
        dispatch(get_product_api())
    }, []);



  return (

    <>

    {product?.map((el)=>{
    
       <ProductBox  key={el.id}  el={el}/>

    
    })}
    
    </>
  )
}

export default Productpage