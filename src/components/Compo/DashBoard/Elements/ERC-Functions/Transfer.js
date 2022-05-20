import { Text, Box, Input, Button, Spacer, Center, FormLabel } from "@chakra-ui/react"
import { useToken } from  "../../../contexts/TokenContext";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react"
import {DappContext } from "../../../../../Dapp"
import { ethers } from "ethers";
import AlertPop from "./AlertPop";
import { CircularProgress } from "@chakra-ui/react"
import { Web3Context } from "web3-hooks";

const Send = ({nft, value, setValue}) => {
  const [web3State] = useContext(Web3Context);
  const { token } = useToken()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const {Create} = useContext(DappContext)

   useEffect(() => {
    // si simpleStorage est pas null alors
    if (Create) {
      
      const cb = (from, to, amount) => {

        if(from.toLowerCase() === web3State.account.toLowerCase()){
          toast({
            title: 'Transfer',
            description: `Your transaction of ${ethers.utils.formatEther(amount)} ${token.symbol} has been well executed to ${to}`,
            status: 'info',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })
        }
      }
      // ecouter sur l'event DataSet
      Create.on('Transfer', cb)
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
      Create.off('Transfer', cb)
      }
    }
  }, [Create, toast, token, web3State.account])


  const handleSubmitButton = async (data) => {
    try {
      setLoading(true)
      const tx = await Create.transferFrom(web3State.account, data.transfer, nft.id)
      const network = web3State.networkName.toLowerCase()
      const link = `https://${network}.etherscan.io/tx/${tx.hash}`
      toast({
        title: 'Confirmed transaction',
        render: () => (
            <Box color="white" p={3} bg="green.500" rounded={20}>
              <p style={{fontWeight: "bold", fontSize: "20px"}}>Transaction sent successfully !</p><br />You can view your pending transaction at hash :<br /><a target="blank" href={link}>{tx.hash}</a>
            </Box>),
        duration: 9000,
        isClosable: true,
      })
      await tx.wait()
    } catch (e) {
      console.error(e);
        } finally {
      setLoading(false)
    }
  }

  return (
    <>
   
      <Text border="1px solid darkblue" align="center" fontSize="2xl" mb="10">Verify The addresse is correct before transfert</Text>
  
        <form onSubmit={handleSubmit(handleSubmitButton)} m={2} >
          <FormLabel as="u"  fontSize="20" fontWeight="bold" fontStyle="italic" mt="-4" mb="4">To address :</FormLabel>
          <Input placeholder="Receiver" mb="5" isRequired
          {...register("transfer", {
            minLength: { value: 42, message: "Please enter a valid address" },
            maxLength: { value: 42, message: "Please enter a valid address" },
          })}
          />
          {errors.transfer && <AlertPop title={errors.transfer.message} />}
        <Center mb="3.7rem">
         
          <Button type="submit" bg="black" color="white" size="lg" variant="solid" m={2} >{loading ? (<><CircularProgress fontSize="15px" isIndeterminate size="30px" color="green.300" /><Spacer /><p>Sending...</p></>) : "Send"}</Button>
         
        </Center>
        </form>
</>
  )
}

export default Send;
