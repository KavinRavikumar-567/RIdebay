import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Shield, DollarSign, Users } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MapPin size={40} />,
      title: 'Instant Booking',
      description: 'Book your ride instantly with real-time driver availability'
    },
    {
      icon: <Calendar size={40} />,
      title: 'Pre-Booking',
      description: 'Schedule your rides in advance for important appointments'
    },
    {
      icon: <Clock size={40} />,
      title: 'Real-Time Tracking',
      description: 'Track your driver in real-time with live map updates'
    },
    {
      icon: <Shield size={40} />,
      title: 'Safe & Secure',
      description: 'Verified drivers and secure payment options'
    },
    {
      icon: <DollarSign size={40} />,
      title: 'Transparent Pricing',
      description: 'No hidden charges, see fare estimates before booking'
    },
    {
      icon: <Users size={40} />,
      title: 'Driver Availability',
      description: 'Check driver availability before confirming your ride'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Your Ride, Your Way</h1>
          <p>Book reliable rides instantly or schedule in advance. Safe, affordable, and always available.</p>
          <button className="cta-button" onClick={() => navigate('/booking')}>
            Book Your Ride Now
          </button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop" alt="Ride Bay" />
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Ride Bay?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Enter Location</h3>
            <p>Tell us where you are and where you want to go</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Choose Ride Type</h3>
            <p>Select instant booking or schedule for later</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Confirm & Track</h3>
            <p>Confirm your ride and track your driver in real-time</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Enjoy Your Ride</h3>
            <p>Sit back and enjoy a safe, comfortable journey</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied riders using Ride Bay every day</p>
        <button className="cta-button" onClick={() => navigate('/booking')}>
          Book Now
        </button>
      </section>
    </div>
  );
};

export default Home;
