import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import Image from "../images/HC-logo_vektorisert.png";

export const Loginside = () => (
    <>
        <MobileContainer>
            <Tittel> Drikkespill </Tittel>
            <div>
            <img width="100px"  src={Image} alt="a"/>
            </div>
            <Brukernavn type="text" placeholder="Brukernavn" />
            <Passord type="text" placeholder="Passord"/>

            <Register>
                Registrer deg her
            </Register>
            <LoggInn>
                Logg inn
            </LoggInn>
            <Undertekst>
                Høiskolens Chemikerforening
            </Undertekst>


        </MobileContainer>
    </>
);

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
    color: light-grey;
    text-align: left;
    font-size: x-small;
    position:relative; left 20px; top:360px;
`;
