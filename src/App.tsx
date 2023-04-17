import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/cadastrousuario" element={<CadastroUsuario />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
