import React, { useState, useEffect } from "react";
import axios from 'axios';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = e => {
    setUsername(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', { username: username, password: password })
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.payload);
        props.history.push('./protected');
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='Username' value={username} onChange={(e) => handleUsername(e)} />
        <input type='text' placeholder='Password' value={password} onChange={(e) => handlePassword(e)} />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
