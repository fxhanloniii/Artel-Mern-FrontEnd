import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import UserProfile from '../pages/UserProfile';
import ShowPost from '../pages/ShowPost';
// import { UserContext } from '../UserContext';

const Main = ({ signUp, login, user, isLoggedIn, comment }) => {
  return (
    <div>
      {/* <UserContext.Provider> */}
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} user={user}/>} />
        <Route path='/signup' element={<SignUp signUp={signUp}/>} />
        <Route path='/login' element={<LogIn login={login}/>} />
        <Route path='/user/profile/:username' element={<UserProfile user={user} isLoggedIn={isLoggedIn} />} />
        <Route path='/art/:id' element={<ShowPost user={user} isLoggedIn={isLoggedIn} comment={comment}/>}/>
      </Routes>
      {/* </UserContext.Provider> */}
    </div>
  )
}

export default Main
