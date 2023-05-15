import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUpForm from './SignUpForm';

const Main = ({ signUp }) => {
  return (
    <div>
      <SignUpForm signUp={signUp}/>
    </div>
  )
}

export default Main
