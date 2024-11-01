import React from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login/*' element={<Login />}></Route>

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App