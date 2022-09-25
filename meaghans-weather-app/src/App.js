import React from 'react';
import axios from 'axios';

function App() {

  // const url ='https://api.openweathermap.org/data/2.5/weather?q=knoxville&appid=192aa32e12efeef9298dceab17715f5a';
  
  
   return (
  <div className="Meaghans Weather App">
    <div className="container">
      <div className="top">
        <div className="location">
          <p>knoxville</p>
      </div>
      <div className="temp">
        <h1>60 F</h1>
      </div>
      <div className="description">
        <p>Clouds</p>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>Feels like: 65 F</p>
      </div>
      <div className="humidity">
        <p>Humidity: 50%</p>
      </div>
      <div className="wind">
        <p>Wind: 5 mph</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}

export default App;
