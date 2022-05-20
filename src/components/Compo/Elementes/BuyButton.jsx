
import React from 'react'
import { Button, Box, CloseButton} from "@chakra-ui/react"
import {useToast, useDisclosure} from "@chakra-ui/react"
import { DappContext } from "../../../Dapp"
import { useState, useContext } from "react"
import { Web3Context } from "web3-hooks";

const Buy = ({nft}) => {

  const {Market, Create} = useContext(DappContext)
  const [web3State] = useContext(Web3Context); 
  const toast = useToast()
  const [, setLoading] = useState(false)
  const { isOpen,  onClose } = useDisclosure()

  
  const handleBuyButton = async () => {
    try {
      setLoading(true)
      const price = await Create.getPrice(nft.id)
      console.log(price)
      const tx = await Market.buyNFT(nft.id, { value: price})
      const network = web3State.networkName.toLowerCase()
      const link = `https://${network}.etherscan.io/tx/${tx.hash}`
     
      toast({
        title: 'Transaction sent successfully !',
         render: () => (
            <Box color="white" p={3} bg="green.500" rounded={20}  isOpen={isOpen} onClose={onClose}>
              <CloseButton onClick={onClose} />
              <p style={{fontWeight: "bold", fontSize: "20px"}}>Transaction sent successfully !</p>
              <br />You can view your pending transaction at hash :
              <br /><a target="blank" style={{color: "orange"}} href={link}>{tx.hash}</a>
            </Box>),
        position: 'bottom',
        duration: 9000,
        isClosable: true,
      })
      
      await tx.wait()
     }catch (e) {
       toast({
        title: 'Error',
        description: e.error ? e.error.message : e.message,
        status: 'error',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

 

  return (

      <Button color="dark"  onClick={handleBuyButton}  >Buy Now</Button>
          
       
  )
}

export default Buy