
import React from 'react'
import {Button,Center,Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerFooter,DrawerHeader,DrawerOverlay,Icon,SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import '../../../styles/Component/NavBar.css'
import {BsChevronDoubleRight} from 'react-icons/bs'

const NavDash = () => {
    //https://assets5.lottiefiles.com/packages/lf20_ckoeqyjs.json
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
return (
// eslint-disable-next-line
<>
  <Icon bg='transparent' color='white' w={8} h={8} ml="-7px" ref={btnRef} onClick={onOpen}>
    <BsChevronDoubleRight/>
  </Icon>
  <Drawer
    isOpen={isOpen}
    placement='left'
    onClose={onClose}
    finalFocusRef={btnRef}
  >
  <DrawerOverlay />
  <DrawerContent background="#030003"  color="#a6ae74">
    <DrawerCloseButton />
    <DrawerHeader>DahBoard Navigation</DrawerHeader>
    <DrawerBody>
      <Center>
      <SimpleGrid column={1} >
        <Link to='/dashboard' id='nav-dash'>Dashboard</Link>
        <Link to='/create' id='nav-dash'>Create Your Own Nft</Link>
        <Link to='/listing' id='nav-dash'>List On MarketPlace</Link>
        <Link to='/transfert' id='nav-dash'>transfert Your Nft</Link>
      </SimpleGrid>
      </Center>
    </DrawerBody>

    <DrawerFooter id='footer-nav'>
      <Button variant='outline' mr={3} onClick={onClose}>
        Close
      </Button>
    </DrawerFooter>

  </DrawerContent>
  </Drawer>
</>
)
} 
export default NavDash;