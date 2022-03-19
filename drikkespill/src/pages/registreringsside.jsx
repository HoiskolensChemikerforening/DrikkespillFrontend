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
        <Bilde onClick={() => console.log('Legg til bilde')}> Legg til bilde </Bilde>
        <RegistrationContainer>
            <form className="Skjema">
                <input className="Brukernavn" type="text" value={name} onChange={updateName} placeholder="Brukernavn"/>
            </form>
            <form>
                <input className="Passord" type="text" value={name} onChange={updateName} placeholder="Passord"/>
            </form>
            <form>
                <input className="Gjenta passord" type="text" value={name} onChange={updateName} placeholder="Gjenta passord"/>
            </form>
            <form>
                <input className="Kallenavn" type="text" value={name} onChange={updateName} placeholder="Kallenavn"/>
            </form>
        </RegistrationContainer>
        <OpprettBrukerplacement><OpprettBruker onClick={() => console.log('Opprett bruker')}>
                Opprett bruker</OpprettBruker></OpprettBrukerplacement>
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

