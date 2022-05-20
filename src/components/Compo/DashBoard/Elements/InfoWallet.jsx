import React from "react"
import { DappContext } from "../../../../Dapp"; 
import { useState, useEffect, useContext } from "react"
import { Web3Context } from "web3-hooks";
import {  utils } from "ethers";
import {contractAddress} from '../../../../contracts/contract'
import {MarketPlaceAddress} from '../../../../contracts/MarketPlace'
import { Center, Heading, SimpleGrid, Button, Text, Spacer, Container, Link,  } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import '../../../styles/DashBoard/Dash.css'

const InfoWallet = () => {

    let [wallet, setWallet] = useState([])
    const {Create, Market }= useContext(DappContext)
    const [web3State] = useContext(Web3Context);

    useEffect(() =>{
        if(web3State.chainId === 4) {
            const getWallet = async () => {
                const balance = await Market.getEtherBalance()
                
              
                const wall= []
                wall.push({
                    balance: balance,
               
                })
                setWallet(wall)
            }
            try {
                getWallet();
              } catch (e) {
                console.log(e)
              }
          
        }
    }, [Create,Market, web3State])
  
    return(
<>
<Container mt="60px">
<Center mt="30px" mr="35px"color="#ffffff">
        <Heading as="u" fs="85px">Your Wallet </Heading>
      </Center>
     
      <SimpleGrid columns={1} spacing={2} mt="80px" mr="35px"  ml="12px" fontSize="1rem" color="#ffffff">

            {wallet.map((el) => {
                return (<>
                <Center mt='30px' mb='20px' >
                <Text  fontWeight="bold">Balance ETH</Text>
                <Spacer />
                <Text  >{utils.formatEther(el.balance.sub(el.balance.mod(1e14)))}</Text>
                </Center>
                
                <Center mt='30px' mb='20px'>
                <Text    fontWeight="bold">Number of Nft </Text>
                <Spacer />
                <Text  ></Text>
                </Center>

                <Center mt='30px' mb='20px'>
                <Text   fontWeight="bold">Your Metamask Address </Text>
                <Spacer />
                <Text  >{web3State.account.split("").splice(0, 6).join("") + "..." +
                    web3State.account.split("").splice(-4).join("")}</Text>
                </Center>

                <Center mt='30px' mb='20px'>
                <Text   fontWeight="bold">Network Connect: </Text>
                <Spacer />
                <Text  >{web3State.chainId === 4 ? (<p style={{ color: "green" }}> Rinkeby Test Net </p>):(<p style={{ color: "red" }}>Wrong Network/ Connect To Rinkeby</p>)}</Text>
                </Center>


                <Center mt='30px' mb='20px'>
                  <Text   fontWeight="bold">Token Contract Address:  </Text>

                  <Spacer />   
                    
                    <Link  color="darkblue" href='https://rinkeby.etherscan.io/address/0xd30726e6E38b82c13577e7bF537d44D6608f2eB9' ml={["20px","70px","150px" ]}mr="-30px"isExternal><Text >
                    { contractAddress.split("").splice(0, 6).join("") + "..." +
                contractAddress.split("").splice(-4).join("")} <ExternalLinkIcon mx='2px' /></Text>
                    </Link>

                </Center>


                <Center mt='30px' mb='20px' >
                  <Text   fontWeight="bold" >Market Contract Address:  </Text>

                  <Spacer />

                    <Link  color="darkblue" href='https://rinkeby.etherscan.io/address/0x550D3b85713A426F296F0b9F0a737d1b1a134011' ml={["20px","70px","150px" ]}mr="-30px"isExternal><Text >
                            {MarketPlaceAddress.split("").splice(0, 6).join("") + "..." +
                            MarketPlaceAddress.split("").splice(-4).join("")} <ExternalLinkIcon mx='2px' /></Text>
                    </Link>

                </Center>



                <Center mt='30px' mb='20px'>
                  <Text   fontWeight="bold" >Claim Some Faucet Ether :  </Text>

                 <Spacer />

                  <Link  color="darkblue" href='https://rinkebyfaucet.com/' ml={["20px","70px","150px" ]}mr="-30px"isExternal>
                    <Button bg="gray.900" >Faucet Ether</Button>
                  </Link>
                  
                </Center>

                  

                </>
            )})}

      </SimpleGrid>
      </Container>
    </>
  )
}
export default InfoWallet