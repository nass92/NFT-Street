import React from 'react'
import { Container, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Login from "./Elementes/Loguin";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Center,
} from '@chakra-ui/react'
import '../styles/Component/NavBar.css'
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


    return (
        <div id="header">
        <Link to='/' id='acceuil'>NFT Street</Link>

        <div id="link-containers">

        <Link to='/' id='logo'>Home</Link>
        <Link to='/exposition' id='logo'>Exposition</Link>
        <Link to='/marketplace' id='logo'>MarketPlace</Link>
        <Link to='/dashboard' id='logo'>Dashboard</Link>

        <Login/>
        </div>



        <div id="list-containers2">
          <button id="list-containers2" ref={btnRef} colorScheme='white' onClick={onOpen}>
        <AiOutlineMenu/>
      </button>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background="#030003"  color="#a6ae74">
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
           <Center>
        <SimpleGrid column={1} >
            <Link to='/' id='logo1'>Home</Link>
            <Link to='/exposition' id='logo1'>Exposition</Link>
            <Link to='/marketplace' id='logo1'>MarketPlace</Link>
            <Link to='/dashboard' id='logo1'>Dashboard</Link>
        </SimpleGrid>
           </Center>
          </DrawerBody>

          <DrawerFooter id='footer-nav'>
            <Container >
               <Login />
           </Container>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    
        </div>
      </div>
    );
}

export default NavBar;