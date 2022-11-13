import React from 'react'
import './grid.css'

function Grid({coin}) {
  return (
    <div className='grid-flex'>

    <div className='grid-box'>
        
            <img src={coin.image} className="grid-logo" alt="img" />
        
        <div className='grid-name'>
            <p className='grid-symbol'>{coin.symbol}-USD</p>
            <p className='coin-name'>{coin.name}</p>
        </div>
     {coin.price_change_percentage_24h > 0?
     (<div className="coin-chip">{coin.price_change_percentage_24h}
     </div>):
     (
        <div className='coin-chip coin-red' >
         {coin.price_change_percentage_24h}   
        </div>

     )}
    </div>
    </div>
  )
}

export default Grid
