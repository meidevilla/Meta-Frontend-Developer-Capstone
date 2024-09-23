import React from 'react'
import customer1 from '../assets/customer-1.jpg'
import customer2 from '../assets/customer-2.jpg'
import customer3 from '../assets/customer-3.jpg'
import customer4 from '../assets/customer-4.jpeg'
import ReactStars from 'react-rating-stars-component';

const CustomersSay = () => {
  return (
    <section id='testimonials'>
      <div className='testimonials-section'>
        <div className='section-heading'>
          <h1 className='heading'>TESTIMONIALS</h1>
          <h2 className='subheading'>WHAT THE CUSTOMERS SAY ABOUT US</h2>
        </div>

        <div className='testimonials'>
            <div className='testimony'>
              <img className='customer-img' src={customer1} alt='IRENE BAE' />
              <div className='testimony-details'>
                <h5>IRENE BAE</h5>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={4} 
                  isHalf={true} 
                />
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className='testimony'>
                <img className='customer-img' src={customer2} alt='KARINA' />
                <div className='testimony-details'>
                  <h5>YU JIMIN</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={4} 
                    isHalf={true} 
                  />
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>
            </div>

            <div className='testimony'>
              <img className='customer-img' src={customer3} alt='KIM MINGYU' />
              <div className='testimony-details'>
                <h5>KIM MINGYU</h5>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={4} 
                  isHalf={true} 
                />
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className='testimony'>
              <img className='customer-img' src={customer4} alt='HONG HAEIN' />
                <div className='testimony-details'>
                  <h5>HONG HAEIN</h5>
                  <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4} 
                      isHalf={true} 
                    />
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CustomersSay
