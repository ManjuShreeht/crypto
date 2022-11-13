import React,{useEffect} from 'react'
import axios from 'axios'
import{DASHBOARD_API_URL} from  '../constants'
import Header from '../components/common/Header/Header';
import Tabs from '../components/common/dashboard/tabs/Tabs';

function Dashboard() {
  const[data1,setData]=React.useState([])
  useEffect((()=>{
   axios.get(DASHBOARD_API_URL)
   .then((response=>setData(response.data)))
   .catch((error)=>{
    console.log(error)
      })
  
   
  }),[]);
  
  return (
    <div>
      <Header />
    <Tabs  data={data1}/>
        
      
    </div>
  )
}

export default Dashboard
