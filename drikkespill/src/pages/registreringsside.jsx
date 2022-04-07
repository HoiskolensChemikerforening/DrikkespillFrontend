import {MobileContainer} from "../components/MobileContainer";
import styled from 'styled-components';
import './registreringsside.css';
import React, {useEffect, useState} from "react";

export const Registreringsside = () => {

    const [name, setName] = useState("");

    const updateName = e => {
    setName(e.target.value);
    console.log(name)
    }
    return(
    <>
    <MobileContainer>
        <Background>
        <Header> Ny profil</Header>
        <RegistrationContainer>
            <Inputten type="text" placeholder="Brukernavn"/>
            <Inputten type="password" placeholder="Passord"/>
            <Inputten type="password" placeholder="Gjenta passord"/>
            <Inputten type="text" placeholder="Kallenavn"/>
        </RegistrationContainer>
        <Buttonplacement>
            <OpprettBruker onClick={event => window.location.href="/profil"}> Opprett bruker </OpprettBruker>
        </Buttonplacement>
        </Background>
    </MobileContainer>
    </>
    )
};

const Background = styled.div`
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    width: 100%;
    height: 100%;
`;

const Header = styled.h1`
    display: flex;
    width:  100%;
    height: 20%;
    justify-content: center;
    font-size: 1,5em;
    color: dimgrey;
    text-align: center;
`;

const Buttonplacement = styled.div`
    display: flex;
    width: 90%;
    height: 20%;
    justify-content: flex-end;
    align-items: flex-end;
`;

const Button = styled.button`

`;

const Text = styled.div`
        display: flex;
        width:  100%;
        justify-content: center;
        flex-direction: cloumn;
    `;

const RegistrationContainer = styled.div`
    display: flex;
    width:  100%;
    height: 50%;
    align-items: center;
    flex-direction: column;
    padding-left: 5px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    margin: 100px; 100px; 100px; 100px;
    `;

const OpprettBruker = styled.button`
    color: gray;
    border-radius: 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:-74px; top:-470px;
`;

const Inputten = styled.input`
    color: grey;
    border-radius: 2px;
    width = 50px;
    display: flex;
    justify-content: center;
    margin:2px;
`;