import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Home() {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/user-guides'); // Navigate to the User Guides page
  };

  return (
    <>
      <div className="home-container">
        <div className="home-header">
          <h1>Welcome to the Financial Library</h1>
          <h2>Comprehensive list of "How to Guides"</h2>
        </div>
        <button onClick={handleEnterClick}>Enter</button>
      </div>
    </>
  );
}
