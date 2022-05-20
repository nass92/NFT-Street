import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import CreateNft from '../CreateNft';
import NavDash from "../DashBoard/Elements/Nav"
import "../../styles/DashBoard/Dash.css"

const DashCreate = () => {
  
return (<>



<Grid
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}

 mt="50px"
> 

 

  <GridItem rowSpan={1} colSpan={1} >
  <Center>
  <Box maxW='md' mt="250px" ml={["0px", "20px", "150px"]}  > 

  <NavDash src="https://assets2.lottiefiles.com/packages/lf20_tahec4pc.json" />
  </Box>
  </Center>

  </GridItem>

  <GridItem colSpan={4} >
  <Box  color='white' ml={['0px', '70px', '100px']} mt="35px">
  <Center>
  <CreateNft/>
  </Center>

  
  </Box>

  </GridItem>


</Grid>







</>
)
}

export default DashCreate;