import './App.css';
import React from "react";
import styled from "styled-components";
import { Startside } from './pages/startside';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Registreringsside} from "./pages/registreringsside";
import {MobileContainer} from "./Components/MobileContainer";

function App() {
  return (
    <>
      <Registreringsside/>
  </>
  );
}

export default App;
