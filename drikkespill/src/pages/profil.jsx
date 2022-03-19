import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import {useEffect, useState} from "react";

export const Profil = () => {
    
    const[users, setUsers] = useState([]);
    
    const getUsers = async() => {
        const response = await fetch(`https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/`) 
        const data = await response.json();
        setUsers(data.hits);
        console.log(data.hits);
    };

    <>
        <MobileContainer>
            <Tittel> Profil </Tittel>
            <Brukernavn> Brukernavn </Brukernavn>

        </MobileContainer>

    </>
    

};

const Tittel = styled.h1`
    font-size: 1,5em;
    text-align: center;
    color: grey;
`;

const Brukernavn = styled.div`
    color: black;
    text-align: left;
    display: flex;
    align-items: flex-start;
    margin: -300px 10px 100px 80px;

`;

