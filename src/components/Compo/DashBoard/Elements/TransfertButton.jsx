import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from "react"
import Send from './ERC-Functions/Transfer'

const TransfertButton = ({nft}) => {
  const [value, setValue] = useState(2)
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
  <>
    <Button olor="dark"  onClick={onOpen}>Send It </Button>

    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='white' mt="20px">
        <ModalHeader as="u" >Transfert Nft: {nft.title} </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mt="30px">
          {value === 2 && <Send nft={nft} value={value} setValue={setValue}/>}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
)
} 
export default TransfertButton