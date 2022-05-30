
import { Heading, Center, Button, Grid, GridItem, Box, Container} from "@chakra-ui/react"
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

  return(
  <>
   <Container maxW='lg' maxh='md'  p={4} borderRadius="1rem" boxShadow="rgba(100, 100, 111, 0.2) 10px 17px 29px 7px" >

<Center color="#ffffff">
  <Heading fs="85px">Your Last Creation </Heading>
</Center>

    
      <Grid columns='repeat(2)'  >
        {galery.map((el, index) => {
          return (<>
          <GridItem colSpan={[2,2]}>
          <NFTCard  key={index} nft={el} ></NFTCard>
          </GridItem>

          <GridItem colSpan={[2,2,1]} mt={["-55px",null,'0px']} >
          <Link to="/listing" > <Center> <Button  fontWeight="bold" >DashListing  </Button></Center> </Link>
          </GridItem>

          <GridItem colSpan={[2,2,1]}  >
          <Link to="/transfert"> <Center><Button  >DashTransfer</Button></Center></Link>
          </GridItem>
          </>
        )
        })}
      </Grid>
    
    </Container>
  </>
)
  
} 

export default DashNft;