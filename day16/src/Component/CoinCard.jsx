import React from 'react'

const CoinCard = ({coin}) => {
  return (
    <div>
      <img src={coin.image} alt={coin.name} />
      <h3>{coin.name}</h3>
      <p>price:{coin.current_price}</p>
      <p>Market Cap Rank:{coin.market_cap_rank}</p>
    </div>
  )
}

export default CoinCard
