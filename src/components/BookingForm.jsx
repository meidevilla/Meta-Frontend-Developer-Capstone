import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    console.log(dispatch)
    const [formData, setFormData] = useState({
      date: "",
      time: "00:00",
      noOfGuests: 1,
      occasion:""
    })
    
    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }
    const handleDateChange = async (event) => {
      const { name, value } = event.target
      
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    dispatch({ type: 'UPDATE_TIMES', payload: value })
    }
    
    const handleSubmit = (event) => {
      event.preventDefault()
      submitForm(formData)
    }

    const currentDate = new Date().toISOString().split("T")[0]

    return (
    <>
      <form className='p-5' onSubmit={handleSubmit}>
        <div className='d-flex flex-column align-items-center pt-2'>
            <h3 className='text-wrapper'>BOOK YOUR TABLE TODAY</h3>
            <h4 className='text-wrapper'>LITTLE LEMON, CHICAGO</h4>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="booking-date">Date</label>
            <br />
            <input
                name='date'
                type="date"
                className="form-control"
                id="booking-date"
                value={formData.date}
                onChange={handleFormChange}
                min={currentDate}
                required
            />
        </div>


        <div className="form-group mb-3">
          <label htmlFor="booking-time">Time</label>
          <select name="time" id="booking-time" value={formData.time} onChange={handleFormChange} className="form-select" required>
            <option value=''>Select your preferred time.</option>
            {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="numOfGuest">Number of Guest</label>
          <input type='number' id="numOfGuest" name="noOfGuests"
            className="form-control" min='1' max='10' required 
            value={formData.noOfGuests} onChange={handleFormChange}/>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="booking-occasion">Occasion</label>
          <select id="boooking-occasion" name="occasion" 
            className="form-select" value={formData.occasion} 
            onChange={handleFormChange} required>
            <option value=" ">Select the occasion.</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-success" value="Reserve" aria-label="submit button">
            Submit Reservation
        </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
