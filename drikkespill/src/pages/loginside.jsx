import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import Image from "../images/HC-logo_vektorisert.png";
import {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, 
    Route, Redirect, Link,} from "react-router-dom";

export const Loginside = () => {
    
    useEffect(() => {
        getUsers();
<<<<<<< HEAD
    },[] )
=======
    }, [] )
>>>>>>> feat/loginside
    const[users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch(`https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/bruker.json`) 
        const data = await response.json();
        setUsers(data);
        console.log(data);
    };
    
    return (

    <>
        <MobileContainer>

            <Tittel> Drikkespill </Tittel>
            <BildeCont>
            <img width="100px" src={Image} alt="a"/>
            </BildeCont>
            <Brukernavn type="text" placeholder="Brukernavn" />
            <Passord type="password" placeholder="Passord"/>

<<<<<<< HEAD
            <Link to = "/registreringsside"><Register onClick={() => console.log('Register')}>
                Registrer deg her
            </Register> </Link>
            <Link to = "/spillside"><LoggInn onClick={() => console.log('Logg inn')} >
=======
            <Register onClick={event => window.location.href='/registreringsside'} >
                Registrer deg her
            </Register>
            <LoggInn onClick={event => window.location.href='/menyside'} >
>>>>>>> feat/loginside
                Logg inn
            </LoggInn></Link>
            <Undertekst>
                Høiskolens Chemikerforening
            </Undertekst>

{/*             <div className="drikkespill">
                {drikkespill.map(data => (
                    <Recipe
                    bruker={data.data.label}
                    question={data.data.label}
                    />
                ))}
            </div> */}

        </MobileContainer>
    </>
    )
};

const Tittel = styled.h1`
    font-size: 1,5em;
    text-align: center;
    color: grey;
`;


const Brukernavn = styled.input`
    color: grey;
    border-radius: 2px;
    width = 50px;
    position:relative; left:50px; top:15px;
 `;

 const Passord = styled.input`
    color: grey;
    border-radius: 2px;
    position:relative; left:65px; top:15px;
 `;

const Register = styled.button`
    color: grey;
    border-radius: 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:50px; top:22px;
`;

const LoggInn = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:185px; top:22px;
`;

const Undertekst = styled.div`
<<<<<<< HEAD
    height: 100%;
=======

>>>>>>> feat/loginside
    color: light-grey;
    text-align: left;
    font-size: x-small;
    display: flex;
    align-items: flex-end;
    margin: 250px 5px 20px 30px;
`;


const BildeCont = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`;

export default Loginside;