import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserToken } from '../utils/authToken';

const Trending = ({ user, isLoggedIn }) => {
    const [userPosts, setUserPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrending = async () => {
            try { 
                const response = await fetch('http://localhost:4000/user/trending', {
                    headers: {
                        'Authorization': `Bearer ${getUserToken()}`,
                    },
                });
                const data = await response.json();
                setUserPosts(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching user profile', err)
            }     
    };
    fetchTrending(); 
    }, []);

    if (loading) {
        return <div  className='loading'><h1>Loading...</h1></div>
    }

  return (
    <div>
    <h1 className='pageTitle'>Trending</h1>
    <div className='postSection'>
        {userPosts.map((post) => (
            <div key={post._id} className='heroPost'>
                <Link to={`/art/${post._id}`}>
                <div className='slideshow'>
                    <img src={post.image} alt='user post' className='slideshowImg' />
                </div>
                <div className='heroPostBottom bg-gradient-to-r from-gray-50 to-stone-300'>
                    <div className='iconContainer'>
                        <img src="/assets/redHeart.png" alt="like" className="icon" />
                        <img src="/assets/comments.png" alt="comment" className="icon" />
                    </div>
                {/* <p className='heroPostTag'>{`@${username}`}</p> */}
                </div>
                </Link>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Trending