import React from 'react'
import Button from '../../components/Button/Button'
import './Header.css'
import Sidebar from '../../components/Header/Sidebar'

function Header() {
    return (
        // header component
        <div className='nav'>
        <div className='header'>
          <div className='heading'>
            <h1>CryptoTracker<span style={{color:"var(--blue)" }}>.</span></h1> 
            {/* header logo */}
          </div>
          {/* use three links home ,compare and dashboard button and button component created separately and used as a props */}
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
     <Sidebar />
        </div> 
        </div>
      )
}

export default Header
