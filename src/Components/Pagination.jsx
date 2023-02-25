
import { Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// import { Params } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { pagination_api_call } from '../Redux/product/action';
// import {USESearch}

function Pagination({product}) {
    const dispatch=useDispatch()
    const location=useLocation()
    const [searchParams,setsearchParams]=useState()
    const [currentpage, setcurrentpage] = useState(1);


    

    const handlepage=(e)=>{
        const params={_page:e.target.value}
   
        dispatch(pagination_api_call(params._page))
        setsearchParams(params)
    }

  return (
    <>

    <Button colorScheme={"orange"}>Prev</Button>
        {product?.slice(0,10).map((element,index)=>
        <Button onClick={handlepage}  value={index+1}>{index+1}</Button>
        )}
    <Button colorScheme='orange'>Nex</Button>
    
    
    </>
  )
}

export default Pagination