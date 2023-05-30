import React from 'react'
import { getUserToken, clearUserToken } from '../utils/authToken';
import { useNavigate } from 'react-router-dom';


const Footer = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await fetch('http://localhost:4000/auth/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getUserToken()}`,
        }
      });
      clearUserToken();
      setIsLoggedIn(false);
      navigate('/login');
    } catch (err) {
      console.error('Error Logging Out', err)
  }
  }
  return (
    <div className='footer bg-gradient-to-r from-gray-600 to-gray-400'>
      {isLoggedIn && <button className='logout bg-gradient-to-r from-blue-500 to-purple-500' onClick={handleLogout}>LogOut</button> }
    </div>
  )
}

export default Footer
