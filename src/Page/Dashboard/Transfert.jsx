import {DesktopRoot } from "../../components/styles/Pages/Deskroot"
import "../../components/styles/Pages/Transfer.css"
import DashTransfert from "../../components/Compo/DashBoard/DashTransfert";
import { Center } from "@chakra-ui/react";

const Transfert = () => {

return (
    <div id="transfert">
    <DesktopRoot>
    <div id="transfert-list-header-text">  <Center  mt="150px" size="28px">Transfert your Nft to an external wallet or to a present for a friend </Center></div>
            <DashTransfert/>
     
    </DesktopRoot>
    </div>
);
}

export default Transfert;