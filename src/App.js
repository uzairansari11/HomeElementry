
import { Box } from '@chakra-ui/react';
import './App.css';
import { AllRoute } from './Components/AllRoutes';
import Footer from './Components/Footer';
import  Navbar  from "./Components/Navbar";


function App() {
  return (
    <Box className="App"     marginTop= "120px" z-zIndex={'-5'}>

     <Navbar />
     <AllRoute />
      <Box h={"100vh"}></Box>
     <Footer />

    </Box>
  );
}

export default App;
