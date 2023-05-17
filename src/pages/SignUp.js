import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUp = ({ signUp }) => {
  return (
    <div>
      <SignUpForm signUp={signUp}/>
    </div>
  )
}

export default SignUp
