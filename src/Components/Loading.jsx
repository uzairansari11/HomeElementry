import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <>
    <Box m={"auto"}>

      <Spinner
        thickness="4px"
        speed="0.3s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />

    </Box>
    </>
  );
}

export default Loading;
