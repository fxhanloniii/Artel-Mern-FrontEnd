import React from 'react'
import Hero from '../components/Hero'
import { useEffect, useState } from 'react';
import { getUserToken } from '../utils/authToken';
import { Link } from 'react-router-dom';

const Home = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:4000/art/', {
          header: {
            'Authorization': `Bearer ${getUserToken()}`,
          },
        });
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching recent posts', err)
      }
    };
    if (isLoggedIn) {
      fetchPosts();
    }
  }, []);

  if (isLoggedIn & loading) {
    return <h1>Loading...</h1>
  }
  if (isLoggedIn) {
    return (
      <div className='postSection'>
        {posts.map((post) => (
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
                {/* <p className='heroPostTag'>{`${post.caption}`}</p> */}
                </div>
                </Link>
            </div>
        ))}
        </div>
    )
  } else {
  return (
    <div>
      <Hero />
    </div>
  )
  }
}

export default Home
