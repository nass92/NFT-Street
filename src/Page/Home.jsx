import {DesktopRoot } from"../components/styles/Pages/Deskroot"
import { Center} from '@chakra-ui/react';
import '../components/styles/Pages/Home.css'
import Header from '../components/Compo/Header';
import Expo from "../components/Compo/Exposition";
const Home = () => {

    return (
    <div id="home">
      <DesktopRoot>
        <Header/>
        <p id="card-list-header-text">  <Center>Last Creation</Center></p>
        <Expo/>
      </DesktopRoot>
    </div>
    );
}

export default Home;