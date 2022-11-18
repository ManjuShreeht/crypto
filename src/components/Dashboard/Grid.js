import React from 'react'
import './grid.css'
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function Grid({coin}) {
  return (
    <div className='grid'>

    <div className={`grid-box ${coin.price_change_percentage_24h<0 && "grid-box-red"} `} >
        <div className='grid-info'>

            <img src={coin.image} className="grid-logo" alt="img" />
        
        <div className='grid-name'>
            <p className='grid-symbol'>{coin.symbol}-USD</p>
            <p className='coin-name'>{coin.name}</p>
        </div>
        </div>

        {/* greater than zero we use different css make color green */}
     {coin.price_change_percentage_24h > 0?
      (  <div className="chip-flex">
      <div className="coin-chip">{coin.price_change_percentage_24h.toFixed(2) + "%"}
      </div>
      <TrendingUpIcon className='grid-icon' />
      </div>):
      (
        // less than zeo disply red color
        <div className="chip-flex">
        <div className='coin-chip coin-red' >
        {coin.price_change_percentage_24h.toFixed(2)+"%"}   
        </div>
        <TrendingDownIcon  className='grid-icon icon-red'/>
        </div>
        
        )} 
        <p className='grid-price' style={{color:coin.price_change_percentage_24h<0 ?"var(--red)":"var(--green)"}}>${coin.current_price.toLocaleString()}</p>
        <div>
        <p className='volume-text'><span> Total Volume : </span>{coin.total_volume.toLocaleString()}</p>
        <p className='volume-text'><span> Total Market Cap : </span>
        {coin.market_cap.toLocaleString()}</p>
        {/* toLocaleString---add comma, to price */}
          </div>
    </div>
    </div>
  )
}

export default Grid
