import { Center, Grid, GridItem } from '@chakra-ui/react'
import NavDash from "../DashBoard/Elements/Nav"
import "../../styles/DashBoard/Dash.css"
import DashNftListing from './Elements/DashNftListing'

const Dashliste = () => {
  
return(<>
  <Grid 
    templateRows='repeat(1, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={4}
  > 
    <div className='navDash'>
      <GridItem colSpan={1} mt={["450px",'400px','350px']} bg='transparent'> 
      <NavDash/>
      </GridItem>
    </div>
    
    <GridItem colSpan={4} mt={["150px","100px","75px"]} ml={["50px","100px","100px"]}>
      <Center>
        <DashNftListing/>
      </Center>
    </GridItem>

  </Grid>
  </>
)
}

export default Dashliste;