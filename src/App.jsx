import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Homepage from './pages/Homepage'
import Editpage from './pages/Editpage'

function App() {
  
  return (
   <div className='App'>
    <h1>Meme Generator</h1>
   <Routes>
     <Route path='/' element={<Homepage />} />
     <Route path='/edit/' element={<Editpage />} />
   </Routes>
   </div>
  )
}

export default App
