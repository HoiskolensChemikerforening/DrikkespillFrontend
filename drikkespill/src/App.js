import './App.css';
import React from "react";
import styled from "styled-components";
import { Menyside } from './pages/menyside';
import { Loginside } from './pages/loginside';
import { Spillside } from './pages/spillside';
import { Skaleside } from './pages/skaleside';
import { Profil } from './pages/profil';
import { Mellomside } from './pages/mellomside';
import { Endscreen } from './pages/endscreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Registreringsside} from "./pages/registreringsside";

function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="/spillside" element={<Spillside/>} />
          <Route path="/login" element={<Loginside/>} />
          <Route path="/profil" element={<Profil/>} />
          <Route path="/skaleside" element={<Skaleside/>} />
          <Route path ="/mellomside" element={<Mellomside/>} />
          <Route path="/registreringsside" element={<Registreringsside/>} />
          <Route path="/endscreen" element={<Endscreen/>} />
          <Route path="/menyside" element={<Menyside/>} />
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
