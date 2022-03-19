import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import {useEffect, useState} from "react";
import Image from "../images/dextersquare.png";


export const Mellomside = () => {
    
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
    

    return(
    <>
        <MobileContainer>

            <Question>
                <Textbox> Johannes er kulest! </Textbox>
            </Question>
            <BildeCont>
            <img width="250px" src={Image} alt="a"/>
            </BildeCont>
            <PersonStraff> Johannes må </PersonStraff>
            <Straff> RANDOM STRAFF </Straff>

            <Knapp onClick={() => console.log('Neste spørsmål')}> Neste spørsmål </Knapp>

        </MobileContainer>
    </>
    )
};

const Knapp = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:240px; top:100px;
`;

const Question = styled.div`
    width: 80%;
    height: 10%;
    background-color: #ffffff;
    margin: 10px; 
    padding-top: 10%;
    border-style: solid;
    border-color: dimgray;
    border-width: 1px;
    display flex;
    justify-content: center;
    margin-left: 40px;
`;

const Textbox = styled.div`
    color: black;
    font-size: 180%;
    text-align: center;
    border-color: pink;
    display-flex:
    justify-content: center;
`;

const BildeCont = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`;

const PersonStraff = styled.h1`
    color: dimgrey;
    font-size: 1,0em;
    display flex;
    justify-content: center;
`;

const Straff = styled.h1`
    color: black;
    font-size: 1,5em;
    display flex;
    justify-content: center;
    margin-top: -20px;
`;