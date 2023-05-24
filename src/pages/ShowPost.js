import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CommentForm from '../components/CommentForm';
import EditDelete from '../components/EditDelete';
import { getUserToken } from '../utils/authToken';

const ShowPost = ({ comment, user }) => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [caption, setCaption] = useState('');
    const [editing, setEditing] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    

    const fetchPost = async () => {
        try {
            const response = await fetch(`http://localhost:4000/art/${id}`);
            const data = await response.json();
            console.log(data)
            setPost(data)
            setCaption(data.post.caption)
            console.log(user.username)
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

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:4000/art/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getUserToken()}`,
                },
                body: JSON.stringify({ caption }),
            });
            const data = await response.json();
            setPost(data);
            setCaption(data.caption)
            setEditing(false);
            fetchPost();
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
            {editing ? ( 
                <form className='editForm' onSubmit={handleEdit}>
                <input type='text' placeholder={post.post.caption} value={caption} onChange={(e) => setCaption(e.target.value)} className='caption'/>
                <div className='showPostBtns'>
                <button type='submit' value='Save' className='save bg-gradient-to-r from-blue-500 to-purple-500'>Save</button>
                <button onClick={() => setEditing(false)} className='save bg-gradient-to-r from-blue-500 to-purple-500'>Cancel</button>
                </div>
                </form>
            ) : ( 
            <p className='caption'>{post.post.caption}</p>
            )}
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
           {user._id === post.post.user && <EditDelete handleDelete={handleDelete} setEditing={setEditing}/> }
        </div>
        <div>
            <CommentForm postId={id} comment={comment} comments={comments} setComments={setComments} fetchPost={fetchPost} user={user}/>
        </div>
    </div>
  )
}

export default ShowPost
