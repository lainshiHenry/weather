import React from 'react'
import '../../App.css'

function CityName({ cityName }) {
    return (
        <section className='cityName' aria-label='City Name'>
            <p>{cityName}</p>
        </section>
    );
}

export default CityName