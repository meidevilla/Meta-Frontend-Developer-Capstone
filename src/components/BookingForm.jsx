import React, { useState } from 'react';

const BookingForm = ({ availableTimes, onDateChange }) => {
    const [currentDate, setBookingDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('')
    const [numOfGuest, setNumOfGuest] = useState(1)
    const [occasion, setOccasion] = useState('')

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setBookingDate(selectedDate);
        onDateChange(selectedDate);
    }
    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleGuestChange = (e) => {
        setNumOfGuest(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };
    
    return (
    <>
      <form className='p-5'>
        <div className='d-flex flex-column align-items-center pt-2'>
            <h3 className='text-wrapper'>BOOK YOUR TABLE TODAY</h3>
            <h4 className='text-wrapper'>LITTLE LEMON, CHICAGO</h4>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="booking-date">Date</label>
            <br />
            <input
                type="date"
                className="form-control"
                id="booking-date"
                selected={currentDate}
                onChange={handleDateChange}
                required
            />
        </div>


        <div className="form-group mb-3">
          <label htmlFor="booking-time">Time</label>
          <select id="booking-time" value={selectedTime} onChange={handleTimeChange} className="form-select" required>
            <option value=''>Select your preferred time.</option>
            {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="noOfGuest">Number of Guest</label>
          <input type='number' id="noOfGuest" 
            className="form-control" min='1' max='10' required 
            value={numOfGuest} onChange={handleGuestChange}/>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="booking-occasion">Occasion</label>
          <select id="boooking-occasion" name="selectedOccasion" 
            className="form-select" value={occasion} 
            onChange={handleOccasionChange}>
            <option value=" ">Select the occasion.</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-success">
            Submit Reservation
        </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
