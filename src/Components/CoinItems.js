import React from 'react'
import './Coins.css'

const CoinItems = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className="image-symbol">
            <img src={props.coins.image} alt=''/>
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
         <p className='hide-mobile'>${props.coins.total_value}</p>
        <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItems