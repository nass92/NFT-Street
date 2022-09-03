import React from "react";
import App from "./App";
import { useContract } from "web3-hooks";
import { contractAddress, contractABI} from "./contracts/contract";
import { MarketPlaceAbi, MarketPlaceAddress} from "./contracts/MarketPlace"

export const DappContext = React.createContext(null);

function Dapp() {
  const Create = useContract(contractAddress, contractABI);
  const Market = useContract(MarketPlaceAddress, MarketPlaceAbi)
 // const Market = useContract(MarketPlaceAddress, MarketPlaceAbi)
  return (
    <DappContext.Provider value={{Create, Market}}>
      <App />
    </DappContext.Provider>
  ); 
}

export default Dapp;