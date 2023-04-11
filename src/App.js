import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Game, Menu, Registration }  from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/Registration' element={<Registration />} />
      <Route path="/Game" element={<Menu />} />
      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
