import { Grid, GridItem } from '@chakra-ui/react'
import DashNft from './Elements/DashNft';
import InfoWallet from './Elements/InfoWallet';
import NavDash from './Elements/Nav';
import CoinMarket from './Elements/pricemarket/Coin';
import "../../styles/DashBoard/Dash.css"

const Dash = ({nft}) => {
  
return (


<Grid mt="70px"
 mr="30px"
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(5, 1fr)'

 
>
 <GridItem rowSpan={1} colSpan={1} bg='#000000' mt="150px" ><NavDash src="https://assets3.lottiefiles.com/packages/lf20_ckoeqyjs.json"/> <NavDash  src="https://assets3.lottiefiles.com/packages/lf20_ckoeqyjs.json"/></GridItem>
  <GridItem colSpan={[4,4,2]} bg='#000000' mt="25px"  ml={["0px", "25px", "0px"]}  border="30px"boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"><DashNft /></GridItem>

 <GridItem className="navDisplay" rowSpan={1} colSpan={1} bg='#000000' mt="350px" ><NavDash src="https://assets3.lottiefiles.com/packages/lf20_ckoeqyjs.json"/> <NavDash  src="https://assets3.lottiefiles.com/packages/lf20_ckoeqyjs.json"/></GridItem>
  <GridItem  colSpan={[4,4,2]} bg='#000000' mt="25px" ml={["30px", "25px", "0px"]}   border="30px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" > <InfoWallet/></GridItem>
  <GridItem className="navDisplay" rowSpan={1} colSpan={1} bg='#000000' mt="-150px" ><NavDash src="https://assets3.lottiefiles.com/packages/lf20_ckoeqyjs.json"/> <NavDash  src="https://assets3.lottiefiles.com/packages/lf20_ckoeqyjs.json"/></GridItem>
<GridItem colSpan={[4,4,2]} bg='#000000' mt={["10px", "20px", "50px"]} ml={["0px", "0px", "200px"]} mr={["0px", "20px", "-280px"]}  ><CoinMarket/> </GridItem>
  <GridItem colSpan={[4,4,2]} bg='#000000' mt={["10px", "20px", "40px"]} ml={["60px", "40px", "350px"]}  >
<NavDash src="https://assets7.lottiefiles.com/temp/lf20_VqPWzx.json"/>
</GridItem>
</Grid>

)
}

export default Dash;

