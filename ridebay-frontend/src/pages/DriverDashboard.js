import React, { useState } from 'react';
import { CheckCircle, Clock, DollarSign, User, MapPin } from 'lucide-react';
import './DriverDashboard.css';

const DriverDashboard = () => {
  const [activeRides, setActiveRides] = useState([
    { id: 1, rider: 'John Doe', pickup: '123 Main St', destination: '456 Oak Ave', status: 'pending', fare: 25.50 },
    { id: 2, rider: 'Jane Smith', pickup: '789 Pine Rd', destination: '321 Elm St', status: 'pending', fare: 18.75 }
  ]);

  const [waitCharges, setWaitCharges] = useState({});

  const acceptRide = (id) => {
    setActiveRides(activeRides.map(ride => 
      ride.id === id ? { ...ride, status: 'accepted' } : ride
    ));
  };

  const completeRide = (id) => {
    const ride = activeRides.find(r => r.id === id);
    const totalFare = ride.fare + (waitCharges[id] || 0);
    alert(`Ride completed! Total fare: $${totalFare.toFixed(2)}`);
    setActiveRides(activeRides.filter(ride => ride.id !== id));
  };

  const addWaitCharge = (id) => {
    const charge = parseFloat(prompt('Enter wait charge amount:'));
    if (!isNaN(charge)) {
      setWaitCharges({ ...waitCharges, [id]: charge });
    }
  };

  return (
    <div className="driver-dashboard">
      <div className="dashboard-header">
        <h1>Driver Dashboard</h1>
        <div className="driver-stats">
          <div className="stat-card">
            <CheckCircle size={24} />
            <div>
              <h3>15</h3>
              <p>Rides Today</p>
            </div>
          </div>
          <div className="stat-card">
            <DollarSign size={24} />
            <div>
              <h3>$425</h3>
              <p>Earnings Today</p>
            </div>
          </div>
          <div className="stat-card">
            <Clock size={24} />
            <div>
              <h3>8.5h</h3>
              <p>Online Time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rides-section">
        <h2>Active Ride Requests</h2>
        {activeRides.length === 0 ? (
          <p className="no-rides">No active rides at the moment</p>
        ) : (
          <div className="rides-grid">
            {activeRides.map(ride => (
              <div key={ride.id} className="ride-card">
                <div className="ride-header">
                  <div className="rider-info">
                    <User size={20} />
                    <span>{ride.rider}</span>
                  </div>
                  <span className={`status ${ride.status}`}>{ride.status}</span>
                </div>
                
                <div className="ride-details">
                  <div className="location">
                    <MapPin size={18} />
                    <div>
                      <p className="label">Pickup</p>
                      <p>{ride.pickup}</p>
                    </div>
                  </div>
                  <div className="location">
                    <MapPin size={18} />
                    <div>
                      <p className="label">Destination</p>
                      <p>{ride.destination}</p>
                    </div>
                  </div>
                </div>

                <div className="fare-section">
                  <p>Base Fare: ${ride.fare.toFixed(2)}</p>
                  {waitCharges[ride.id] && (
                    <p>Wait Charges: ${waitCharges[ride.id].toFixed(2)}</p>
                  )}
                  <p className="total">Total: ${(ride.fare + (waitCharges[ride.id] || 0)).toFixed(2)}</p>
                </div>

                <div className="ride-actions">
                  {ride.status === 'pending' && (
                    <button className="accept-btn" onClick={() => acceptRide(ride.id)}>
                      Accept Ride
                    </button>
                  )}
                  {ride.status === 'accepted' && (
                    <>
                      <button className="wait-btn" onClick={() => addWaitCharge(ride.id)}>
                        Add Wait Charge
                      </button>
                      <button className="complete-btn" onClick={() => completeRide(ride.id)}>
                        Complete Ride
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard;
