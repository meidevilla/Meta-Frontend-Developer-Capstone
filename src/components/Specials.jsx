import React from 'react'
import greekSalad from '../assets/greek-salad.jpg'
import  bruschetta from '../assets/bruschetta.jpg'
import  lemonDessert from '../assets/lemon-dessert.jpg'
import { MdDeliveryDining } from "react-icons/md";

const Specials = () => {
  return (
    <section id='specials'>
        <div className='specials-section bg-gray p-10'>
            <div className='specials-heading'>
                <h1 className='heading'>Specials</h1>
                <button className='menu-button'>Online Menu</button>
            </div>
            <div className='cards'>
                <div className='row pt-2'>
                    <div className='col-12 col-sm-6 col-md-4 mb-4'>
                        <div className='card' style={{ borderRadius: '10%'}}>
                            <img className='card-img-top' style={{ borderTopLeftRadius: '10%', borderTopRightRadius: '10%' }} src={greekSalad} alt='greek salad' />
                            <div className='card-body'>
                            <div className='dish-name-price'>
                                <p className='card-title'>Greek Salad</p>
                                <p className='dish-price'>$12.99</p>
                            </div>
                            <div className='dish-desc'>
                                <p>A greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                                    garnished with crunchy garlic and rosemary croutons.
                                </p>
                            </div>
                            <a className='delivery-order'>Order a delivery <MdDeliveryDining /></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 mb-4'>
                        <div className='card' style={{ borderRadius: '10%' }}>
                            <img className='card-img-top' style={{ borderTopLeftRadius: '10%', borderTopRightRadius: '10%' }} src={bruschetta} alt='bruschetta' />
                            <div className='card-body'>
                                <div className='dish-name-price'>
                                    <p className='card-title dish-name'>Bruchetta</p>
                                    <p className='dish-price'>$5.99</p>
                                </div>
                                <div className='dish-desc'>
                                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic 
                                        and seasoned with salt and olive oil.
                                    </p>
                                </div>
                                <a className='delivery-order'>Order a delivery <MdDeliveryDining /></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 mb-4'>
                        <div className='card' style={{ borderRadius: '10%' }}>
                            <img className='card-img-top' style={{ borderTopLeftRadius: '10%', borderTopRightRadius: '10%' }} src={lemonDessert} alt='lemon dessert' />
                            <div className='card-body'>
                                <div className='dish-name-price'>
                                    <p className='dish-name'>Lemon Dessert</p>
                                    <p className='dish-price'>$5.00</p>
                                </div>
                                <div className='dish-desc'>
                                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as 
                                        authentic as can be imagined.
                                    </p>
                                </div>
                                <a className='delivery-order'>Order a delivery <MdDeliveryDining /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Specials
