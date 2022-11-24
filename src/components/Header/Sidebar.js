import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

// sidebar used for mobile application
// here we use material UI (drawer components)
export default function Sidebar() {
  const [open, setOpen] = React.useState(false)
    // use a useState hook to open menu and close menu set

  

  

  return (
    <div className='drawerDiv'>
     
        <MenuIcon  className='menu' style={{color:"var(--white)"}} onClick={()=>setOpen(true)}/> 

        {/* menu icon used using by mui */}
        {/* when menuicon clicked the navbar conetent open  that y we set true*/}
           <Drawer
            anchor={"right"}
            // right side navbar
            open={open}
            // open the navbar
            onClose={()=>setOpen(false)}>
                {/* when click after open it will close */}
          
          {/* this are the content in the navbar */}
        <div className='drawer'>
        <Link to='/'>
            <p className='link'>home</p>
        </Link>
        <Link to='/compare'>
            <p className='link'>compare</p>
        </Link>
        <Link to='/dashboard'>
          <p  className='link' >whishList
            </p>
        </Link>
        <Link to='/dashboard'>
          <p className='link' >dashboard
            </p>
        </Link>
        </div> 
          </Drawer>
       
    </div>
  );
}