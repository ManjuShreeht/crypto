
import Header from '../components/Header/Header'
import {Link} from 'react-router-dom'
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../components/Button/Button";

import Tabs from "../components/Dashboard/Tabs";
import{DASHBOARD_API_URL} from  '../ApiUrl'

function WatchListPage() {
  const watchlist = localStorage.getItem("watchlist")
    ? localStorage.getItem("watchlist").split(",")
    : [];

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    console.log("watchlist was changed");
  }, [watchlist]);

  useEffect(() => {
    axios
      .get(DASHBOARD_API_URL)
      .then((response) => {
        console.log("Response Data >>>", response.data);
        var myCoins = response.data.filter((coins) =>
          watchlist.includes(coins.id)
        );
        console.log("my coins", myCoins);
        setCoins(myCoins);
      })
      .catch((error) => {
        console.log("Error>>>", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        {coins.length > 0 ? (
          <Tabs data={coins} />
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}>
              Your watchlist is Currently Empty
            </h1>
            <p style={{ textAlign: "center", color: "var(--grey)" }}>
              Please Add Coins in your watchlist
            </p>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/dashboard">
                <Button text="Dashboard" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchListPage;
