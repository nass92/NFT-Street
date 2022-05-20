import './App.css'
import {  Routes, Route } from 'react-router-dom';
import { TokenContextProvider } from "./components/Compo/contexts/TokenContext";
import Create from "./Page/Dashboard/Create";
import Home from './Page/Home';
import NavBar from './components/Compo/Navbar';
import Explore from './Page/Exposition';
import MarketPlace from './Page/MarketPlace';
import Dashboard from './Page/Dashboard/Dashboard';
import Transfert from './Page/Dashboard/Transfert';
import Listing from './Page/Dashboard/Listing';
const App = () => {


    return (
   
      <>
<TokenContextProvider>
<div class="fixed-top">
<NavBar/>
        </div>
        <main>
      <Routes>
    
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/exposition" element={<Explore/>}></Route>
    <Route exact path="/marketplace" element={<MarketPlace/>}></Route>
    <Route exact path="/dashboard" element={<Dashboard/>}></Route>
    <Route exact path="/create" element={<Create/>}></Route>
    <Route exact path="/transfert" element={<Transfert/>}></Route>
    <Route exact path="/listing" element={<Listing/>}></Route>
    </Routes>
    </main>

         
    </TokenContextProvider>
     
      
      </>

    
    );
}

export default App;