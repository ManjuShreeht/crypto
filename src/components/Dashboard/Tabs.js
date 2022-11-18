
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
//use tabs in mui


import Grid from '../Dashboard/Grid';
import './grid.css'
//from dasbaord data props passed

export default function Tabs({data}) {
  const [value, setValue] = React.useState('1');
// 1 by default first one select grid ,if 2 second one if 0 no one select
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
            {/* two tabs grid and list  */}
            <Tab label="Grid" value={1} sx={style} />
            {/* sx is a mui style compnent */}
            <Tab label="List" value={2} sx={style} />
            
          </TabList>
        </Box>
        
        {/* grid and list same data display but differnt design */}
        {/* grid panel if value=grid grid data display */}
        <TabPanel value={1}>
          <div className='grid-flex'>

          {
            data.map((item,index)=>{
              return <Grid coin={item} />
            })
          }
          </div>
        </TabPanel>
        {/* list data display */}
        <TabPanel value={2}></TabPanel>
       
      </TabContext>
    </Box>
  );
}


