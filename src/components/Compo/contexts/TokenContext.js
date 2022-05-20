import {createContext, useContext, useEffect, useReducer} from "react"
import { Web3Context } from "web3-hooks"
import { DappContext } from "../../../Dapp"
import { tokenReducer } from "../reducer/Tokenreducer"

export const TokenContext = createContext()

const initialState = {
  token: {name: "", symbol: ""},
  balance: 0,
}

export const TokenContextProvider = ({children}) => {

  const Create = useContext(DappContext)
  const [web3State] = useContext(Web3Context)
  const [state, dispatch] = useReducer(tokenReducer, initialState)
  const { token, balance} = state

   useEffect(() => { 
    async function fetchData() {
      if (web3State.isLogged) {
        try {
          const nameToken = await Create.name()
          const symbol = await Create.symbol()
          const token = {name: nameToken, symbol: symbol}
          const balance = await Create.balanceOf(web3State.account)

          dispatch({type: 'INIT', payload: [token, balance]})

        } catch (e) {
          dispatch({type: 'ERROR', payload: e.message})
        }
      }
    }
    fetchData()
    
  },[web3State, Create])

  return (
    <TokenContext.Provider value={{token, balance, dispatch}}>
      {children}
    </TokenContext.Provider>
  )
}

export const useToken = () => {
  const context = useContext(TokenContext)
  if (context === undefined) {
    throw new Error(`You try to use FilterContext outside of its provider.`)
  }
  return context
}