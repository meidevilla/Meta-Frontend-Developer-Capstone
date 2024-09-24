import React, { useState, useReducer, useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';
import photo1 from '../assets/booking-photo.jpg';
import photo2 from '../assets/booking-photo-2.jpg';

function initializeTimes(date) {
  return fetchAPI(date);
}

const updateTimes = async (date) => {
  const dateObj = new Date(date);
  return await fetchAPI(dateObj);
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload; 
    default:
      throw new Error();
  }
}

const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(reducer, []);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const isSubmitted = await submitAPI(formData);

    if (isSubmitted) {
      navigate('/confirmed');
    }
  };

  useEffect(() => {
    const fetchTimes = async () => {
      const times = await initializeTimes(date);
      dispatch({ type: 'UPDATE_TIMES', payload: times });
    };

    fetchTimes();
  }, [date]);

  return (
    <main className='d-flex justify-content-evenly'>
      <div className='d-flex justify-content-between booking-wrapper'>
        <img src={photo1} alt='hero-image' />
        <img src={photo2} alt='hero-image' />
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </div>
    </main>
  );
};

export default BookingPage;
