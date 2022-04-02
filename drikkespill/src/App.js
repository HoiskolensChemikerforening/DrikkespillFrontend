import './App.css';
import React from "react";
import styled from "styled-components";
import { Menyside } from './pages/menyside';
import { Loginside } from './pages/loginside';
import { Spillside } from './pages/spillside';
import { Skaleside } from './pages/skaleside';
import { Profil } from './pages/profil';
import { Mellomside } from './pages/mellomside';
<<<<<<< HEAD
import { Oversikt } from './pages/oversikt';
=======
import { Endscreen } from './pages/endscreen';
>>>>>>> feat/loginside
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Registreringsside} from "./pages/registreringsside";

function App() {
  return (
<<<<<<< HEAD
=======

>>>>>>> feat/loginside
    <div>
      <Router>
        <Routes>
          <Route path="/spillside" element={<Spillside/>} />
          <Route path="/login" element={<Loginside/>} />
          <Route path ="/registreringsside" element={<Registreringsside/>} />
          <Route path="/profil" element={<Profil/>} />
          <Route path="/skaleside" element={<Skaleside/>} />
          <Route path ="/mellomside" element={<Mellomside/>} />
<<<<<<< HEAD
          <Route path ="/oversikt" element={<Oversikt/>} />
=======
          <Route path="/registreringsside" element={<Registreringsside/>} />
          <Route path="/endscreen" element={<Endscreen/>} />
          <Route path="/menyside" element={<Menyside/>} />
>>>>>>> feat/loginside
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
