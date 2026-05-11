# Ride Bay - Full Stack Ride Booking Platform

A modern, user-friendly ride booking platform with real-time tracking, instant and pre-booking options, and a comprehensive driver dashboard.

## Features

### For Riders
- **Instant Booking**: Book rides immediately with real-time driver availability
- **Pre-Booking**: Schedule rides in advance for important appointments
- **Interactive Map**: View your location and track drivers in real-time
- **Fare Calculator**: Get transparent fare estimates before booking
- **Multiple Pages**: Home, Booking, About Us, Contact Us

### For Drivers
- **Driver Dashboard**: Manage ride requests efficiently
- **Accept/Reject Rides**: Choose which rides to accept
- **Wait Charges**: Add wait charges for delayed pickups
- **Complete Rides**: Mark rides as complete and calculate total fare
- **Earnings Tracking**: View daily earnings and statistics

## Tech Stack

### Frontend
- React 18
- React Router for navigation
- Leaflet & React-Leaflet for maps
- Lucide React for icons
- CSS3 for styling

### Backend
- Node.js
- Express.js
- RESTful API architecture

## Installation

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd ridebay-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Backend Setup

1. Navigate to backend directory:
```bash
cd ridebay-backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The API will run at `http://localhost:5000`

## Project Structure

```
ride-bay/
├── ridebay-frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │   │   ├── Booking.js
│   │   │   ├── Booking.css
│   │   │   ├── AboutUs.js
│   │   │   ├── AboutUs.css
│   │   │   ├── ContactUs.js
│   │   │   ├── ContactUs.css
│   │   │   ├── DriverDashboard.js
│   │   │   └── DriverDashboard.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
└── ridebay-backend/
    ├── routes/
    │   ├── bookings.js
    │   └── drivers.js
    ├── server.js
    ├── .env
    └── package.json
```

## API Endpoints

### Bookings
- `POST /api/bookings/create` - Create new booking
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get specific booking
- `PUT /api/bookings/:id/status` - Update booking status

### Drivers
- `GET /api/drivers/available` - Get available drivers
- `POST /api/drivers/:id/accept` - Accept a ride
- `POST /api/drivers/:id/complete` - Complete a ride

## Key Features Explained

### Location Services
The app requests user location permission to show their current position on the map and provide accurate pickup locations.

### Booking Types
1. **Instant Booking**: Immediate ride requests with real-time driver matching
2. **Pre-Booking**: Schedule rides for future dates and times

### Driver Features
- View pending ride requests
- Accept rides to commit to pickup
- Add wait charges for delays
- Complete rides and calculate final fare

### Responsive Design
Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices.

## Future Enhancements

- User authentication and profiles
- Payment gateway integration
- Real-time chat between riders and drivers
- Push notifications
- Ride history and receipts
- Rating and review system
- Multiple vehicle types
- Surge pricing during peak hours

## License

MIT License - feel free to use this project for learning and development.

## Support

For support, email support@ridebay.com or visit our Contact Us page.
