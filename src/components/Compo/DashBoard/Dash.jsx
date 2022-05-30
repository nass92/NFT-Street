import { Grid, GridItem } from '@chakra-ui/react'
import DashNft from './Elements/DashNft';
import InfoWallet from './Elements/InfoWallet';
import NavDash from './Elements/Nav';
import CoinMarket from './Elements/pricemarket/Coin';
import "../../styles/DashBoard/Dash.css"

const Dash = () => {
  
return (
<Grid 
  templateColumns='repeat(6, 1fr)'
>
  <div className='navDash'>
    <GridItem colSpan={1} mt="150px" rowSpan={1}bg='transparent'><NavDash/></GridItem>
  </div>

  <GridItem colSpan={[5,3,3]} bg='transparent' mt="150px"  ml={["60px", "25px", "50px","50px","100px","100px"]}  >
    <DashNft />
  </GridItem>

  <GridItem  colSpan={[5,3,3]} bg='transparent' mt="150px" ml={["60px", "25px",  "50px","50px","0px","0px"]} > 
   <InfoWallet/>
  </GridItem>

  <GridItem colSpan={[5,4,5]} bg='transparent' mt={["10px", "20px", "50px"]} ml={["80px", "150px",  "250px","450px","550px","550px"]} >
   <CoinMarket/> 
  </GridItem>
</Grid>
)
}

export default Dash;

