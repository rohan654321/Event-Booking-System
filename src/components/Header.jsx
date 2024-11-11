import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/header.css';

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    navigate('/'); 
  };

  return (
    <header className="header">
      <h1>Event Booking System</h1>
      <nav>
        {isLoggedIn ? (
          <>
            <Link to="/home">Home</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/">Login</Link> 
        )}
      </nav>
    </header>
  );
}

export default Header;