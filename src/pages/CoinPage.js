import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
// dylnamiclly display using url id
import axios from 'axios'
import Loading from '../components/Loading/Loading'
import List from '../components/Dashboard/List'

function CoinPage() {
    const{id}=useParams();
    // crypto currency id
    const[coin,setCoin]=React.useState({})
    //to store json data form of an object
    const[loading,setLoading]=React.useState(true)

//propert are change jsondata differnt property so create 
    useEffect((()=>{
      if(id){

        // coin id url
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response=>{
          setCoin({
            id:response.data.id,

          })
         setLoading(false)
        }))
      
        .catch((error)=>{
          console.log(error)
        })
        
      } 
      }),[id]);
    
  return (
    <div>
      
 <Header />

 {loading ? <Loading />:<List coin={coin} />}
      {id}
    </div>
  )
}

export default CoinPage
