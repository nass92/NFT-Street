import {DesktopRoot } from"../../components/styles/Pages/Deskroot"
import { Center } from '@chakra-ui/react';
import "../../components/styles/Pages/Create.css"
import DashCreate from "../../components/Compo/DashBoard/DashCreate";

const Create = () => {


    return (
        
        <div id="create">
          <DesktopRoot>

            <p id="form-list-header-text">  <Center as="u" mt="80px" size="28px">Create Your Own Nft </Center></p>

            <div id="form-container">
              <DashCreate/>
            </div>  

          </DesktopRoot>
      </div>
 


    
    );
}

export default Create;