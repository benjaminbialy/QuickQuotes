import React, { useState, useEffect } from 'react';

var axios = require("axios").default;

function Quote(props) {



  const [price, setPrice] = useState(null);

  useEffect(() => {

    var options = {
      
      method: 'GET',
      url: 'https://twelve-data1.p.rapidapi.com/price',
      params: {symbol: "TSLA", format: 'json', outputsize: '30'},
      headers: {
        'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
        'x-rapidapi-key': '9da7aabb33mshcc174d80bb86355p12951ajsn7883b2393c98'
      }
    };

    const getPrice = () => {
      axios.request(options).then(function (response) {
        setPrice(response.data.price);
      }).catch(function (error) {
        console.error(error);
      });
    }
    getPrice();
    return () => {
    };
  }, []);
  

  return(
    <div>
      <div>price: {price}</div>    
    </div>
  );
  
}

export default Quote;
