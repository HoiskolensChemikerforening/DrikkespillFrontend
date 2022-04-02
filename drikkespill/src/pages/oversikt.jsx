import {MobileContainer} from "../components/MobileContainer";
import styled from 'styled-components';
import './oversikt.jsx';
import React, {useEffect, useState} from "react";
import database from "../Firebase/firebase";
import './spillside.jsx';
import { BrowserRouter as Router, Switch, Route, Redirect, Link,} from "react-router-dom";


export const Oversikt = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    return(
        <>
            <MobileContainer>
            <Background>
                <TopLine>
                <Header>
                    Drikkeleker
                </Header>
                <Main>
                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>|||</DropDownHeader>
                    {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                        <ListItem><Link to ="/profil" style={{ color: 'black', textDecoration: 'none' }}>- Se profil</Link></ListItem>
                        <ListItem><Link to ="/login" style={{ color: 'black', textDecoration: 'none' }}>- Log ut</Link></ListItem>
                        </DropDownList>
                    </DropDownListContainer>
                    )}
                </DropDownContainer>
                </Main>
                </TopLine>
                <Lek>
                    100 spørsmål
                </Lek>
                <Versjon><Link to ="/spillside" style={{ color: 'black', textDecoration: 'none' }}>
                    Basic
                    </Link></Versjon>
                <Versjon><Link to ="/spillside" style={{ color: 'black', textDecoration: 'none' }}>
                    Drøy
                    </Link></Versjon>
            </Background>
            </MobileContainer>
        </>
    )
};

const Header = styled.div`
    display: flex;
    width:  50%;
    height: 5%;
    justify-content: center;
    font-size: 2em;
    color: black;
    text-align: center;
    margin: 20px;
`;

const TopLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 10%;
    width: 100%;
`;

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    width: 100%;
    height: 100%;
    background-color: lightgrey;
    align-items: flex-start;
`;

const Lek = styled.div`
    display: flex;
    width:  50%;
    height: 5%;
    justify-content: center;
    font-size: 1.5em;
    color: black;
    text-align: flex-start;
    margin: 10px;
`;

const Versjon = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px;
    width: 50%;
    color: black;
`;

const Main = styled("div")`
    height: 100vh;
    `;

    const DropDownContainer = styled("div")`
    width: 7em;
    margin: 0 auto;
    `;

    const DropDownHeader = styled("div")`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    font-size: 2em;
    font-weight: 500;
    display: felx;
    justify-content: flex-end;
    margin: 10px;
    transform: rotate(90deg);
    `;

    const DropDownListContainer = styled("div")``;

    const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    font-size: 1.3rem;
    &:first-child {padding-top: 0.8em;}
    `;
    
    const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 0.8em;
    `;