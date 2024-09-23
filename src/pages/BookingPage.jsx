import React, { useState, useReducer } from 'react'
import BookingForm from '../components/BookingForm'
import { fetchAPI, submitAPI } from '../api'
import photo1 from '../assets/booking-photo.jpg'
import photo2 from '../assets/booking-photo-2.jpg'

  function initializeTimes(date) {
    return fetchAPI(date)
  }

  const updateTimes = (date) => {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

  }

  const BookingPage = () => {
    const [ date, setDate ] = useState(new Date())
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));
    return (
      <>
      <div className='d-flex justify-content-evenly'>
          <div className='d-flex justify-content-between booking-wrapper'>
              <img className='image-container' src={photo1} alt='hero-image'/>
              <img className='image-container' src={photo2} alt='hero-image'/>
              <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
          </div>
      </div>
      </>
    )
  }

export default BookingPage
