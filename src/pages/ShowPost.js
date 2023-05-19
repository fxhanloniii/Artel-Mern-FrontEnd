import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ShowPost = () => {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:4000/art/${id}`);
                const data = await response.json();
                setPost(data)
                setLoading(false);
                console.log(data)
            } catch (err) {
                console.error('Error fetching post', err);
            };
        };
        fetchPost();
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
  return (
    <div className='showPage'>
        <div className='heroPost'>
            <div className='slideshow'>
                <img src={post.post.image } alt='user post' className='slideshowImg' />
            </div>
            <div className='heroPostBottom bg-gradient-to-r from-gray-50 to-stone-300'>
                <div className='iconContainer'>
                    <img src="/assets/redHeart.png" alt="like" className="icon" />
                    <img src="/assets/comments.png" alt="comment" className="icon" />
                </div>
                <p className='heroPostTag'>{`@${post.username}`}</p>
                </div>
        </div>
        <div className='showPostBtns'>
            
        </div>
    </div>
  )
}

export default ShowPost
