import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Game, Menu, Registration, PostGame }  from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/Registration' element={<Registration />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/Postgame" element={< PostGame />} />
      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
