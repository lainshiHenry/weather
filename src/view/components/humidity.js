import React from 'react'
import '../../App.css'

function Humidity({ humidityValue }) {
    return (
        <section className='humidity' aria-label='Humidity'>
            <p className='bold'>{humidityValue}%</p>
            <p className='bottomSectionLabel'>Humidity</p>
        </section>

    );
}

export default Humidity;