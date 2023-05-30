import React from "react";
import './index.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { setUserToken, clearUserToken, getUserToken } from './utils/authToken';
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   setCurrentUser(localStorage.getItem('token') ? currentUser : {})
  //   setIsAuthenticated(localStorage.getItem('token') ? true : false)
  // },[])

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const fetchUser = async () => {
          try {
            const response = await fetch('http://localhost:4000/user', {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            const user = await response.json();
            setCurrentUser(user);
            setIsAuthenticated(true)
            
          } catch(err) {
            console.error('Error fetching user info', err)
          }
        }
        fetchUser();
      }
    }, [])

  

  const signUp = async (data) => {
    try {
      const configs = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    const newUser = await fetch(
      'http://localhost:4000/auth/signup',
      configs
    )
    const parsedUser = await newUser.json()
      console.log(parsedUser)
    setUserToken(parsedUser.token)
      console.log(parsedUser.token)
    setCurrentUser(parsedUser.currentUser)
      console.log(parsedUser.currentUser)
    setIsAuthenticated(true)

    return parsedUser;
  } catch (err) {
    console.log(err)
    clearUserToken();
    setIsAuthenticated(false);
  }
}

const loginUser = async (data) => {
  try {
    const configs = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      'http://localhost:4000/auth/login',
      configs
    )

    if (!response.ok) {
      return false;
    }
    
    const { user, token } = await response.json()
    
    
    setUserToken(token)
    
    setCurrentUser(user)

    setIsAuthenticated(true)

      
    return user
  } catch (err) {
    clearUserToken()
    setIsAuthenticated(false)
    return false;
  }
}





// const renderHeartIcon = (post) => {
//   const isLiked = post.likes.includes(currentUser._id);
//   const heartIcon = isLiked ? "/assets/redHeart.png" : "/assets/heart.png";
//   return (
//     <img onClick={() => handleLike(post._id)} src={heartIcon} alt="like" className="icon" />
//   );
// };

const handleComment = async (postId, commentText) => {
  try {
    const data = {
      text: commentText,
      user: currentUser._id
    };
    const response = await fetch(`http://localhost:4000/art/${postId}/comment`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getUserToken()}`
      }
    });
    const comment = await response.json();
    return comment
    console.log(comment)
  } catch (err) {
    console.error('Error posting comment', err)
  }
}

  return (
    <div className="App">
      <Header user={currentUser} isLoggedIn={isAuthenticated} />
      <Main 
        isLoggedIn={isAuthenticated} 
        signUp={signUp} 
        login={loginUser} 
        user={currentUser}
        comment={handleComment}
        />
      <Footer isLoggedIn={isAuthenticated} setIsLoggedIn={setIsAuthenticated} />
    </div>
  );
}

export default App;
