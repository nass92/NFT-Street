import { Text, Box, Input, Button, Spacer, VStack, Center } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { FormLabel } from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react"
import { DappContext} from "../../Dapp"
import { CircularProgress } from "@chakra-ui/react"
import AlertPop from "../compo/AlertPop";

const TransfertFrom = ({id, value, setValue}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [web3State] = useContext(Web3Context);
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const {TXT} = useContext(DappContext)

  

  const handleSubmitButton = async (data) => {
    try {
      setLoading(true)
      const tx = await TXT.transferFrom(data.transferFrom, data.transferTo, id)
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
      if (e.error !== undefined) {
        toast({
          title: 'Error',
          description: `${e.error.message}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Error',
          description: `${e.message}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    } finally {
      setLoading(false)
    }
  }


  return (
    <VStack fontWeight="bold">
      <Text align="center" mb="1rem" fontSize="3xl">TransferFrom</Text>
        <form onSubmit={handleSubmit(handleSubmitButton)} variant="outline" w="75%" m={2} isRequired>
          <FormLabel>From</FormLabel>
          <Input mb={1} variant="outline" placeholder="Sender" isRequired {...register("transferFrom", {
                minLength: { value: 42, message: "Please enter a valid address" },
                maxLength: { value: 42, message: "Please enter a valid address" },
            })}/>
          <FormLabel>To</FormLabel>
          <Input mb={1} variant="outline" placeholder="Receiver" isRequired {...register("transferTo", {
                minLength: { value: 42, message: "Please enter a valid address" },
                maxLength: { value: 42, message: "Please enter a valid address" },
            })}/>
          {errors.transferTo && <AlertPop title={errors.transferTo.message} />}
          <Center mb="1.45rem">
            <Button onClick={() => setValue("transferFrom")} bg="gray.300" variant="solid" m={2} mb={3} isDisabled><ArrowLeftIcon /></Button>
            <Button type="submit" colorScheme="teal" variant="solid" size="lg" m={2} mb={3} disabled={loading}>{loading ? (<><CircularProgress fontSize="15px" isIndeterminate size="30px" color="green.300" /><Spacer /><p>Sending...</p></>) : "Transfer"}</Button>
            <Button onClick={() => setValue(value + 1)} bg="gray.300" variant="solid" m={2} mb={3}><ArrowRightIcon /></Button>
          </Center>
        </form>
    </VStack>
  );
};

export default TransfertFrom;
