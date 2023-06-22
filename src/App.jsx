import { useState } from 'react'
import Homepage from './pages/Homepage';
import CarSearch from './pages/CarSearchAndResult';
import CarDetail from './pages/CarDetail'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/CarSearch' element={<CarSearch />}/>
        <Route path='CarSearch/CarDetail' element={<CarDetail />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
