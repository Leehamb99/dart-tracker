import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/token/', { 
        username: username,
        password: password
       });
       console.log(response.data)
      localStorage.setItem("access_token", response.data.access);
      navigate('/Game'); // Redirect to dashboard on successful login
    } catch (error) {
      console.log(error);
      alert('Login failed');
    }
  };

  return (
    <>
    <form onSubmit={handleLogin}>
      <label htmlFor="Username">Username</label>
      <input
        type="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      <button type="submit">Login</button>
    </form>
        <button onClick={() => navigate('/Registration')}>Register</button>
        </>
  );
}

export default LoginPage;
