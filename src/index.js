import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { Web3Provider } from "web3-hooks"
import { ChakraProvider } from "@chakra-ui/react"
import Dapp from "./Dapp"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Web3Provider>
      <Router>
          <Dapp />
        </Router>
      </Web3Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
