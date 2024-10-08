import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    console.log(dispatch)

    const currentDate = new Date().toISOString().split("T")[0]
    const [isFormValid, setIsFormValid] = useState (false)
    const validateForm = () => {
      const { date, time, noOfGuests, occasion } = formData;
      if (date && time && noOfGuests > 0 && occasion) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }
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
      if (isFormValid) {
        submitForm(formData)
      }
    }
    useEffect(() => {
      validateForm();
    }, [formData])

    return (
    <>
      <form className='p-5 needs-validation' onSubmit={handleSubmit}>
        <div className='d-flex flex-column align-items-center pt-2'>
            <h3><strong>BOOK YOUR TABLE TODAY</strong></h3>
            <h4><strong>LITTLE LEMON, CHICAGO</strong></h4>
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
          <select 
            name="time" 
            id="booking-time" 
            value={formData.time} 
            onChange={handleFormChange}
            className="form-select" 
            required>
            {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="numOfGuest">Number of Guest</label>
          <input 
            type='number' 
            id="numOfGuest" 
            name="noOfGuests"
            className="form-control" 
            min='1' 
            max='10' 
            required 
            value={formData.noOfGuests} 
            onChange={handleFormChange}/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="booking-occasion">Occasion</label>
          <select 
            label="occasion"
            id="boooking-occasion" 
            name="occasion" 
            className="form-select" 
            value={formData.occasion} 
            onChange={handleFormChange} 
            required>
            <option selected disabled value="">Select the occasion.</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <div className="d-flex justify-content-center">
        <button 
            type="submit" 
            className="btn btn-success" 
            disabled={!isFormValid} 
            aria-label="submit button">
            Submit Reservation
        </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
