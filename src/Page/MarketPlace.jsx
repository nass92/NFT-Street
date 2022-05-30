
import '../components/styles/Pages/MarketPlace.css';
import { DesktopRoot } from "../components/styles/Pages/Deskroot";
import Mkt from '../components/Compo/Market';
import { Center } from '@chakra-ui/react';

const MarketPlace= () => {

  return (
  <div id="market">
   <DesktopRoot>
   <div id="market-list-header-text">  <Center mt="150px" size="28px">Buy and collect your favorite Nft </Center></div>
    <Mkt/>
   </DesktopRoot>
  </div>
  );
};

export default MarketPlace;
