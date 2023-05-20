import React from 'react'
import { useState, useEffect } from 'react';


const CommentForm = ({ comment, comments, postId, setComments, fetchPost }) => {
    const [commentText, setCommentText] = useState('');
    const [loading, setLoading] = useState(false);

    const commentSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const newComment = await comment(postId, commentText);
            fetchPost();
            setCommentText('');
            console.log(newComment)
            setLoading(false);
        } catch (err) {
            console.error('Error posting comment', err);
            setLoading(false);
        }
    }
    const handleChange = (e) => {
        setCommentText(e.target.value)
    };

    if (loading) {
        return <h1>Loading...</h1>
    } 
  return (
    <div className='commentForm'>
      <div className='comments'>
        {comments && comments.map((com) => (
            <div key={com.id} className='comment'>
                <p className='commenter'>@{com.username}:</p><p>{com.text}</p>
            </div>
        ))}
      </div>
      <div className='commentFormBox'>
        <form onSubmit={commentSubmit}>
            <input 
            placeholder='Write A Comment...'
            value={commentText}
            onChange={handleChange}
            className='commentInput'
            />
            <input className='submit bg-gradient-to-r from-blue-500 to-purple-500' type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default CommentForm
