import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import './App.css'
import MainPage from './MainPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <div className = 'container'>
        <Routes>
        <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
