import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import UserProfile from '../pages/UserProfile';

const Main = ({ signUp, login }) => {
  return (
    <div>
      <Routes>
      {/* 
      <LogInForm login={login} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp signUp={signUp}/>} />
        <Route path='/login' element={<LogIn login={login}/>} />
        <Route path='/profile/:username' element={<UserProfile />} />
      </Routes>
    </div>
  )
}

export default Main
