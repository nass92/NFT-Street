
import React, { useState, useEffect } from "react"
import axios from "axios";
import Coin from "./CoinApi";



const CoinMarket = ({ setCrypto }) => {
  const [coins, setCoins] = useState([])
  const [search,] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2C%20ethereum%2C%20decentraland%2C%20aave%2C%20sandbox&order=market_cap_desc&per_page=100&page=1&sparkline=false')

      .then(res => {
        setCoins(res.data)
      }).catch(error => alert('ERROR 404'))
  }, [])



  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
 
  <>
  
        {filteredCoins.map(coin => {
          return (
           
            <Coin key={coin.id}
              image={coin.image}
              name= {coin.name}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
         
          )
        })}
  
    </>
  );
}

export default CoinMarket