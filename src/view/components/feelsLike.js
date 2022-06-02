import React from 'react'
import '../../App.css'

function FeelsLike({ feelsLikeValue }) {
    return (
        <section className='feelLikeTemperature' aria-label='Temperature Feels Like'>
            <p className='bold'>{feelsLikeValue.toFixed()}°C</p>
            <p className='bottomSectionLabel'>Feels Like</p>
        </section>
    );
}

export default FeelsLike