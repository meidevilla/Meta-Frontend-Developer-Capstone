import React from 'react'
import footerLogo from '../assets/logo2.png'
import { FaPhone, FaEnvelope, FaLocationDot, FaFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className='footer-content container '>
        <div className='row row-cols-2 row-cols-lg-4 g-4 justify-content-evenly'>
        <div className='wrapper col'>
          <img src={footerLogo} alt='Little Lemon Logo'/>
          <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. 
          We focus on traditional recipes served with a modern twist.
          </p>
        </div>
        <div className='sitemap col'>
          <h4>SITEMAP</h4>
            <ul>
              <li><a href="/home">home</a></li>        
              <li><a href="/about">about</a></li>
              <li><a href="/blog">menu</a></li>  
              <li><a href="/home">reservations</a></li>        
              <li><a href="/about">order online</a></li>
              <li><a href="/blog">login</a></li>  
            </ul>
        </div>
        <div className='contact-us col'>
          <h4>CONTACT US</h4>
          <div className='contacts'>
            <FaLocationDot />
            <p> 678 Pisa Ave, Chicago, IL 60611</p>
          </div>
          <div className='contacts'>
            <FaPhone />
            <p>(312) 593-2744</p>
          </div>
          <div className='contacts'>
            <FaEnvelope />
            <p>littlelemon@mail.com</p>
          </div>
        </div>
        <div className='social-links col'>
          <h4>FOLLOW US</h4>
          <div className='social-wrapper mb-5'>
            <div className='socials'>
              <a href='www.meta.com'> <FaFacebook /> Little Lemon Official </a>
            </div>
            <div className='socials'>
              <a href='www.meta.com'> <FaSquareInstagram /> @littlelemonchicago</a>
            </div>
            <div className='socials'>
              <a href='www.meta.com'> <FaSquareTwitter /> @littlelemonchicago </a>
            </div>
          </div>
        </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
