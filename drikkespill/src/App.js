import './App.css';
import React from "react";
import styled from "styled-components";
import { Startside } from './pages/startside';
import { Loginside } from './pages/loginside';
import { Spillside } from './pages/spillside';
import { Skaleside } from './pages/skaleside';
import { Profil } from './pages/profil';
import { Mellomside } from './pages/mellomside';
import { Oversikt } from './pages/oversikt';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Registreringsside} from "./pages/registreringsside";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/spillside" element={<Spillside/>} />
          <Route path="/login" element={<Loginside/>} />
          <Route path ="/registreringsside" element={<Registreringsside/>} />
          <Route path="/profil" element={<Profil/>} />
          <Route path="/skaleside" element={<Skaleside/>} />
          <Route path ="/mellomside" element={<Mellomside/>} />
          <Route path ="/oversikt" element={<Oversikt/>} />
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
