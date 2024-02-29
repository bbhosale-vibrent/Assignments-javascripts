import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// function Logout() {
  const Logout = () => {
    const navigate = useNavigate();

    console.log("Logging out");
    localStorage.removeItem('login');
    console.log("login status removed from local storage");
    navigate('/login');
    console.log("naviagte to login page");

  }
  


export default Logout
