import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";

export const Profil = () => (
    <>
        <MobileContainer>
            <Tittel> Profil </Tittel>
            <Brukernavn> Brukernavn </Brukernavn>

        </MobileContainer>

    </>
);

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

