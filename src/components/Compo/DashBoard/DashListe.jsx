import { Box,  Center,  Grid, GridItem } from '@chakra-ui/react'
import NavDash from "../DashBoard/Elements/Nav"
import "../../styles/DashBoard/Dash.css"
import DashNftListing from './Elements/DashNftListing'

const Dashliste = () => {
  
return (<>

  <div id="dash-list" >

<Grid
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}

 mt="50px"
> 

 

  <GridItem rowSpan={1} colSpan={1} >
  <Center>
  <Box maxW='md' mt="250px" ml={["0px", "20px", "150px"]}  > 

  <NavDash src="https://assets5.lottiefiles.com/temp/lf20_ujod0D.json" />
  </Box>
  </Center>

  </GridItem>

  <GridItem colSpan={4} >
  <Box  color='white' ml={['0px', '70px', '100px']} mt="35px">
  <Center>
  <DashNftListing/>
  </Center>

  
  </Box>

  </GridItem>


</Grid>




</div>


</>
)
}

export default Dashliste;