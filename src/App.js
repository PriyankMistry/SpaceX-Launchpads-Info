import React from 'react'
import Home from './Components/Home'
import Launches from './Components/Launches'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

export default function App() {
  // const {id} = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/launches/:id' element={<Launches/>}/>
      </Routes>
    </BrowserRouter>
  )
}

