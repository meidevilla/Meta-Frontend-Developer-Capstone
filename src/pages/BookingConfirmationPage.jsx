import React from 'react';

const BookingConfirmationPage = () => {
  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Booking Confirmation</h1>
      <p>Thank you for your booking!</p>
      <p>Your reservation has been confirmed.</p>
      <p>If you have any questions, feel free to contact us.</p>
      <button onClick={() => window.location.href = '/'} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Go to Homepage
      </button>
    </main>
  );
}

export default BookingConfirmationPage;
