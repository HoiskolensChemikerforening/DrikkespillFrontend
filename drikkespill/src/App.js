import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from "styled-components";
import { Startside } from './pages/startside';
import { Loginside } from './pages/loginside';
import { Spillside } from './pages/spillside';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/spillside" element={<Spillside/>} />
          <Route path="/login" element={<Loginside/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

