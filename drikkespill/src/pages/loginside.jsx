import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import Image from "../images/HC-logo_vektorisert.png";
import {useEffect, useState} from "react";

export const Loginside = () => {
    
    useEffect(() => {
        getUsers();
    } )
    const[users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch(`https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/bruker`) 
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

            <Register onClick={() => console.log('Register')}>
                Registrer deg her
            </Register>
            <LoggInn onClick={() => console.log('Logg inn')} >
                Logg inn
            </LoggInn>
            <Undertekst>
                Høiskolens Chemikerforening
            </Undertekst>


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
    height: 100%;
    color: light-grey;
    text-align: left;
    font-size: x-small;
    display: flex;
    align-items: flex-end;
    margin: 10px 5px 20px 30px;
`;


const BildeCont = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`;
