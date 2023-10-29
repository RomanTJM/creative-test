import React from 'react';
import './Filters.css';

export function Filters() {
  return (
    <div className='filters'> 
        <button className='filters-btn'>All</button>
        <button className='filters-btn'>Stocks</button>
        <button className='filters-btn'>ETFs</button>
        <button className='filters-btn'>Crypto</button>
        <button className='filters-btn'>NFTs</button>
    </div>
  )
}
