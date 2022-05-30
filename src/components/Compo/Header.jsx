import React from "react";
import "../styles/Component/Header.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Box, Button, Grid, GridItem, Link } from "@chakra-ui/react";
import TutoModal from "./Elementes/FirstCo";

const Header= () => {

  return (
  <>
    <Grid templateColumns='repeat(3)' gap={4} >
      <GridItem colSpan={1} mt="150px" ml={['30px','0px','0px']}   >
        <h1 id="header-text-first"> Create and Manage Your NFTs</h1>
        <Box id="cont"  >
        <h5 id="header-subtext">Create, Buy, Send, Sell...</h5>
        </Box>
      </GridItem>
      <GridItem colStart={[1,2]} colEnd={[2,3]} ml={['20px','0px','0px']}  >
        <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_k86wxpgr.json"
        style={{ height: 'auto', width: 'auto',marginTop:"50px", }}
        >
        <Controls visible={false} />
        </Player>
      </GridItem>

      <GridItem  colSpan={[2,3]} mt={['30px', '40px','0px']}>
        <TutoModal/>
        <Link href='https://rinkebyfaucet.com/'isExternal>
        <Button bg='transparent' borderRadius='30px'  border= '2px solid #ffffff'color='#ffffff;'> Claim Eth Faucet </Button>
        </Link>
      </GridItem>

    </Grid>
  </>
  );
};

export default Header;


