import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Game, Menu }  from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/Game" element={<Game />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
