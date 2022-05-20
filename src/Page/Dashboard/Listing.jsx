import {DesktopRoot } from "../../components/styles/Pages/Deskroot"
import {  Center, } from '@chakra-ui/react';
import "../../components/styles/Pages/Transfer.css"

import Dashliste from "../../components/Compo/DashBoard/DashListe";

const Listing= () => {

    return (
        
        <div id="transfert">
        <DesktopRoot>

            <p id="form-list-header-text">  <Center as="u" mt="80px" size="28px">List and Sell Your nft To the MarketPlace   </Center></p>

            <div id="form-container">
            <Dashliste/>
            </div> 

        </DesktopRoot>
      </div>
 


    
    );
}

export default Listing;