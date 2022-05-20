import React from "react";
import "../styles/Component/Header.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Box, Center, Grid, GridItem, Link, SimpleGrid  } from "@chakra-ui/react";
import TutoModal from "./Elementes/FirstCo";

const Header= () => {

  return (
  <>
    <Center>
<Grid templateColumns='repeat(3)' gap={4} mt={["0px","20px","100px"]}  >

  <GridItem colSpan={2} mt="100px"  >
  
 

      <h1 id="header-text-first"> Create and Manage Your NFTs</h1>
      <Box id="cont"  >
      <h5 id="header-subtext">Create, Buy, Send, Sell...</h5>
     
        <SimpleGrid columns={[1,1,2,2,2]}>

      <div id="hero-buttons" >
      <TutoModal/>
                
    
        <Link href='https://rinkebyfaucet.com/'isExternal>
        <button id="create" >Claim Eth Faucet</button>
                  </Link>
      </div>
      
      </SimpleGrid>
     
    </Box>

    
    
  
  </GridItem>
  
  <GridItem colStart={[2,3]} colEnd={[2,3]}   >

<Center>
  <Player
  autoplay
  loop
  src="https://assets1.lottiefiles.com/packages/lf20_k86wxpgr.json"
  style={{ height: 'auto', width: 'auto',marginTop:"50px", marginRight:"100px" }}
>
  <Controls visible={false}  />
</Player>

</Center>
  </GridItem>
</Grid>
</Center>
</>
  );
};

export default Header;


