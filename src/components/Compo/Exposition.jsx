import  { useState, useContext, useEffect } from "react";
import { Web3Context } from "web3-hooks";
import { DappContext } from '../../Dapp'
import NFTCard from "./Elementes/NftCard";
import {GridItem, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import Buy from "./Elementes/BuyButton";
import DescriptionModal from "./Elementes/DescriptionNft";
import '../../components/styles/Pages/Exposition.css';

const Expo = () => {
  
  let [expo, setExpo] = useState([])
  let [expo2, setExpo2] = useState([])

  const {Create} = useContext(DappContext)
  const [web3State] = useContext(Web3Context);
  const [search, setSearch] = useState('')


  useEffect(() => {    
    const getNFT = async () => {
      const image =[]
      const video =[]
 
      const totalSupply = await Create.totalSupply()

        for(let i = 0; i < totalSupply.toString(); i++ ) {
            const nft = await Create.getNMById(i)
            const price = await Create.getPrice(i)
           if(nft.types==='image'){image.push({
            title: nft.title,
            author: nft.author,
            description: nft.description,
            types: nft.types,
            uri: nft.uri,
            forSell: nft.forSell,
            price: price,
            id: i,
          })} else if (nft.types==='video'){
              video.push({
                title: nft.title,
                author: nft.author,
                description: nft.description,
                types: nft.types,
                uri: nft.uri,
                forSell: nft.forSell,
                price: price,
                id: i,
              })

            }
            console.log(nft)
            console.log(nft.uri)
      }
      setExpo(image);
      setExpo2(video)
      
     
    }

    try {
      if (web3State.chainId === 4 && Create !== undefined) {
        getNFT()
      }
    } catch (e) {
      console.log(e)
    }

  }, [Create, web3State.account, web3State.chainId])
console.log("expo" , expo)

const handleChange = e => {
  setSearch(e.target.value)
}
  const images = expo.filter(nft =>
    nft.author.toLowerCase().includes(search.toLowerCase()))

    const videos = expo2.filter(nft =>
      nft.author.toLowerCase().includes(search.toLowerCase()))
   
    
  return ( 
  <>
    <SimpleGrid columns={[1,4,4]}>
    <GridItem colSpan={[1,2, 2]} mt={["50px","0px", "150px"]}>
      <div className=" coin-search" >
        <Text  color="gray.400">Search a Nft By Artist Nft</Text>
        <form>
          <input type="text" placeholder=" Type Artist Name" className="coin-input" onChange={handleChange} />
        </form>
      </div>
    </GridItem>
    </SimpleGrid>

      <Tabs isFitted mt="60px">
        <TabList mb='1em'>
          <Tab>Image</Tab>
          <Tab>Video</Tab>
        </TabList>

    <TabPanels>

      <TabPanel>
      <SimpleGrid  columns={[1, 1, 2, 3,4,5]} spacingX='40px' spacingY='30px' mt={["15px", "25px","55px"]} >
      {images.map((el,index) => {
      return  <NFTCard  key={index} nft={el} button={el.forSell ? <Buy nft={el} /> : <DescriptionModal nft={el}/>} ></NFTCard>
      })}
      </SimpleGrid>
      </TabPanel>

      <TabPanel>
      <SimpleGrid  columns={[1, 1, 2, 3,4,5]} spacingX='40px' spacingY='30px' mt={["15px", "25px","55px"]} >
      {videos.map((el,index) => {
      return  <NFTCard  key={index} nft={el} button={el.forSell ? <Buy nft={el} /> : <DescriptionModal nft={el}/>} ></NFTCard>
      })}
      </SimpleGrid>
      </TabPanel>
    
    </TabPanels>
  </Tabs>
</>
);
};

export default Expo;