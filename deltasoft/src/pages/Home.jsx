// src/pages/Home.jsx
import React from 'react';
import './Home.css'; // Import the new Home.css file

const Home = () => {
  return (
    <div className="home">
      <h2>Boarding and Lodging for your pets</h2>
      <button className="appointment-button">Book Appointment</button>
      <p>Some static content about company provided by client</p>
      <img src="https://linktoimage.com/pets.jpg" alt="Pets" className="pets-image" />
    </div>
  );
}

export default Home;