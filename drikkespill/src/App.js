import './App.css';
import React from "react";
import styled from "styled-components";
import { Startside } from './pages/startside';
import { Loginside } from './pages/loginside';
import { Spillside } from './pages/spillside';
import { Profil } from './pages/profil';
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
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
