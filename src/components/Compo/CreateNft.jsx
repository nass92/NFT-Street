import React from "react";
import {Box,  FormControl, FormLabel, CloseButton, Button, Input, Textarea, Select, Container, Center} from "@chakra-ui/react"
import { useToast} from "@chakra-ui/react"
import { DappContext} from "../../Dapp"
import { useState, useContext } from "react"
import { Web3Context } from "web3-hooks";
import { useForm } from "react-hook-form"
import axios from "axios";
import "../styles/Pages/Create.css"

require('dotenv').config()

const CreateNft= () => {

  const [web3State] = useContext(Web3Context);
  const {Create } = useContext(DappContext)
  const toast = useToast()
  const {
    register,
    watch,
    handleSubmit,
  } = useForm();
  const [, setLoading] = useState(false)
  const pinOnIpfs = async (file) => {
    
  try {
    let formatData = new FormData();
    formatData.append("file", file);

    const hash = await axios.post(`https://api.pinata.cloud/pinning/pinFileToIPFS`, formatData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formatData._boundary}`,
          pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
          pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_KEY,
        },
      })
      .then((result) => result.data.IpfsHash);

    return hash
  } catch (e) {
    console.error(e.message)
  }
}


const handleSendNFT = async () => {

  try {
    setLoading(true)
    const hash = await pinOnIpfs(watch().file[0])
    const nft = {
      title: watch().title,
      author: watch().author,
      description: watch().description,
      types: watch().types,
      uri: `https://gateway.pinata.cloud/ipfs/${hash}`,
      timeStamp: new Date().toDateString(),
      forSell: false,
    }
    console.log(nft)
    const certify = await Create.certify(nft.title, nft.author, nft.description, nft.types, nft.uri, false)
    console.log('coucou')
    console.log(nft.uri)
    const network = web3State.networkName.toLowerCase()
    const link = `https://${network}.etherscan.io/tx/${certify.hash}`
    
     toast({
      title: 'Transaction sent successfully !',
       render: () => (
          <Box color="white" p={3} bg="green.500" rounded={20}>
            <CloseButton />
            <p style={{fontWeight: "bold", fontSize: "20px"}}>Transaction sent successfully !</p>
            <br />You can view your pending transaction at hash :
            <br /><a target="blank" style={{color: "orange"}} href={link}>{certify.hash}</a>
          </Box>),
      position: 'bottom',
      duration: 9000,
      isClosable: true,
    })
    await certify.wait()
  } catch (e) {
    console.log(e)
     toast({
      title: 'Error',
      description: e.message,
      status: 'error',
      position: 'top-right',
      duration: 9000,
      isClosable: true,
    })
  } finally {
    setLoading(false)
  }
}


  return(
  <>
    <Container className="cont-first" color="white" borderRadius="0.5rem" mt={["50px","80px","140px" ]}boxShadow='white-lg' width={["xs", 'md', "2xl" ] }>
      <form onSubmit={handleSubmit(handleSendNFT)} className="contact-form">  
        <FormControl isRequired mt="18px" mb="15px" >
          <FormLabel htmlFor='title'>Title Of The NFT : </FormLabel>
          <Input  id='title' placeholder='Title Nft '  {...register('title')}  />
        </FormControl>
        <FormControl isRequired mt="18px" mb="15px">
          <FormLabel htmlFor='Author'>Artiste Name : </FormLabel>
          <Input id='Author' placeholder='Artiste Name' {...register('author')} />
        </FormControl>
        <FormControl isRequired mt="22px" mb="15px">
          <FormLabel htmlFor='Description'>Description : </FormLabel>
          <Textarea placeholder='Here is a sample placeholder' {...register('description')} />
        </FormControl>
        <FormControl isRequired mt="18px" mb="15px">
          <FormLabel htmlFor='types'>Type : </FormLabel>
          <Select id="types" placeholder='Select a type' {...register('types')}>
          <option value='image'>Image</option>
          <option value='video'>Video</option>
          <option value='ar/vr'>AR/VR</option>
          </Select>
        </FormControl>
        <FormControl isRequired mt="18px" mb="15px">
          <FormLabel htmlFor='file'>Upload Your File : </FormLabel>
          <Input  type="file" id='file' placeholder='Upload Your File' accept='image/*, video/*, application/pdf,' {...register('file')}/>
        </FormControl>

        <Center mt="18px" mb="11px">
        <Button onClick={handleSendNFT}  className="create-button" mr={3}>Create</Button>
        </Center>
      </form>
    </Container>
  </>
);
};
export default CreateNft;