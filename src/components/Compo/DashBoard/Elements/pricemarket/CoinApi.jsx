import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow,Image, SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'


const Coin = ({  image, symbol, price,  priceChange, marketcap }) => {

  return (<>


      
  <Stat>
  <SimpleGrid columns={3} spacing={1} mt='15px'>
  <Box  height='auto'mt= {['10px','10px','5px','5px','0px','0px']} >
    <StatLabel><Image maxW={['30px','30px','45px','45px','50px','50px']} src={image}/> </StatLabel>
    </Box>
    <Box  height='auto' mt= {['13px','15px','16px','16px','13px','13px']}  >
    <StatNumber fontSize={['13px','13px','15px','18px','20px','20px']}  >{price} $</StatNumber>
    </Box>
    <Box >
    <StatHelpText>
    {priceChange < 0 ? (
           <p> <StatArrow type='decrease' /> {priceChange.toFixed(2)}%</p>

          ) : ( <p> <StatArrow type='increase' />{priceChange.toFixed(2)}%</p>)}
   
    </StatHelpText>
    </Box>
    </SimpleGrid>
  </Stat>


</>)
}


export default Coin