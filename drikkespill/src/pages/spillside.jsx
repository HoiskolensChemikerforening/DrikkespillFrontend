import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";


export const Spillside = () => (
    <>
        <MobileContainer >
            <Background>
            <Tekstboks>
            Spørsmåljkasdhfjasdh sdlfjalsdjhfasd
            dsfhasdlhf
            adsklfjjhsdaf
            lasdhflasdjhflkasdf
            asdfkl
            </Tekstboks>
            </Background>    
        </MobileContainer>
    </>
);

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
`

const Tekstboks = styled.div`
    color: black;
    font-size: 3vmin;
    text-align: center;
    width: 50%;
    padding-right: 25%;
    padding-left: 25%;
    padding-top: 15%;
    padding-bottom: 60%;
`;


