
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import Grid from '../gridcomponents/Grid';

export default function LabTabs({data}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const style={
    color:"var(--white)",
    fontFamily:"Inter",
    fontSize:"1.2rem",
    width:"50vw",
    fontWeight:"600",
    textTransform:"capitalize",
      marginLeft:"5rem",
      
  };
  return (
    <Box >
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange}  varient="fullWidth">
            <Tab label="Grid" value="grid"  sx={style} />
            <Tab label="List" value="list" sx={style} />
            
          </TabList>
        </Box>
        
        <TabPanel value="grid">
          <div className='grid-flex'>

          {
            data.map((item,index)=>{
              return <Grid coin={item} />
            })
          }
          </div>
        </TabPanel>
        <TabPanel value="list"></TabPanel>
       
      </TabContext>
    </Box>
  );
}


