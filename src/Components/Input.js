import React, { useState } from 'react';
import "./Input.css"
import Quote from './Quote.js';

var axios = require("axios").default;

function Input() {
    const [inputtedTicker, setInputtedTicker] = useState("");
    const [click, setClick] = useState(0);
    const [logo, setLogo] = useState("");

    var logoURL = {
        method: 'GET',
        url: 'https://twelve-data1.p.rapidapi.com/logo',
        params: {symbol: inputtedTicker},
        headers: {
          'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
          'x-rapidapi-key': 'APIKEY'
        }
      };

    const getImage = () => {
        axios.request(logoURL).then(function (response) {
            setLogo(response.data.url)
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    const onClick = () => {
        setClick(click + 1)
        getImage();
    }


  return <div className='input'>    
            <div className='input--fields'>
                <label>Enter a valid stock ticker below</label>
                <input  
                        onInput={(e) => e.target.value = ("" + e.target.value).toUpperCase()}
                        placeholder='TSLA' 
                        onBlur={e => setInputtedTicker(e.target.value)}
                />
                <button  onClick={onClick}>Click Me</button>
            </div>
            {click > 0 &&
                <Quote ticker={inputtedTicker} company__logo__url={logo} />
            }
        </div>;
}

export default Input;
