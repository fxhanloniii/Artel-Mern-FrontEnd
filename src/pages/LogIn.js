import React from 'react';
import LogInForm from '../components/LogInForm';

const LogIn = ({ login }) => {
  return (
    <div>
      <LogInForm login={login} />
    </div>
  )
}

export default LogIn
