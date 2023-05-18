import React from 'react'
import { useState } from 'react';
import { getUserToken } from '../utils/authToken';

const NewPost = ({ user }) => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('post submit')
        console.log(getUserToken())
        try {
            const response = await fetch('http://localhost:4000/art/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getUserToken()}`
                },
                body: JSON.stringify({caption, image})
            });
        } catch (err) {
            console.error('Error creating post:', err)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'caption') {
            setCaption(value);
        } else if ( name === 'image') {
            setImage(value)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Caption:</label>
        <input type='text' value={caption} name='caption' placeholder='caption' onChange={handleChange} id='caption'/>
        <br />
        <label>Image URL:</label>
        <input type='text' value={image} name='image' placeholder='image' onChange={handleChange} id='image'/>
        <br />
        <input className="post bg-gradient-to-r from-blue-500 to-purple-500 text-white" type="submit" value="Post" />
      </form>
    </div>
  )
}

export default NewPost
