import React from 'react';
import './Login.css';
import { loginEndpoint } from './Spotify';

function Login() {
  return (
    <div className="Login">
      <div className="Login-container">
        <h1 className="Login-title">WrappedGPT</h1>
        <a  className="Login-button" href={loginEndpoint}> Connect to Spotify</a>
      </div>
    </div>
  );
}

export default Login;