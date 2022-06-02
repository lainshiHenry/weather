import React from 'react'
import '../../App.css'

function WindSpeed({ windSpeedValue }) {
    return (
        <section className='windSpeed' aria-label='Wind Speed'>
            <p className='bold'>{windSpeedValue.toFixed()} km/h</p>
            <p className='bottomSectionLabel'>Wind Speed</p>
        </section>
    );
}

export default WindSpeed