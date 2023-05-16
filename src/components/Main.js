import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import Home from '../pages/Home';

const Main = ({ signUp, login }) => {
  return (
    <div>
      <Routes>
      {/* <SignUpForm signUp={signUp}/>
      <LogInForm login={login} /> */}
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default Main
