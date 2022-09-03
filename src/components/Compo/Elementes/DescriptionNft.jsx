import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'

  
  function DescriptionModal({nft}) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Description</Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
               Description by the author of this Nft
              </Text>
             {nft.description}
             
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='dark' mr={3} onClick={onClose}>
                Close
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}
  export default DescriptionModal;