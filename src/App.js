import './App.css';

import React, { useState, useEffect } from 'react'


var data = require('./data.json');


const App = () => {
  const [countries, setCountries] = useState([])
  const [score, setScore] = useState(0)

  const newCountries = () => {
    var len = data.length;
    var idx1 = Math.floor(Math.random() * len);
    var idx2 = Math.floor(Math.random() * len);
    while(idx1 === idx2) {
      idx2 = Math.floor(Math.random() * len);
    }
    var country1 = data[idx1];
    var country2 = data[idx2];
    return [country1, country2];
  }

  useEffect(() => {
    console.log('effect')
    var c = newCountries();
    setCountries(c)
  }, [])
  
  const clickLeft = () => {
    if (countries[0].population > countries[1].population) {
      var c = newCountries();
      setCountries(c);
      var s = score + 1;
      setScore(s);
    } else {
      setScore(0);
    }
  }

  const clickRight = () => {
    if (countries[0].population < countries[1].population) {
      var c = newCountries();
      setCountries(c);
      var s = score + 1;
      setScore(s);
    } else {
      setScore(0);
    }
  }

  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor:"#252525" }}>
      <div style={{ display: "table", margin:"0 auto" }}><p style={{fontSize: "30px", color:"red"}}>Score: {score}</p></div>
      <div style={{ height: "80vh", width: "48%", display:"flex", justifyContent:"center", alignItems:"center", float:"left", backgroundImage:`url(${countries.length > 1 ? countries[0].flags.png : data[0].flags.png})`, backgroundRepeat:"no-repeat", backgroundSize: "100%", backgroundPositionY: "center",}} >
        <button style={{ fontSize:"50px", backgroundColor:"white", borderStyle:"solid", borderColor:"black", borderWidth:"5px", padding:"20px" }}
          onClick={clickLeft}>
            { countries.length > 1 ? countries[0].name.common : data[0].name.common }
        </button>
      </div>
      <div style={{ height: "80vh", width: "48%", display:"flex", justifyContent:"center", alignItems:"center", float:"right", backgroundImage:`url(${countries.length > 1 ? countries[1].flags.png : data[1].flags.png})`, backgroundRepeat:"no-repeat", backgroundSize: "100%", backgroundPositionY: "center",}} >
        <button style={{ fontSize:"50px", backgroundColor:"white", borderStyle:"solid", borderColor:"black", borderWidth:"5px", padding:"20px" }}
          onClick={clickRight}>
            { countries.length > 1 ? countries[1].name.common : data[1].name.common }
        </button> 
      </div>
    </div>
  );
}

export default App;
