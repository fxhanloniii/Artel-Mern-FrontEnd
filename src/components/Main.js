import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';

const Main = ({ signUp, login }) => {
  return (
    <div>
      <SignUpForm signUp={signUp}/>
      <LogInForm login={login} />
    </div>
  )
}

export default Main
