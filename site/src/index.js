import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'

import Feed from './pages/Feed';
import Cadastro from './pages/cadastro';
import LandingPage from './pages/landing-page';
import Login from './pages/login';
import Perfil from './pages/perfil';
import EditarPerfil from './pages/editarperfil';
import Projeto from './pages/criarprojeto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/'             element={<App />} />

          <Route path='/Feed'        element={<Feed />} />
          <Route path='/cadastro'     element={<Cadastro />} />
          <Route path='/landing-page' element={<LandingPage />} />
          <Route path='/login'        element={<Login />} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route path='/alterarperfil/:id' element={<Perfil />} /> 
          <Route path='/editarperfil' element={<EditarPerfil/>} />
          <Route path='/criarprojeto' element={<Projeto/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);