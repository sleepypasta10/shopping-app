import React from 'react';
import "./App.css";
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Home from './components/pages/Home';
import NewArrival from './components/pages/NewArrival';
import Cart from './components/pages/Cart';
import ProductDetail from './components/pages/ProductDetail';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:productId' element={<ProductDetail />}/>
        <Route path='/new-arrival' element={<NewArrival />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
