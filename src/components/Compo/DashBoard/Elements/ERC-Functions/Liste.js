

import { 
    Center,  
    Button, 
    Text, 
    Spacer, 
    FormLabel,
    Input,
    Box,
  VStack,
  CloseButton,
  CircularProgress} from "@chakra-ui/react";
  import { useToast, useDisclosure} from "@chakra-ui/react"
  import { useToken } from "../../../contexts/TokenContext";
  import { useContext, useState, useEffect } from "react";
  import { Web3Context } from "web3-hooks"
  import { useForm } from "react-hook-form";
  import { DappContext} from "../../../../../Dapp"
  import { ethers } from "ethers";
  import { MarketPlaceAddress } from "../../../../../contracts/MarketPlace";
  
  const  Liste = ( {nft }) => {
    const { isOpen, onClose } = useDisclosure()
    const [web3State] = useContext(Web3Context)
    const { token } = useToken()
    const [loading, setLoading] = useState(false)
    const { handleSubmit } = useForm();
    const toast = useToast()
    const {Create} = useContext(DappContext)
    const [value, setValue] = useState()
  
    const handleSubmitButton = async () => {
      try {
        setLoading(true)
        const tx = await Create.listNFT( nft.id, ethers.utils.parseEther(value))
        const apr = await Create.approve(MarketPlaceAddress, nft.id)
        const network = web3State.networkName.toLowerCase()
        const link = `https://${network}.etherscan.io/tx/${tx.hash}`
  
        toast({title: 'Confirmed transaction',
        status: "success",
        render: () => (
                <Box color="white" p={3} bg="grey.500" rounded={20} isOpen={isOpen} onClose={onClose}>
                   <CloseButton onClick={onClose} />
                    <p style={{fontWeight: "bold", fontSize: "20px"}}>Transaction sent successfully !</p><br />You can view your transaction pending at hash :<br /><a target="blank" href={link}>{tx.hash}</a>
                  </Box>),
              duration: 6000,
              isClosable: true,
        })
        await tx.wait()
        await apr.wait()
      } catch (e) {
        console.log(e)
         toast({
          title: 'Error',
          description: e.message,
          status: 'error',
          position: 'top-right',
          duration: 6000,
          isClosable: true,
        })
      } finally {
        setLoading(false)
      }
    }
  
    useEffect(() => {
      // si simpleStorage est pas null alors
      if (Create) {
        const cb = (owner, spender, value) => {
          if(spender === web3State.account.toLowerCase()){
             toast({
              title: 'New approval',
              description: `You are now allowed to spend ${ethers.utils.formatEther(value)} ${token.symbol} from ${owner}`,
              status: 'info',
              position: 'top-right',
              duration: 6000,
              isClosable: true,
            })
          } else if (owner.toLowerCase() === web3State.account.toLowerCase()) {
            toast({
              title: 'Approved',
              description: `You have allowed ${spender} to spend ${ethers.utils.formatEther(value)} ${token.symbol} from your wallet`,
              status: 'info',
              position: 'top-right',
              duration: 6000,
              isClosable: true,
            })
          }
        }
  
        // ecouter sur l'event DataSet
        Create.on('Approval', cb)
        return () => {
          // arreter d'ecouter lorsque le component sera unmount
        Create.off('Approval', cb)
        }
      }
    }, [Create, toast, token, web3State.account])
    return (
      
        <VStack fontWeight="bold">
        <Text align="center" fontSize="3xl" mb="6">Listing</Text>
          <form onSubmit={handleSubmit(handleSubmitButton)} m={2}>
            <FormLabel fontSize="20" fontWeight="bold" fontStyle="italic" mb="6">Price :</FormLabel>
            <Input onChange={(e) => setValue(e.target.value)} placeholder="Amount in ETH"   isRequired/>
           <Center mb="4.45rem">
                <Button type="submit" colorScheme="teal" variant="solid" size="lg" m={2} mb={3} >{loading ? (<><CircularProgress fontSize="15px" isIndeterminate size="30px" color="green.300" /><Spacer /><p>Sending...</p></>) : `${value ? "List for " + value + " ETH" : "List"}`}</Button>
              </Center>
           </form>
      </VStack>
  
    )
  }
  
  export default  Liste