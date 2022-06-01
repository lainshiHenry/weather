import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const apiKey = '355edf7343cc1ad6243f12d93e29eb39';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }


  }

  return (
    <div className="app">
      <section>
        <input value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' type='text' aria-label='Enter Location Name' />
      </section>
      <div className='container'>
        <section aria-label='Top' className='top'>
          <section className='cityName' aria-label='City Name'>
            <p>Winnipeg</p>
          </section>
          <section className='temperature' aria-label='Temperature'>
            <h1>30 C</h1>
          </section>
          <section className='description' aria-label='Weather Description'>
            <p>Cloudy</p>
          </section>
        </section>
        <section aria-label='bottom' className='bottom'>
          <section className='feelLikeTemperature' aria-label='Temperature Feels Like'>
            <p className='bold'>35 C</p>
            <p className='bottomSectionLabel'>Feels Like</p>
          </section>
          <section className='humidity' aria-label='Humidity'>
            <p className='bold'>60%</p>
            <p className='bottomSectionLabel'>Humidity</p>
          </section>
          <section className='windSpeed' aria-label='Wind Speed'>
            <p className='bold'>15 Km/H</p>
            <p className='bottomSectionLabel'>Wind Speed</p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
