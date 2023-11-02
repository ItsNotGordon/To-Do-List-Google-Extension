import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
// import './App.css'
import Nav from './Nav';
import MainPage from './MainPage.jsx'
import TaskList from './TaskList.jsx'


function App() {

  return (
    <BrowserRouter>
      <Nav/>
        <div className = 'container'>
          <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="tasks" element={<TaskList />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
