
// import { Button } from '@chakra-ui/react'
// import React from 'react'
// import { useState ,useEffect} from 'react';
// import { useDispatch } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { pagination_api_call } from '../Redux/product/action';


// function Pagination({product}) {
//     const dispatch=useDispatch()

//     const [query,seturlquery]=useSearchParams()
//     const page=query.get("_page")
//     const [pg,setpage]=useState(page || "1")


//     const handlepage=(e)=>{
//       setpage(e.target.value)
//       // const pageno={_page:e.target.value}
//     }
    
    
//     useEffect(() =>{
//       const copy=new URLSearchParams(query)
//       // copy.set("_page",pg)
//       seturlquery(copy)
//     }, [page])













//     // const location=useLocation()

//     // const [searchparams,setsearchparams]=useSearchParams()
 
//     // const [searchParams,setsearchParams]=useState()
//     // const [currentpage, setcurrentpage] = useState(1);


    

//     // const handlepage=(e)=>{
//     //     const params={_page:e.target.value}
   
//     //     dispatch(pagination_api_call(params._page))
//     //     setsearchParams(params)
//     // }

//   return (
//     <>

//     <Button colorScheme={"orange"}>Prev</Button>
//         {product?.slice(0,10).map((element,index)=>
//         <Button onClick={handlepage}  value={index+1}>{index+1}</Button>
//         )}
//     <Button colorScheme='orange'>Nex</Button>
    
    
//     </>
//   )
// }

// export default Pagination





// import { Button, Flex } from "@chakra-ui/react";
// import React from "react";

// export const Pagination = ({
//  productLength,
//  limit,
//  activePage,
//  handleACtivePage,
// }) => {
//  const totalPage = Math.ceil(productLength / limit);



//  return (
//   <Flex gap={6}>
//    {Array(totalPage)
//     .fill(0)
//     .map((item, index) => (
//       <Button
//         key={index}
//       colorScheme={activePage === index + 1 ? "green" : "red"}
//       onClick={() => handleACtivePage(index + 1)}
//      >
//       {index + 1}
//      </Button>
//     ))}
//   </Flex>
//  );
// };
