import React from 'react'
import '../../App.css'

function Temperature({ temperatureValue }) {
    return (
        <section className='temperature' aria-label='Temperature'>
            <h1>{temperatureValue.toFixed()}°C</h1>
        </section>
    );

}

export default Temperature