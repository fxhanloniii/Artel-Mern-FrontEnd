import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



const UserProfile = ({ user, isLoggedIn }) => {
    const [userPosts, setUserPosts] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                console.log(user.user._id)
                console.log(isLoggedIn)
                
                const response = await fetch(`http://localhost:4000/user/profile/${username}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                    },
                });
                const data = await response.json();
                setUserPosts(data.posts);
            } catch (err) {
                console.error('Error fetching user profile', err)
            }     
    };
    fetchUserProfile(); 
    }, [isLoggedIn, username, user]);

    

  return (
    <div>
      <h2>{username}</h2>
      {userPosts.map((post) => (
        <div key={post._id}>
            <h3>{post.caption}</h3>

        </div>
      ))}
    </div>
  )
}

export default UserProfile
