
import {Container, SimpleGrid} from "@chakra-ui/react"
import { DappContext } from "../../../../Dapp"; 
import { useState, useEffect, useContext } from "react"
import { Web3Context } from "web3-hooks";
import NFTCard from "../../Elementes/NftCard"
import TransfertButton from "./TransfertButton";

const DashNftTransfert = () => {

  let [transfert, setTransfert] = useState([])
  const {Create} = useContext(DappContext)
  const [web3State] = useContext(Web3Context);

  useEffect(() => {
    if(web3State.chainId === 4) {
      const getWal = async () => {
        const transfertOWner = []
        const totalSupply = await Create.totalSupply()
        for(let i=0 ; i < totalSupply.toString(); i++ ) {
          let owner = await Create.ownerOf(i)
          const sell = await Create.isForSell(i)
          if (owner.toLowerCase() === web3State.account && sell === false) {
            const nft= await Create.getNMById(i)
            transfertOWner.push({
              title: nft.title,
              author: nft.author,
              description: nft.description,
              types: nft.types,
              uri: nft.uri,
              forSell: sell,
              id: i,
            })
      
          } 
          console.log('on est la frere', transfertOWner)
        }
        setTransfert(transfertOWner)
        
      }

      try {
        getWal()
      } catch (e) {
        console.log(e)
      }
    }
  }, [Create, web3State])
console.log("expo" , transfert)

  return(<>
  <div id="dash-nft-list">
    <SimpleGrid columns={[1, 1, 2,3,4]} mt="80px" gap={4} >
      {transfert.map((el, index) => {
        return(
          <Container  borderRadius="1.25rem"   border="30px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">  
            <NFTCard  key={index} nft={el} button={<TransfertButton nft={el}/>} ></NFTCard>
          </Container>      
        )
      })}
    </SimpleGrid>
    </div>
    </>
)
  
} 

export default DashNftTransfert;