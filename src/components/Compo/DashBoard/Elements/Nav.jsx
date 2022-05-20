
import React from 'react'
import { Box, Button,SimpleGrid, Slide, useDisclosure } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import '../../../styles/Component/NavBar.css'
import { Controls, Player } from '@lottiefiles/react-lottie-player';

const NavDash = ({src}) => {
    //https://assets5.lottiefiles.com/packages/lf20_ckoeqyjs.json
    const { isOpen, onToggle, onClose } = useDisclosure()
return (
// eslint-disable-next-line
<><a bg="dark" onClick={onToggle}>


<Player
    id="anime"
  autoplay
  loop
  src={src}
  style={{ height: 'auto', width: 'auto' }}
  
>
  <Controls visible={false}  />
</Player>
</a>
<Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
  <Box
    p='40px'
    color='#aac792'
    mt='4'
    bg='#06150aa6;'
    rounded='md'
    shadow='md'
    onClose={onClose}
  >
  <SimpleGrid column={5}>


       <Link to='/dashboard' id='nav-dash'>Dashboard</Link>
     <Link to='/create' id='nav-dash'>Create Your Own Nft</Link>
  <Link to='/listing' id='nav-dash'>List On MarketPlace</Link>
  <Link to='/transfert' id='nav-dash'>transfert Your Nft</Link>
 
 
  <Button variant='unstyled' mr="30px" onClick={onClose}>
              Close
            </Button>
  </SimpleGrid>
  

  </Box>
</Slide>
        

          </>
)
} 
export default NavDash;