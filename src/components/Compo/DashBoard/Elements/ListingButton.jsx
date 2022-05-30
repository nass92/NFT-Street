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
import Liste from './ERC-Functions/Liste'

const ListingButton = ({nft}) => {

  const [value, setValue] = useState(2)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
<>
  <Button color="dark"  onClick={onOpen}>Liste It </Button>

  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg='white' mt="20px">
      <ModalHeader as="u" >Liste Your Nft on the marketPlace: {nft.title} </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Box mt="30px">
        {value === 2 && <Liste nft={nft} value={value} setValue={setValue}/>}
        </Box>
      </ModalBody>
    </ModalContent>
  </Modal>
</>
)
} 
export default ListingButton