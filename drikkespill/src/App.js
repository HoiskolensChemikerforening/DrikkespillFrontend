import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from "styled-components";
import { Startside } from './pages/startside';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loginside } from './pages/loginside';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loginside/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

