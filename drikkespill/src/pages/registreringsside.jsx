import {MobileContainer} from "../components/MobileContainer";
import styled from 'styled-components';
import './registreringsside.css';
import React, {useEffect, useState} from "react";
import './spillside.jsx';
import database from "../Firebase/firebase";
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Switch, 
    Route, Redirect, Link,} from "react-router-dom";

export const Registreringsside = () => {

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [pasword, setPasword] = useState("");
    const [ID, setID] = useState("");

    const unique_id = uuid();

    const updateName = e => {
    setName(e.target.value);
    console.log(name)
    }
<<<<<<< HEAD

    const updateNickname = e => {
        setNickname(e.target.value);
        console.log(nickname)
        }

    const updatePasword = e => {
    setPasword(e.target.value);
    console.log(pasword)
    }

    const updateID = e => {
        setID(e.target.value);
        console.log(ID)
        }

    const Push = () => {
        database.ref("drikkespill/bruker/"+unique_id).set({
            navn : name,
            kallenavn : nickname,
            passord: pasword,
            id : unique_id,
        }).catch(alert);
        console.log("Success");
    }

=======
>>>>>>> feat/loginside
    return(
    <>
    <MobileContainer>
        <Background>
        <Header> Ny profil</Header>
        <Bilde onClick={() => console.log('Legg til bilde')}> Legg til bilde </Bilde>
        <RegistrationContainer>
            <form className="Skjema">
                <input className="Brukernavn" type="text" value={name} onChange={updateName} placeholder="Brukernavn"/> 
                <br/><br/>
                <input className="Passord" type="text" value={pasword} onChange={updatePasword} placeholder="Passord"/>
                <br/><br/>
                <input className="Gjenta passord" type="text" value={pasword} readOnly placeholder="Gjenta passord"/>
                <br/><br/>
                <input className="Kallenavn" type="text" value={nickname} onChange={updateNickname} placeholder="Kallenavn"/>
            </form>
            <OpprettBrukerplacement><Link to ="/spillside"><OpprettBruker onClick={Push}>
                Opprett bruker 
                </OpprettBruker></Link></OpprettBrukerplacement>
        </RegistrationContainer>
        </Background>
    </MobileContainer>
    </>
    )
};

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    width: 100%;
    height: 100%;
    background-color: lightgrey;
`;

const Header = styled.div`
    display: flex;
    width:  100%;
    height: 20%;
    justify-content: center;
    font-size: 2em;
    color: black;
    text-align: center;
`;

const OpprettBrukerplacement = styled.div`
    display: flex;
    width: 90%;
    height: 20%;
    justify-content: flex-end;
    align-items: flex-end;
`;

const OpprettBruker = styled.button`
    cursor: pointer;
`;


const RegistrationContainer = styled.div`
    display: flex;
    width:  100%;
    height: 50%;
    align-items: center;
    flex-direction: column;
`;

const Bilde = styled.button`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    width: 30%;
`;

export default Registreringsside;