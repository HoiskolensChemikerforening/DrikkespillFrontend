import {MobileContainer} from "../components/MobileContainer";
import styled from 'styled-components';
import './oversikt.css';
import React, {useEffect, useState} from "react";
import database from "../Firebase/firebase";
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Switch, 
    Route, Redirect, Link,} from "react-router-dom";





export default Oversikt;