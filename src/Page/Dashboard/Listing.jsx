import {DesktopRoot } from "../../components/styles/Pages/Deskroot"
import "../../components/styles/Pages/Transfer.css"
import Dashliste from "../../components/Compo/DashBoard/DashListe";
import { Center } from "@chakra-ui/react";

const Listing= () => {
    return ( 
    <div id="transfert">
        <DesktopRoot>
        <div id="form-list-header-text">  <Center  mt="150px" size="28px">List Your Nft On the MarketPlace </Center></div>
        <Dashliste/>
    
        </DesktopRoot>
    </div>
    );
}

export default Listing;