import '../components/styles/Pages/Exposition.css';
import { Center } from "@chakra-ui/react";
import { DesktopRoot } from "../components/styles/Pages/Deskroot";
import Expo from "../components/Compo/Exposition";

const Explore = () => {

  return (

 <div id="explore">
  <DesktopRoot>

    <p id="expo-list-header-text">  <Center as="u" mt="30px" size="28px">Explore all Nft of Our Community </Center></p>

    <Expo/>

 </DesktopRoot>
</div>

  );
};

export default Explore;
