import React from 'react'
import Button from '../Button/Button'
import './styles.header.css'
import MobileDrawer from '../Header/Drawer'

function Header() {
  return (
    <div className='nav'>
    <div className='header'>
      <div className='heading'>
        <h1>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
      </div>
     <div className='links'>
        <a href='/'>
            <p className='link'>home</p>
        </a>
        <a href='/compare'>
            <p className='link'>compare</p>
        </a>
        <a href='/dashboard'>
          <Button  text="dashboard" />
        </a>
  </div> 
  <MobileDrawer />
    </div> 
    </div>
  )
}

export default Header
