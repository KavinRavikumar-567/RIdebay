const express = require('express');
const router = express.Router();

let bookings = [];

router.post('/create', (req, res) => {
  const { pickup, destination, bookingType, scheduleDate, scheduleTime, fare } = req.body;
  
  const newBooking = {
    id: Date.now(),
    pickup,
    destination,
    bookingType,
    scheduleDate,
    scheduleTime,
    fare,
    status: 'pending',
    createdAt: new Date()
  };
  
  bookings.push(newBooking);
  res.status(201).json({ success: true, booking: newBooking });
});

router.get('/', (req, res) => {
  res.json({ success: true, bookings });
});

router.get('/:id', (req, res) => {
  const booking = bookings.find(b => b.id === parseInt(req.params.id));
  if (booking) {
    res.json({ success: true, booking });
  } else {
    res.status(404).json({ success: false, message: 'Booking not found' });
  }
});

router.put('/:id/status', (req, res) => {
  const { status } = req.body;
  const booking = bookings.find(b => b.id === parseInt(req.params.id));
  
  if (booking) {
    booking.status = status;
    res.json({ success: true, booking });
  } else {
    res.status(404).json({ success: false, message: 'Booking not found' });
  }
});

module.exports = router;
