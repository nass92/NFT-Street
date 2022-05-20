import React from 'react'
import { Box, Button,SimpleGrid, Slide, useDisclosure } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import '../../../styles/Component/NavBar.css'
import { Controls, Player } from '@lottiefiles/react-lottie-player';

const NavDash2 = () => {
    //https://assets5.lottiefiles.com/packages/lf20_ckoeqyjs.json
    const { isOpen, onToggle, onClose } = useDisclosure()
return (
  // eslint-disable-next-line
<><a bg="dark" onClick={onToggle}>

<Player
    id="anime"
  autoplay
  loop
  src="https://assets2.lottiefiles.com/packages/lf20_tahec4pc.json"
  style={{ height: 'auto', width: 'auto' }}
  
>
  <Controls visible={false}  />
</Player>

</a>
<Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
  <Box id='nav-dash'
    p='40px'
    color='#dbf900'
    mt='4'
    bg='#65670c80'
    rounded='md'
    shadow='md'
    onClose={onClose}
  >
  <SimpleGrid column={5}>

   



       <Link to='/dashboard' id='logo1'>Dashboard</Link>
     <Link to='/create' id='logo1'>Create Your Own Nft</Link>
  <Link to='/' id='logo1'>List On MarketPlace</Link>
  <Link to='/marketplace' id='logo1'>transfert Your Nft</Link>
 
 
  <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
  </SimpleGrid>
  

  </Box>
</Slide>
        

          </>
)
} 
export default NavDash2;