import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

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
      <section aria-label='Enter Location text box' className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text'
          aria-label='Enter Location Name' />
      </section>
      <div className='container'>
        <section aria-label='Top' className='top'>
          <section className='cityName' aria-label='City Name'>
            <p>{data.name}</p>
          </section>
          <section className='temperature' aria-label='Temperature'>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </section>
          <section className='description' aria-label='Weather Description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </section>
        </section>
        {data.name != undefined &&
          <section aria-label='bottom' className='bottom'>
            <section className='feelLikeTemperature' aria-label='Temperature Feels Like'>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p className='bottomSectionLabel'>Feels Like</p>
            </section>
            <section className='humidity' aria-label='Humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p className='bottomSectionLabel'>Humidity</p>
            </section>
            <section className='windSpeed' aria-label='Wind Speed'>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} Km/H</p> : null}
              <p className='bottomSectionLabel'>Wind Speed</p>
            </section>
          </section>
        }
      </div>
    </div>
  );
}

export default App;
