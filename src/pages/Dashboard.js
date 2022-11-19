import React,{useEffect} from 'react'
import axios from 'axios'
import{DASHBOARD_API_URL} from  '../ApiUrl'
import Header from '../components/Header/Header';
import Tabs from '../components/Dashboard/Tabs';
import Search from '../components/Search/Search';
import  ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Loading from '../components/Loading/Loading';
import PaginationCompnent from '../components/Pagination/PaginationComponent';

function Dashboard() {
  // use array to store api data
  const[data,setData]=React.useState([])

  //search satate
  const[search,setSearch]=React.useState("");

  // loading
  const[loading,setLoading]=React.useState(true);

  //page search
  const[pageNumber,setPageNumber]=React.useState(1)

  //page coins for first page
  // const[pageCoins,setPageCoins]=React.useState([]);
  // use axioes to fetch the api data 
  var filteredCoins = data.filter((item) => {
    if (
      item.symbol.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
  });
  useEffect((()=>{
   axios.get(DASHBOARD_API_URL)
   .then((response=>{setData(response.data);
    setLoading(false);
    // filteredCoins=response.data.slice(0,9)
    // by default disly 10
  }))
  //  alreday in json format no need to cnver res.json()
   .catch((error)=>{
    console.log(error)
      })
  
   
  }),[]);

  // go to top

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
// every time page value change slice the data
//  const handleChange=(event,value)=>{
//         setPageNumber(value);
//         setPageCoins(data.slice((value-1)*10,
//         (value-1) * 10+10)


//         // )
     
//     }
   

  
  return (
    <div>
      <Header />
      {/* loading */}
      {/* search component */}
      {loading?(<Loading />):(<>
      
      <Search  search={search} setSearch={setSearch}/>
      {/* send props to tabs components */}
    <Tabs  data={filteredCoins} />
    {/* to go up ,top -btn styled in inde.css */}
    <div onClick={() => topFunction()} id="myBtn" className="top-btn">
            <ArrowUpwardIcon sx={{ color: "var(--blue)" }} />
          </div>
      {/* <PaginationCompnent  pageNumber={pageNumber} handleChange={handleChange} /> */}
    
        {/*  */}
      
      </>)}
    </div>

  )

}

export default Dashboard
