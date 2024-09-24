import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

const BookingConfirmationPage = () => {
  return (
    <main className='d-flex flex-column p-5 m-5 align-items-center bookingConfirmation'>
      <FaCircleCheck style={{ fontSize: "60px", color: "green"}} />
      <h1 className='mb-3'><strong>Reservation Confirmed</strong></h1>
      <p>We are pleased to inform you that your reservation
        request <strong>has been received and confirmed.</strong>
      </p>
      <p>If you have any questions, feel free to contact us.</p>
    </main>
  );
}

export default BookingConfirmationPage;
