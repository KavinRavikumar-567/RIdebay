const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const bookingRoutes = require('./routes/bookings');
const driverRoutes = require('./routes/drivers');

app.use('/api/bookings', bookingRoutes);
app.use('/api/drivers', driverRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Ride Bay API is running' });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
