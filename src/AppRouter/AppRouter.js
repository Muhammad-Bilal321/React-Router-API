import React from 'react';
import NavbarComponent from '../Component/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from '../Pages/Home';
import AllMobiles from '../Pages/AllMobiles';
import Cars from '../Pages/Cars';
import ProductDetails from '../Component/ProductDetails';
import HeaderComponent from '../Component/HeaderComponent';
import MotorCycle from '../Pages/MotorCycle';
import Electronics from '../Pages/Electronics';

export default function AppRouter() {
  return (
    <div>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='mobile-phones' element={<AllMobiles />} />
          <Route path='cars' element={<Cars />} />
          <Route path='motorcycles' element={<MotorCycle/>} />
          <Route path='tv-video-audio' element={<Electronics/>} />
          <Route path='/' element={<HeaderComponent />} /> 
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
