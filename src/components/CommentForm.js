import React from 'react'
import { useState, useEffect } from 'react';


const CommentForm = ({ comment, comments, postId }) => {
    const [commentText, setCommentText] = useState('');

    const commentSubmit = async (e) => {
        e.preventDefault();
        try {
            await comment(postId, commentText);
            setCommentText('');
        } catch (err) {
            console.error('Error posting comment', err)
        }
    }
    const handleChange = (e) => {
        setCommentText(e.target.value)
    };
  return (
    <div className='commentForm'>
      <div className='comments'>
        {comments.map((com) => (
            <div key={com._id} className='comment'>
                <p className='commenter'>@{com.username}:</p><p> {com.text}</p>
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
