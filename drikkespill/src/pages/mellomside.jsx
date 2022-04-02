import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import {useEffect, useState} from "react";

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
    position:relative; left:185px; top:22px;
`;