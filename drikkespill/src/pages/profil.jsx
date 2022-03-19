import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import {useEffect, useState} from "react";
import Image from "../images/dextersquare.png";

export const Profil = () => {
    
    const[users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch(`https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/`) 
        const data = await response.json();
        setUsers(data.hits);
        console.log(data.hits);
    };

    return(

    <>
        <MobileContainer>
            
            <Tittel> Profil </Tittel>
            <BildeCont>
            <img width="250px" src={Image} alt="a"/>
            </BildeCont>

            <EndreBilde onClick={() => console.log('Endre bilde')}> Endre bilde </EndreBilde>
            <Brukernavn> Johannes </Brukernavn>
            <Kallenavn> Kallenavn: Johannes </Kallenavn>
            <NyttKallenavn type="text" placeholder="Nytt kallenavn"/>
            <EndreKallenavn onClick={() => console.log('Endre kallenavn')}> Endre kallenavn </EndreKallenavn>
            <GammeltPassord type="password" placeholder="Gammelt passord"/>
            <NyttPassord type="password" placeholder="Nytt passord"/>
            <GjentaNyttPassord  type="password" placeholder="Gjenta nytt passord"/>
            <EndrePassord onClick={() => console.log('Endre passord')}> Endre passord </EndrePassord>


        </MobileContainer>

    </>
    
    )
};

const Tittel = styled.h1`
    font-size: 1,5em;
    text-align: center;
    color: dimgrey;
    display: flex;
    justify-content: center;
`;

const Brukernavn = styled.div`
    color: black;
    text-align: left;
    display: flex;
    align-items: flex-start;
    margin: 50px 10px 300px 40px;

`;

const Kallenavn = styled.div`
    color:dimgrey;
    text-align: left;
    display: flex;
    align-items: flex-start;
    margin: -300px 50px 100px 40px;
`;

const NyttKallenavn = styled.input`
    color: grey;
    border-radius: 2px;
    width = 20px;
    position:relative; left:40px; top:-95px;   
`;

const EndreBilde = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:230px; top:22px;
`;

const EndreKallenavn = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:-72px; top:-70px;
`;

const EndrePassord = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:-62px; top:3px;
`;

const GammeltPassord = styled.input`
    color: grey;
    border-radius: 2px;
    position:relative; left:40px; top:-50px;
`;

const NyttPassord = styled.input`
    color: grey;
    border-radius: 2px;
    position:relative; left:-113px; top:-25px;
`;

const GjentaNyttPassord = styled.input`
    color: grey;
    border-radius: 2px;
    position:relative; left:40px; top:-21px;
`;

const BildeCont = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`;
