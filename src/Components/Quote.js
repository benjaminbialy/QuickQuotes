import React, { useState, useEffect } from 'react';
import "./Quote.css"

var axios = require("axios").default;

function Quote(props) {



  const [price, setPrice] = useState(null);
  const [open, setOpen] = useState(null);
  const [change, setChange] = useState(null);


  useEffect(() => {

    var price = {
      
      method: 'GET',
      url: 'https://twelve-data1.p.rapidapi.com/price',
      params: {symbol: props.ticker, format: 'json', outputsize: '30'},
      headers: {
        'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
        'x-rapidapi-key': ''
      }
    };
    var dailyStats = {
      method: 'GET',
      url: 'https://twelve-data1.p.rapidapi.com/quote',
      params: {symbol: props.ticker, interval: '1day', outputsize: '30', format: 'json'},
      headers: {
        'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
        'x-rapidapi-key': ''
      }
    };

    const getPrice = () => {
      axios.request(price).then(function (response) {
        setPrice(response.data.price);
      }).catch(function (error) {
        console.error(error);
      });
    }
    const getDailyStats = () => {
      axios.request(dailyStats).then(function (response) {
        setChange(response.data.percent_change);
        setOpen(response.data.open);
      }).catch(function (error) {
        console.error(error);
      });
    }

    getPrice();
    getDailyStats();

    return () => {
    };
  }, [props.ticker]);
  

  return(
    <div className='quote'>
      <div className="quote--img">

      </div>
      <div className='quote--info'>
        <h2>{props.ticker}</h2>
        <div>open: {open}</div>
        <div>price: {price}</div>    
        <div>percentage change: {change}</div>
      </div>
    </div>
  );
  
}

export default Quote;
