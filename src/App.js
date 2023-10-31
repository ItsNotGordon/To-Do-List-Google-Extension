import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
// import './App.css'
import Nav from './Nav';
import MainPage from './MainPage.js'


function App() {

  return (
    <BrowserRouter>
      <Nav/>
        <div className = 'container'>
          <Routes>
          <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
