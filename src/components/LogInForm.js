import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setUserToken } from '../utils/authToken';

const LogInForm = ({ login }) => {
    const initialState = { username: '', password: ''};
    const [input, setInput] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdUserToken = await login(input);

        if (createdUserToken) {
            setUserToken(createdUserToken);
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
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          name="username"
          value={input.username}
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
        <input className="submit bg-gradient-to-r from-blue-500 to-purple-500" type="submit" value="Login" />
      </form>
    </div>
  )
}

export default LogInForm
