import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import UserProfile from '../pages/UserProfile';
import ShowPost from '../pages/ShowPost';
import Trending from '../pages/Trending';


const Main = ({ signUp, login, user, isLoggedIn, comment, like, heart }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} user={user} like={like}/>} />
        <Route path='/signup' element={<SignUp signUp={signUp}/>} />
        <Route path='/login' element={<LogIn login={login}/>} />
        <Route path='/user/profile/:username' element={<UserProfile user={user} isLoggedIn={isLoggedIn} like={like}/>} />
        <Route path='/art/:id' element={<ShowPost user={user} isLoggedIn={isLoggedIn} comment={comment} like={like} heart={heart}/>}/>
        <Route path='/trending' element={<Trending user={user} isLoggedIn={isLoggedIn} like={like}/>} />
      </Routes>
    </div>
  )
}

export default Main
