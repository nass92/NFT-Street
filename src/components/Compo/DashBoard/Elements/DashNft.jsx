
import {Container, SimpleGrid, Heading, Center, Button, Spacer} from "@chakra-ui/react"
import { DappContext } from "../../../../Dapp"; 
import { useState, useEffect, useContext } from "react"
import { Web3Context } from "web3-hooks";
import NFTCard from "../../Elementes/NftCard"
import { Link } from "react-router-dom";

const DashNft = () => {

  let [galery, setGalery] = useState([])
  const {Create} = useContext(DappContext)
  const [web3State] = useContext(Web3Context);

  useEffect(() => {
    if(web3State.chainId === 4) {
      const getWal = async () => {
        const galeryOWned = []
        const totalSupply = await Create.totalSupply()
        let i = totalSupply - 1
        for( i ; i < totalSupply.toString(); i++ ) {
          let owner = await Create.ownerOf(i)
          const sell = await Create.isForSell(i)
          if (owner.toLowerCase() === web3State.account) {
            const nft= await Create.getNMById(i)
            galeryOWned.push({
              title: nft.title,
              author: nft.author,
              description: nft.description,
              types: nft.types,
              uri: nft.uri,
              forSell: sell,
              id: i,
            })
      
          } 
          console.log('on est la frere', galeryOWned)
        }
        setGalery(galeryOWned)
        
      }

      try {
        getWal()
      } catch (e) {
        console.log(e)
      }
    }
  }, [Create, web3State])
console.log("expo" , galery)

  return(<>
  
<Container mt="60px">
<Heading as="u"  color="#ffffff">Your Last Creation</Heading>

      <SimpleGrid columns={[1, 1, 1]} mt="80px" >
        {galery.map((el, index) => {
          return <NFTCard  key={index} nft={el} ></NFTCard>
        })}
      </SimpleGrid>
     

      <Center mt={['170px', '120px', '90px']}  >
      <Link to="/listing" >       <Button   fontWeight="bold" ml={['100px', '25px', '0px']}>DashListing  </Button> </Link>

                  <Spacer />      
         <Link to="/transfert"> <Button mr={['100px', '25px', '0px']} >DashTransfer</Button></Link>
               

                </Center>



      </Container>
 
    </>
)
  
} 

export default DashNft;