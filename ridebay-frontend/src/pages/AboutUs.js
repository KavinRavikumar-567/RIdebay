import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Ride Bay</h1>
        <p>Connecting riders and drivers for safe, reliable transportation</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Ride Bay was founded with a simple mission: to make transportation accessible, 
            affordable, and reliable for everyone. We believe that getting from point A to 
            point B should be easy, safe, and stress-free.
          </p>
          <p>
            Since our launch, we've connected thousands of riders with professional drivers, 
            creating a community built on trust, safety, and excellent service.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <Target size={40} />
            <h3>Our Mission</h3>
            <p>To provide safe, reliable, and affordable transportation solutions that connect communities.</p>
          </div>
          <div className="value-card">
            <Award size={40} />
            <h3>Excellence</h3>
            <p>We strive for excellence in every ride, ensuring quality service and customer satisfaction.</p>
          </div>
          <div className="value-card">
            <Users size={40} />
            <h3>Community</h3>
            <p>Building a strong community of riders and drivers who trust and respect each other.</p>
          </div>
          <div className="value-card">
            <Heart size={40} />
            <h3>Care</h3>
            <p>We care about our riders, drivers, and the communities we serve every single day.</p>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat">
            <h3>50K+</h3>
            <p>Happy Riders</p>
          </div>
          <div className="stat">
            <h3>5K+</h3>
            <p>Verified Drivers</p>
          </div>
          <div className="stat">
            <h3>100K+</h3>
            <p>Rides Completed</p>
          </div>
          <div className="stat">
            <h3>4.8/5</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
