import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
// dylnamiclly display using url id
import axios from 'axios'
import Loading from '../components/Loading/Loading'
import List from '../components/Dashboard/List'
import CoinInfo from '../components/Coin/CoinInfo'
import  {getCoinData}  from '../components/Coin/getCoinData'
import LineChart from '../components/Coin/LineChart'
import { getDate } from '../components/Coin/getDate'
import { getCoinPrice } from '../components/Coin/getCoinPrice'
import SelectDays from '../components/Coin/SelectDays'
import TogglePrice from '../components/Toggle/Toggle'
import { convertNumbers } from '../components/Dashboard/convertNumber'
import {setCoinDataFunction} from '../components/setCoinDataFunction'
function CoinPage() { 
  
   const { id } = useParams(); //router component to access data through url id
const [coin, setCoin] = useState({}); // to set coindata (coin id,name)
const [days, setDays] = useState(120);   //it used for chart dispaly in the form of date 
const [loading, setLoading] = useState(true);  //loading components
const [priceType, setPriceType] = useState("prices");  //to collect id price

//chart  linechart contain two method lable and datasets
const [chartData, setChartData] = useState({
  labels: [],
  datasets: [{}],
});

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  // scales: {
  //   y: {
  //     ticks:
  //       priceType == "market_caps"
  //         ? {
  //             callback: function (value) {
  //               return "$" + convertNumbers(value);
  //             },
  //           }
  //         : priceType == "total_volumes"
  //         ? {
  //             callback: function (value) {
  //               return convertNumbers(value);
  //             },
  //           }
  //         : {1
  //             callback: function (value, index, ticks) {
  //               return "$" + value.toLocaleString();
  //             },
  //           },
  //   },
  // },
};


//it used to get data of id, axioes.get(id_url)this method create separely   getCoinsData.js
useEffect(() => {
  if (id) {
    getData();
  }
}, [id]);

//async method used it wait until promise came from getCoinData method ,we pass ceypto id
const getData = async () => {
  const data = await getCoinData(id);
  const prices = await getCoinPrice(id, days, priceType);//get prices of crypto id with particular days 

  if (data) {
    console.log("data", data);
    // setCoin({ //add all id data to setCoin statehook
    // //   id: data.id,
    // //   name: data.name,
    // //   symbol: data.symbol,
    // //   image: data.image.large,
    // //   desc: data.description.en,
    // //   price_change_percentage_24h:
    // //     data.market_data.price_change_percentage_24h,
    // //   total_volume: data.market_data.total_volume.usd,
    // //   current_price: data.market_data.current_price.usd,
    // //   market_cap: data.market_data.market_cap.usd,
    // // });

    //create separate function and  call
    setCoinDataFunction(setCoin,data)
    setLoading(false);  //false the loading state of load the data
  }
  if (prices) {     //if price true
    console.log("Prices>>>", prices);
    //create chart on the basis of price with dates
    setChartData({ //set chart to setchaerData state hook
      labels: prices?.map((data) => getDate(data[0])),   //getData method it return crypto date  data[0]-contain date
      datasets: [
        { //dataset used to design a chart
          label: "Price",  //name
          data: prices?.map((data) => data[1]),  //date 
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          backgroundColor: "transparent",
          borderColor: "#3a80e9",
          pointRadius: 0,
        },
      ],
    });
  }
};

const handleDaysChange = async (event) => {
  const prices = await getCoinPrice(id, event.target.value, priceType);
  if (prices) {
    setChartData({
      labels: prices?.map((data) => getDate(data[0])),
      datasets: [
        {
          label: "Price",
          data: prices?.map((data) => data[1]),
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          backgroundColor: "transparent",
          borderColor: "#3a80e9",
          pointRadius: 0,
        },
      ],
    });
  }
  setDays(event.target.value);
};

const handlePriceChange = async (event) => {
  setPriceType(event.target.value);
  const prices = await getCoinPrice(id, days, event.target.value);
  if (prices) {
    setChartData({
      labels: prices?.map((data) => getDate(data[0])),
      datasets: [
        {
          label: "Price",
          data: prices?.map((data) => data[1]),
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          backgroundColor: "transparent",
          borderColor: "#3a80e9",
          pointRadius: 0,
        },
      ],
    });
  }
};

return (
  <div>
    <Header />
    {loading ? (
      <Loading />
    ) : (
      <>
        <div className="grey-container">
          <List coin={coin} delay={0.5} />
        </div>
        <div className="grey-container">
          {/* <SelectDays days={days} handleChange={handleDaysChange} />
          <TogglePrice
            priceType={priceType}
            handleChange={handlePriceChange}
          /> */}
          <SelectDays days={days} handleChange={handleDaysChange} />
          <TogglePrice
              priceType={priceType}
              handleChange={handlePriceChange}
            />
          <LineChart chartData={chartData} options={options} />
          {/* option styling chart */}
        </div>
        <div className="grey-container">
          <CoinInfo name={coin.name} description={coin.desc} />
        </div>
      </>
    )}
  </div>
);
}

export default CoinPage;
