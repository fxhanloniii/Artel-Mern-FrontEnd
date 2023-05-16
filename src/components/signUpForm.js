import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const SignUpForm = ({signUp}) => {
    const initialState = { username: '', email: '', password: '' };
    const [input, setInput] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdUserToken = await signUp(input);

        if (createdUserToken) {
            navigate('/trending');
        } else {
            navigate('/')
        }
        setInput(initialState);
    };

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
  return (
    <div className='form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName: </label>
        <input
          id="username"
          name="username"
          value={input.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          value={input.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          type="password"
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input className="submit bg-gradient-to-r from-blue-500 to-purple-500" type="submit" value="Sign Up" />
      </form>
    </div>
  )
}

export default SignUpForm;
