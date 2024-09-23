import React from 'react'
import food from '../assets/image-1.jpg'

const CallToAction = () => {
  return (
    <section id='hero'>
      <div className='hero-content'>
        <div className='hero-description'>
            <p className='heading'>Little Lemon</p>
            <p className='subheading'>Chicago</p>
            <p className='hero-desc'>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. 
                We focus on traditional recipes served with a modern twist.</p>
            <button className='reserve-a-table-button'> Reserve a Table </button>
        </div>
        <div className='img-wrapper container-fluid'>
            <img className='img-fluid hero-img' src={food} alt='hero-image'/>
            <img className='img-fluid hero-img ms-3' src={food} alt='hero-image'/>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
