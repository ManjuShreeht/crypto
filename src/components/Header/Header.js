import React,{useState} from 'react'
import Button from '../../components/Button/Button'
import './Header.css'
import Sidebar from '../../components/Header/Sidebar'
import {Link} from 'react-router-dom'
import Switch from '@mui/material/Switch';

function Header() {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const [mode, setMode] = useState(defaultDark ? true : false);

  const toggleTheme = (e) => {
    if (!mode) {
      setDark();
    } else {
      setLight();
    }
    setMode(!mode);
  };
    return (
        // header component
        <div className='nav'>
        <div className='header'>
          <div className='heading'>
            <Link to='/'>

            <h1>CryptoTracker<span style={{color:"var(--blue)" }}>.</span></h1> 
            </Link>
            {/* header logo */}
          </div>
          {/* use three links home ,compare and dashboard button and button component created separately and used as a props */}
         <div className='links'>
         <Switch
          checked={!mode}
          onClick={(e) => {
            toggleTheme();
          }}
        />

            <Link to='/'>
                <p className='link'>home</p>
            </Link>
            <Link to='/compare'>
                <p className='link'>compare</p>
            </Link>
            <Link to='/watchlist'>
                <p className='link'>WatchList</p>
            </Link>
            <Link to='/dashboard'>
              <Button  text="dashboard" />
            </Link>
      </div> 
     <Sidebar />
        </div> 
        </div>
      )
}

export default Header
