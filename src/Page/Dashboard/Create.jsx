import {DesktopRoot } from"../../components/styles/Pages/Deskroot"
import { Center } from '@chakra-ui/react';
import "../../components/styles/Pages/Create.css"
import DashCreate from "../../components/Compo/DashBoard/DashCreate";

const Create = () => {
    return (
    <div id="create">
      <DesktopRoot>
        <div id="form-list-header-text">  <Center  mt="80px" size="28px">Create Your Own Nft </Center></div>
        
          <DashCreate/>
     
      </DesktopRoot>
     </div>
    );
}

export default Create;