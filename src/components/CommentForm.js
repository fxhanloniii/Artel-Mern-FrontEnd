import React from 'react'
import { useState, useEffect } from 'react';


const CommentForm = ({ comment, postId }) => {
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

      </div>
      <div className='form'>

      </div>
    </div>
  )
}

export default CommentForm
