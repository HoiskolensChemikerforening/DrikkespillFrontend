import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import {useEffect, useState} from "react";


export const Menyside = () => {
    
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

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    

    return(
    <>
        <MobileContainer>
            <DropDownContainer> 
            <DropDownHeader onClick={toggling}> Meny </DropDownHeader>
            {isOpen && (
                <DropDownListContainer> 
                    <DropDownList> 
                        <ListItem onClick={event => window.location.href='/login'}> Logg ut </ListItem>
                        <ListItem onClick={event => window.location.href='/profil'}> Se profil </ListItem>
                    </DropDownList>
                </DropDownListContainer>
            )}
            
            </DropDownContainer>
            
            <Tittel> Drikkeleker </Tittel>
            <Spm> 100 spørsmål </Spm>
            <Versions onClick={event => window.location.href="/spillside"}> Basic </Versions>
            <Versions onClick={event => window.location.href="/spillside"}> Drøy </Versions>
            <Spm> Jeg har aldri </Spm>
            <Versions onClick={event => window.location.href="/spillside"}> Basic </Versions>
            <Versions onClick={event => window.location.href="/spillside"}> Drøy </Versions>
        </MobileContainer>
    </>
    )
};


const Tittel = styled.h1`
    font-size: 1,5em;
    display: flex;
    justify-content: flex-start;
    margin-left: 40px;
    color: grey;
    margin-top: -10px;
`;

const Spm = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    margin-left: 40px;
    margin-top: 10px;
`;

const Versions = styled.button`
    font-size: 15px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    margin-left: 60px;
    margin-top: 10px;
    &:hover {
        background-color: pink;
    }
    border: none;
    color: dimgray;
`;

const DropDownContainer = styled.div`
    width: 80px;
    height: 30px;
    background-color: pink;
    margin-left: 340px;
    cursor: pointer;
`;

const DropDownHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

`;

const DropDownListContainer = styled.div`
`;

const DropDownList = styled.ul`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: dimgray;
`;

const ListItem = styled.li`
    list-style: none;
    margin-bottom: 10px;
    margin-top: 5px;
    cursor: pointer;
    &:hover {
        background-color: pink;
    }
    border: none;
    font-size: 15px;
    margin-left: -12px;
`;