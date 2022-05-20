import {DesktopRoot } from "../../components/styles/Pages/Deskroot"
import { Center } from '@chakra-ui/react';
import "../../components/styles/Pages/Transfer.css"
import DashTransfert from "../../components/Compo/DashBoard/DashTransfert";

const Transfert = () => {

    return (

<div id="transfert">
    <DesktopRoot>

        <p id="form-list-header-text">  <Center as="u" mt="80px" size="28px">Transfert You Nft To External or friends wallet   </Center></p>

        <div id="form-container">
            <DashTransfert/>
        </div>  

    </DesktopRoot>
</div>



    
    );
}

export default Transfert;