import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
   
  } from '@chakra-ui/react'
import Tuto from "./Tuto"
import "../../styles/Component/Header.css";

const TutoModal = () => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior,] = React.useState('inside')
  
    const btnRef = React.useRef()
    return (
      <>
  <button id="explore"  onClick={onOpen}  >
          1st Connection
        </button>
  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent bg="gray.900">
            <ModalHeader as="u" color="white">Tutoriel For Beguiner : </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           <Tuto/>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default TutoModal