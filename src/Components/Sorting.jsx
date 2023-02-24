import { Box, Heading, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'
import { sort_product_by_value } from '../Redux/product/api'
import { useDispatch } from 'react-redux'
import { get_product_api, query_product_api } from '../Redux/product/action'

function Sorting(sort) {
    // console.log(sort);
    const dispatch=useDispatch()

    const handleradios=(e)=>{
        dispatch(get_product_api(e.target.value))
    }

    const handlebrand=(e)=>{
        // console.log(e.target.value);
    dispatch(query_product_api(e.target.value))
    }


  return (
    <Stack direction={["column"]} >
        <Box border={"1px solid grey"} w={"100%"}>
            <Heading color={"orange"}>Sort Price</Heading>
            <RadioGroup defaultValue='2'>
                <Stack direction={["column"]}>
                <Radio colorScheme='green' value='desc' onChange={handleradios}>
                        High to low
                </Radio>
                <Radio colorScheme='orange' value='asc' onChange={handleradios}> 
                        low to high
                </Radio>

                </Stack>

            </RadioGroup>
        </Box>



        <Box border={"1px solid black"} >
            
            <Heading>Brand</Heading>
            <RadioGroup defaultValue='3' >
                <Stack direction={["column"]}>
                <Radio colorScheme='green' value='Foziq' onChange={handlebrand}>
                        Foziq
                </Radio>
                <Radio colorScheme='green' value='Mansaa'onChange={handlebrand} > 
                        Mansaa
                </Radio>
                <Radio colorScheme='green' value='Xergy' onChange={handlebrand}> 
                        Xergy
                </Radio>

                </Stack>

            </RadioGroup>

        
        </Box>
    

    </Stack>
  )
}

export default Sorting