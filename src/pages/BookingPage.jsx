import React, { useState, useReducer } from 'react'
import BookingForm from '../components/BookingForm'
import photo1 from '../assets/booking-photo.jpg'
import photo2 from '../assets/booking-photo-2.jpg'

  const initialState = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };

  const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return {
          ...state,
          availableTimes: action.payload,
        };
      default:
        return state;
    }
  }

  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  const updateTimes = (date) => {
    return initializeTimes();
  }

  const BookingPage = () => {
    const [state, dispatch] = useReducer(availableTimesReducer, initialState);
    const handleDateChange = (selectedDate) => {
      const newAvailableTimes = updateTimes(selectedDate);
      dispatch({type: 'UPDATE_TIMES', payload: newAvailableTimes});
    }
    return (
      <>
      <div className='d-flex justify-content-evenly'>
          <div className='d-flex justify-content-between booking-wrapper'>
              <img className='image-container' src={photo1} alt='hero-image'/>
              <img className='image-container' src={photo2} alt='hero-image'/>
              <BookingForm availableTimes={state.availableTimes} onDateChange={handleDateChange}/>
          </div>
      </div>
      </>
    )
  }

export default BookingPage
