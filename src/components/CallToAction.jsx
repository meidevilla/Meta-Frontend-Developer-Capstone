import React from 'react'
import heroImage1 from '../assets/hero-image-1.jpg'
import heroImage2 from '../assets/hero-image-2.jpg'

const CallToAction = () => {
  return (
    <section id='hero'>
      <div className='hero-content'>
        <div className='hero-description'>
            <h1 className='heading'>Little Lemon</h1>
            <h2 className='subheading'>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. 
                We focus on traditional recipes served with a modern twist.
            </p>
            <button className='reserve-table-button' role="button"> Reserve a Table </button>
        </div>
        <div className='img-wrapper container-fluid'>
            <img className='hero-img' src={heroImage1} alt='hero-image'/>
            <img className='hero-img ms-3' src={heroImage2} alt='hero-image'/>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
