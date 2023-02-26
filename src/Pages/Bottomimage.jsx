import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";

function Sideimage({iddata}) {

const [imageID, setImageId] = useState(0);


  return (
    <>
      <Box
          display= "flex"
          width= {{base:"100%" ,sm:"70%" , }}
          flexDirection= {{base:"row" ,sm:"row" ,md:"row" ,lg:"row"}}
        style={{
          margin: "10px",
        }}
      >
        {iddata?.images?.map((el, i) => (
          <Box
            marginTop="3px"
            border="3px solid white"
            _hover={{border: "3px solid green"}}
            borderBottom={i == imageID ? "3px solid red" : "3px solid white"}
            padding= "3px"
            cursor = "pointer"
            key={i + 1}
            onClick={()=>setImageId(i)}
        
            
          >
            <Image
              boxSize="100%"
              objectFit="cover"
              src={el}
              alt="Dan Abramov"
            />
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Sideimage;
