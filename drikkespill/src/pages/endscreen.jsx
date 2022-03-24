import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import {useEffect, useState} from "react";
import Image from "../images/dextersquare.png";
import Image2 from "../images/Tom-and-Jerry.jpg";
import Image3 from "../images/images.png";

export const Endscreen = () => {
    
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
            <Ferdig> Spillet er over </Ferdig>
            <Box1>
                <Textbox> 1 </Textbox>
            </Box1>
            <Box2>
                <Textbox> 2 </Textbox>
            </Box2>
            <Box3>
                <Textbox> 3 </Textbox>
            </Box3>
            <BildeCont1>
            <img width="160px" src={Image} alt="a"/>
            </BildeCont1>
            <BildeCont2>
            <img width="120px" src={Image2} alt="a"/>
            </BildeCont2>
            <BildeCont3>
            <img width="120px" src={Image3} alt="a"/>
            </BildeCont3>
            <Knapp onClick={event => window.location.href='/menyside'}> Avslutt </Knapp>
        </MobileContainer>
    </>
    )
};

const Ferdig = styled.h1`
    color: dimgrey;
    font-size: 1,0em;
    display flex;
    justify-content: center;
    margin-top: 15%;
`;

const Box1 = styled.div`
    width: 32%;
    height: 10%;
    background-color: #ffffff;
    margin: 10px; 
    padding-top: 10%;
    border-style: solid;
    border-color: dimgray;
    border-width: 1px;
    display flex;
    justify-content: center;
    margin-left: 140px;
    margin-top: 160px;
`;

const Box2 = styled.div`
    width: 32%;
    height: 5%;
    background-color: #ffffff;
    margin: 10px; 
    padding-top: 6%;
    padding-bottom:6%;
    border-style: solid;
    border-color: dimgray;
    border-width: 1px;
    display flex;
    justify-content: center;
    margin-left: 14px;
    margin-top: -99px;
`;

const Box3 = styled.div`
    width: 32%;
    height: 5%;
    background-color: #ffffff;
    margin: 10px; 
    padding-top: 2%;
    padding-bottom: 2%;
    border-style: solid;
    border-color: dimgray;
    border-width: 1px;
    display flex;
    justify-content: center;
    margin-left: 266px;
    margin-top: -68px;
`;

const Textbox = styled.div`
    color: black;
    font-size: 180%;
    text-align: center;
    border-color: pink;
    display-flex:
    justify-content: center;
`;

const BildeCont1 = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    margin-top: -60%;
`;

const BildeCont2 = styled.div`
    width: 100%;
    display: flex; 
    justify-content: flex-start;
    margin-top: -13%;
    margin-left: 15px;
`;

const BildeCont3 = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -10%;
`;

const Knapp = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    display: flex;
    justify-content: flex-end;
    margin-left: 350px;
    margin-top: 230px;
`;

const Tilbake = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:10px; top:10px;
`;