import { Center, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { Web3Context } from "web3-hooks";
import { DappContext } from '../../Dapp'
import Buy from "./Elementes/BuyButton";
import DescriptionModal from "./Elementes/DescriptionNft";
import NFTCard from "./Elementes/NftCard";
import '../../components/styles/Pages/MarketPlace.css';

const Mkt = () => {
  
  let [mk, setMk] = useState([])
  const {Create} = useContext(DappContext)
  const [web3State] = useContext(Web3Context);
  const [search, setSearch] = useState('')
  const handleChange = e => { setSearch(e.target.value) }
  const market= mk.filter(nft =>  nft.author.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {    
    const getNFT = async () => {
      const mkp = []
      const totalSelling= await Create.totalSupply()

        for(let i = 0; i <= totalSelling.toString(); i++ ) {
            const nft =await Create.getNMById(i)
            const sell = await Create.isForSell(i)
            const price = await Create.getPrice(i)
            console.log('ee',sell)
            if(sell === true){
              mkp.push({
                title: nft.title,
                author: nft.author,
                description: nft.description,
                types: nft.types,
                uri: nft.uri,
                forSell: nft.forSell,
                id: i,
                price: price,
              })
             }
         }         
      setMk(mkp)
        }
    try {
      if (web3State.chainId === 4 && Create !== undefined) {
        getNFT()
      }
    } catch (e) {
      console.log(e)
    }
  }, [Create, web3State.account, web3State.chainId])

  return (
  <>
    <SimpleGrid columns={[1,4,4]}>
      <GridItem colSpan={[1,2, 2]}mt={["50px","0px", "50px"]}>
      <div className=" coin-search" >
        <Text  color="gray.400">Search a Nft By Artist Nft</Text>
        <form>
          <input type="text" placeholder=" Type Artist Name" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      </GridItem>
    </SimpleGrid>

    <SimpleGrid  columns={[1, 1, 2, 3,4,5]} mt={["25px", "40px", "80px"]} spacingX='40px' spacingY='30px'>
    {market.map((el,index) => {
     return  <NFTCard  key={index} nft={el} button={el.forSell ? <Buy nft={el} /> : <DescriptionModal nft={el}/>} ></NFTCard> })}
    </SimpleGrid>
  </>
  );
};

export default Mkt;
