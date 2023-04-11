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
      const response = await axios.post('http://localhost:8000/register/', ({

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
    <form onSubmit={handleRegistration}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationPage;
