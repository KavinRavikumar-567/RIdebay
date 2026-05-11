const express = require('express');
const router = express.Router();

let drivers = [
  { id: 1, name: 'Mike Johnson', rating: 4.8, available: true, location: { lat: 40.7128, lng: -74.0060 } },
  { id: 2, name: 'Sarah Williams', rating: 4.9, available: true, location: { lat: 40.7580, lng: -73.9855 } },
  { id: 3, name: 'David Brown', rating: 4.7, available: true, location: { lat: 40.7489, lng: -73.9680 } }
];

router.get('/available', (req, res) => {
  const availableDrivers = drivers.filter(d => d.available);
  res.json({ success: true, drivers: availableDrivers, count: availableDrivers.length });
});

router.post('/:id/accept', (req, res) => {
  const { bookingId } = req.body;
  const driver = drivers.find(d => d.id === parseInt(req.params.id));
  
  if (driver) {
    driver.available = false;
    driver.currentBooking = bookingId;
    res.json({ success: true, driver });
  } else {
    res.status(404).json({ success: false, message: 'Driver not found' });
  }
});

router.post('/:id/complete', (req, res) => {
  const { waitCharges } = req.body;
  const driver = drivers.find(d => d.id === parseInt(req.params.id));
  
  if (driver) {
    driver.available = true;
    driver.currentBooking = null;
    res.json({ success: true, driver, waitCharges });
  } else {
    res.status(404).json({ success: false, message: 'Driver not found' });
  }
});

module.exports = router;
