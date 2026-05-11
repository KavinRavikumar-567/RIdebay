import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Navigation, Calendar, Clock, DollarSign } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Booking.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Booking = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [bookingType, setBookingType] = useState('instant');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [userLocation, setUserLocation] = useState([40.7128, -74.0060]);
  const [fare, setFare] = useState(null);
  const [availableDrivers] = useState(5);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        () => console.log('Location access denied')
      );
    }
  }, []);

  const calculateFare = () => {
    if (pickup && destination) {
      const baseFare = 5;
      const perKm = 2;
      const distance = Math.random() * 20 + 2;
      const total = baseFare + (distance * perKm);
      setFare({ distance: distance.toFixed(1), amount: total.toFixed(2) });
    }
  };

  const handleBooking = () => {
    if (!pickup || !destination) {
      alert('Please enter both pickup and destination locations');
      return;
    }
    if (bookingType === 'scheduled' && (!scheduleDate || !scheduleTime)) {
      alert('Please select date and time for scheduled booking');
      return;
    }
    alert('Booking confirmed! Driver will be assigned shortly.');
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-form">
          <h1>Book Your Ride</h1>
          
          <div className="booking-type">
            <button 
              className={bookingType === 'instant' ? 'active' : ''}
              onClick={() => setBookingType('instant')}
            >
              <Clock size={20} />
              Instant Booking
            </button>
            <button 
              className={bookingType === 'scheduled' ? 'active' : ''}
              onClick={() => setBookingType('scheduled')}
            >
              <Calendar size={20} />
              Pre-Book
            </button>
          </div>

          <div className="form-group">
            <label><MapPin size={18} /> Pickup Location</label>
            <input 
              type="text" 
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <button className="location-btn" onClick={() => setPickup('Current Location')}>
              <Navigation size={16} /> Use Current Location
            </button>
          </div>

          <div className="form-group">
            <label><MapPin size={18} /> Destination</label>
            <input 
              type="text" 
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          {bookingType === 'scheduled' && (
            <div className="schedule-inputs">
              <div className="form-group">
                <label><Calendar size={18} /> Date</label>
                <input 
                  type="date" 
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label><Clock size={18} /> Time</label>
                <input 
                  type="time" 
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                />
              </div>
            </div>
          )}

          <button className="calculate-btn" onClick={calculateFare}>
            Calculate Fare
          </button>

          {fare && (
            <div className="fare-estimate">
              <h3><DollarSign size={20} /> Fare Estimate</h3>
              <p>Distance: {fare.distance} km</p>
              <p className="fare-amount">${fare.amount}</p>
            </div>
          )}

          <div className="driver-availability">
            <p>{availableDrivers} drivers available nearby</p>
          </div>

          <button className="book-btn" onClick={handleBooking}>
            Confirm Booking
          </button>
        </div>

        <div className="map-container">
          <MapContainer center={userLocation} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap'
            />
            <Marker position={userLocation}>
              <Popup>Your Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Booking;
