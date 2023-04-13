import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegistrationPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://darts-backend-production.up.railway.app/register/', ({

          username: name,
          password: password,
          score: 0,
          darts_thrown: 0,
          T20_count: 0
        })
      );
      console.log(response)
      navigate('/'); // Redirect to dashboard on successful registration
    } catch (error) {
      console.log(error);
      alert('Registration failed');
    }
  };

  return (
    <form className="flex flex-col items-center justify-center bg-[#F9DFBC] max-w-3x1 p-5 h-screen" onSubmit={handleRegistration}>
      <input
        className='m-1 block max-w-sm mx-auto placeholder:italic 
        placeholder:text-slate-400 block bg-white w-full border-2 border-green-700 rounded-md py-2 pl-3 pr-3 shadow-sm mr-5 focus:outline-none focus:border-4 focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm'
        placeholder='Username'
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <input
        className='m-1 block max-w-sm mx-auto placeholder:italic 
        placeholder:text-slate-400 block bg-white w-full border-2 border-green-700 rounded-md py-2 pl-3 pr-3 shadow-sm mr-5 focus:outline-none focus:border-4 focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm'
        placeholder='Confirm Password'
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className='m-3 px-4 py-2 font-semibold text-sm bg-green-700 hover:bg-green-900 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 ease-in-out duration-300' type="submit">Register</button>
    </form>
  );
}

export default RegistrationPage;
