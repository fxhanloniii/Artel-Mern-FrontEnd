import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    // Setting Drop Down Menu
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <div className='header bg-gradient-to-r from-gray-600 to-gray-400'>
      <img src='../logo/logo1.png' alt='logo'/>
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
                <Link to='/profile/:id' className='profileButton bg-gradient-to-r from-blue-500 to-purple-500 rounded-md'>Profile</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
