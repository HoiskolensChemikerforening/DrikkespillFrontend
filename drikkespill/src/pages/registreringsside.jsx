import {MobileContainer} from "../components/MobileContainer";
import styled from 'styled-components';
import './registreringsside.css';
import React, {useEffect, useState} from "react";

export const Registreringsside = () => {

    const [name, setName] = useState("");

    const updateName = e => {
    setName(e.target.value);
    console.log(name)
    }
    return(
    <>
    <MobileContainer>
        <Background>
        <Header> Ny profil</Header>
        <RegistrationContainer>
            <form>
                <input className="Brukernavn" type="text" value={name} onChange={updateName}/>
            </form>
        </RegistrationContainer>
        <Buttonplacement><Button className="createUser">Opprett bruker</Button></Buttonplacement>
        </Background>
    </MobileContainer>
    </>
    )
};

const Background = styled.div`
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    heigth: 100%; 
`;

const Header = styled.div`
    display: flex;
    width:  100%;
    height: 20%;
    justify-content: center;
`;

const Buttonplacement = styled.div`
    display: flex;
    background-color: blue;
    width: 100%;
    height: 20%;
    justify-content: flex-end;
    align-items: flex-end;
`;

const Button = styled.button`

`;

const Text = styled.div`
        display: flex;
        width:  100%;
        justify-content: center;
        flex-direction: cloumn;
    `;

const RegistrationContainer = styled.div`
    display: flex;
    width:  100%;
    height: 50%;
    justify-content: center;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    `;

