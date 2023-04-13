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
      const response = await axios.post('https://darts-backend-production.up.railway.app/api/token/', {
        username: username,
        password: password
      });
      console.log(response.data)
      localStorage.setItem("access_token1", response.data.access);
      navigate('/Menu'); // Redirect to dashboard on successful login
    } catch (error) {
      console.log(error);
      alert('Login failed');
    }
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center bg-[#F9DFBC] p-5 h-screen'>

        <form className="flex flex-col items-center justify-center"onSubmit={handleLogin}>

          <input
            className='m-1 block max-w-sm mx-auto placeholder:italic 
            placeholder:text-slate-400 block bg-white w-full border-2 border-green-700 rounded-md py-2 pl-3 pr-3 shadow-sm mr-5 focus:outline-none focus:border-4 focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm'
            placeholder='Username'
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='m-1 block max-w-sm mx-auto placeholder:italic 
            placeholder:text-slate-400 block bg-white w-full border-2 border-green-700 rounded-md py-2 pl-3 pr-3 shadow-sm mr-5 focus:outline-none focus:border-4 focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm'
            placeholder='Password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="m-1 object-center bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
        </form>
        <button className="m-1 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/Registration')}>Register</button>
      </div>
    </>
  );
}

export default LoginPage;
