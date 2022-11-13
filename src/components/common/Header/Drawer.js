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
import './styles.header.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileDrawer() {
  const [open, setOpen] = React.useState(false)
    

  

  

  return (
    <div className='drawerDiv'>
     
        <MenuIcon  className='menu' style={{color:"var(--white)"}} onClick={()=>setOpen(true)}/>
           <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}>
          
        <div className='drawer'>
        <a href='/'>
            <p className='link'>home</p>
        </a>
        <a href='/compare'>
            <p className='link'>compare</p>
        </a>
        <a href='/dashboard'>
          <Button  className='drawer_btn' >dashboard
            </Button>
        </a>
        </div> 
          </Drawer>
       
    </div>
  );
}