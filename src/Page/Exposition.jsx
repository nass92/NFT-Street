import '../components/styles/Pages/Exposition.css';
import { Center } from "@chakra-ui/react";
import { DesktopRoot } from "../components/styles/Pages/Deskroot";
import Expo from "../components/Compo/Exposition";

const Explore = () => {

  return (
  <div id="explore">
    <DesktopRoot>
      <div id="expo-list-header-text">  <Center mt="150px" size="28px">Explore all Nft of Our Community </Center></div>
        <Expo/>
    </DesktopRoot>
  </div>
  );
};

export default Explore;
