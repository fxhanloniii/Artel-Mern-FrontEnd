import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewPost from '../components/NewPost';
import { getUserToken } from '../utils/authToken';

const UserProfile = ({ user, isLoggedIn, like }) => {
    const [userPosts, setUserPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { username } = useParams();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try { 
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/profile/${username}`, {
                    headers: {
                        'Authorization': `Bearer ${getUserToken()}`,
                    },
                });
                const data = await response.json();
                setUserPosts(data.posts);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching user profile', err)
            }     
    };
    fetchUserProfile(); 
    }, [isLoggedIn, username, user]);

    if (loading) {
        return <div  className='loading'><h1>Loading...</h1></div>
    }
    
    const handleNewPost = async (newPost) => {
            setUserPosts((prevPosts) => [newPost, ...prevPosts]);
    }

  return (
    <div>
        <div className='profileHero'>
            <div>
            <h1>@{username}</h1>
            </div>
            {username === user.username &&
            <div className='form'>
                <h2>Share Your Artwork</h2>
                <NewPost user={user} onNewPost={handleNewPost} /> 
            </div> }
        </div>
        <div className='postSection'>
        {userPosts.map((post) => (
            <div key={post._id} className='heroPost'>
                <Link to={`/art/${post._id}`}>
                <div className='slideshow'>
                    <img src={post.image} alt='user post' className='slideshowImg' />
                </div>
                </Link>
                <div className='heroPostBottom bg-gradient-to-r from-gray-50 to-stone-300'>
                    <div className='iconContainer'>
                        <img onClick={() => like(post._id)} src="/assets/redHeart.png" alt="like" className="icon" />
                        <img src="/assets/comments.png" alt="comment" className="icon" />
                    </div>
                <p className='heroPostTag'>{`@${username}`}</p>
                </div>
                
            </div>
        ))}
        </div>
    </div>
  )
}

export default UserProfile
