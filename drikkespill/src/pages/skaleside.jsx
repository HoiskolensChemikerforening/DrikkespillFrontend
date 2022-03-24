import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import {useEffect, useState} from "react";
import Image from "../images/HC-logo_vektorisert.png";


export const Skaleside = () => {
    
    useEffect(() => {
        getUsers();
    }, [] )
    const[users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch(`https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/bruker.json`) 
        const data = await response.json();
        setUsers(data);
        console.log(data);
    };
    

    return(
    <>
        <MobileContainer>
            
            <BildeCont>
                <img width="100px" src={Image} alt="a"/>
            </BildeCont>

            <Tittel> SKÅL! </Tittel>
            <Sporsmal> 10 spørsmål </Sporsmal>
            <Knapp onClick={event => window.location.href='/spillside'}> Neste spørsmål </Knapp>


        </MobileContainer>
    </>
    )
};

const Tittel = styled.h1`
    font-size: 2,0em;
    color: dimgrey;
    display flex;
    justify-content: center;
`;

const Sporsmal = styled.h1`
    font-size: 1,5em;
    color: grey;
    display flex;
    justify-content: center;
`;

const Knapp = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:230px; top:200px;
`;

const BildeCont = styled.div`
    width: 85%;
    display: flex; 
    justify-content: center;
    margin: 30px;
`;
