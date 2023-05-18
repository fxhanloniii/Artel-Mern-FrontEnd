import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ user, isLoggedIn }) => {
    // Setting Drop Down Menu
    const [toggle, setToggle] = useState(false);
    


  return (
    <div className='header bg-gradient-to-r from-gray-600 to-gray-400'>
      <img src='/logo/logo1.png' alt='logo'/>
      <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/trending'>Trending</Link>
            </li>
            <li>
                <Link to='/artroom'>Art Room</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
              {isLoggedIn ? (
                <Link to={`/user/profile/${user.username}`} 
                className='profileButton bg-gradient-to-r from-blue-500 to-purple-500 rounded-md'>Profile</Link>

              ) : ( 
                <Link to='/login'
                className='profileButton bg-gradient-to-r from-blue-500 to-purple-500 rounded-md'>Log In</Link>
              )}
                
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
