import React,{useEffect} from 'react'
import axios from 'axios'
import{DASHBOARD_API_URL} from  '../ApiUrl'
import Header from '../components/Header/Header';
import Tabs from '../components/Dashboard/Tabs';

function Dashboard() {
  // use array to store api data
  const[data,setData]=React.useState([])
  // use axioes to fetch the api data 
  useEffect((()=>{
   axios.get(DASHBOARD_API_URL)
   .then((response=>setData(response.data)))
  //  alreday in json format no need to cnver res.json()
   .catch((error)=>{
    console.log(error)
      })
  
   
  }),[]);
  
  return (
    <div>
      <Header />
      {/* send props to tabs components */}
    <Tabs  data={data}/>
        {/*  */}
      
    </div>
  )
}

export default Dashboard
