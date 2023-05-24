import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CommentForm from '../components/CommentForm';
import EditDelete from '../components/EditDelete';
import { getUserToken } from '../utils/authToken';

const ShowPost = ({ comment, user }) => {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    

    const fetchPost = async () => {
        try {
            const response = await fetch(`http://localhost:4000/art/${id}`);
            const data = await response.json();
            console.log(data)
            console.log(user.username)
            setPost(data)
            setComments(data.comments)
            setLoading(false);
        } catch (err) {
            console.error('Error fetching post', err);
        };
    };


    useEffect(() => {
        fetchPost();
    }, [])

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4000/art/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getUserToken()}`,
                },
            })
            navigate(`/user/profile/${user.username}`)
        } catch (err) {
            console.error('Error deleting post', err)
        }
    }
    if (loading) {
        return <h1>Loading...</h1>
    }
   

  return (
    <div className='showPage'>
        <div>
            <p className='caption'>{post.post.caption}</p>
        </div>
        <div className='heroPost'>
            <div className='slideshow'>
                <img src={post.post.image } alt='user post' className='slideshowImg' />
            </div>
            <div className='heroPostBottom bg-gradient-to-r from-gray-50 to-stone-300'>
                <div className='iconContainer'>
                    <img src="/assets/redHeart.png" alt="like" className="icon" />
                    <img src="/assets/comments.png" alt="comment" className="icon" />
                </div>
                <Link to={`/user/profile/${post.username}`}><p className='heroPostTag'>{`@${post.username}`}</p></Link>
                </div>
        </div>
        <div className='showPostBtns'>   
           {user._id === post.post.user && <EditDelete handleDelete={handleDelete}/> }
        </div>
        <div>
            <CommentForm postId={id} comment={comment} comments={comments} setComments={setComments} fetchPost={fetchPost}/>
        </div>
    </div>
  )
}

export default ShowPost
