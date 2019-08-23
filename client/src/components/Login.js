import React, { useEffect } from "react";
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(() => {
    axios.post('http://localhost:5000/api/login', {username: "Lambda School", password: 'i<3Lambd4' })
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => {
        console.log(err);
      });
  })

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
