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
        'x-rapidapi-key': '9da7aabb33mshcc174d80bb86355p12951ajsn7883b2393c98'
      }
    };
    var dailyStats = {
      method: 'GET',
      url: 'https://twelve-data1.p.rapidapi.com/quote',
      params: {symbol: props.ticker, interval: '1day', outputsize: '30', format: 'json'},
      headers: {
        'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
        'x-rapidapi-key': '9da7aabb33mshcc174d80bb86355p12951ajsn7883b2393c98'
      }
    };

    const getPrice = () => {
      axios.request(price).then(function (response) {
        setPrice("$" + response.data.price);
      }).catch(function (error) {
        console.error(error);
        setPrice("Rate limit hit")
      });
    }
    const getDailyStats = () => {
      axios.request(dailyStats).then(function (response) {
        setChange(response.data.percent_change + "%");
        setOpen("$" + response.data.open);
      }).catch(function (error) {
        console.error(error);
        setChange("Rate limit hit")
        setOpen("Rate limit hit")      });
    }

    getPrice();
    getDailyStats();

    return () => {
    };
  }, [props.ticker]);
  

  return(
    <div className='quote'>
      <div className="quote--img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + props.company__logo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
      }}> 
      </div>
      <div className='quote--info'>
        <h2>{props.ticker}</h2>
        <div className='quote--info--stats'>
          <div className='open__title'>OPEN:</div>
          <div className='open__stat'>{open}</div>
          <div className='current__title'>CURRENT PRICE:</div>
          <div className='current__stat'>{price}</div>    
          <div className='percentage__title'>CHANGE:</div> 
          <div className='percentage__stat'>{change}</div>
        </div>
      </div>
    </div>
  );
  
}

export default Quote;
