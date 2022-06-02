import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import Humidity from './view/components/humidity'
import WindSpeed from './view/components/windSpeed'
import FeelsLike from './view/components/feelsLike'
import Description from './view/components/description'
import CityName from './view/components/cityName'
import Temperature from './view/components/temperature'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const apiKey = '355edf7343cc1ad6243f12d93e29eb39';
  const temperatureUnit = 'metric';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=' + temperatureUnit + '&appid=' + apiKey;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('');
    }
  }

  return (
    <div className="app">
      <section aria-label='Enter Location' className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text'
        />
      </section>
      <div className='container'>
        <section aria-label='Top' className='top'>
          <CityName cityName={data.name} />
          {data.name ? <Temperature temperatureValue={data.main.temp} /> : null}
          {data.weather ? <Description description={data.weather[0].main} /> : null}
        </section>
        {data.name !== undefined &&
          <section aria-label='bottom' className='bottom'>
            {data.main ? <FeelsLike feelsLikeValue={data.main.feels_like} /> : null}
            {data.main ? <Humidity humidityValue={data.main.humidity} /> : null}
            {data.wind ? <WindSpeed windSpeedValue={data.wind.speed} /> : null}
          </section>
        }
      </div>
    </div>
  );
}

export default App;
