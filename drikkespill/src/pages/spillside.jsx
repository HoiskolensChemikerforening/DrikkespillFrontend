import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import './spillside.css';

export const Spillside = () => {

    return(

    <>
        <MobileContainer >
            <Background>

            
            <Information>
            <Question>
                <Textbox>
                Et veldig morsomt spørsmål som noen skal svare på
                </Textbox>
            </Question>

            <CurrentPlayer>
                <Textbox>
                Det er Håkon sin tur til å velge 
                </Textbox>
            </CurrentPlayer>
            </Information>

            <Buttons>
                <Button className="hei" onClick={() => console.log('1')}>
                    1
                </Button>
                <Button onClick={() => console.log('2')}>
                    2
                </Button>
                <Button onClick={() => console.log('3')}>
                    3
                </Button>
                <Button onClick={() => console.log('4')}>
                    4
                </Button>
                <Button className="knapp5" onClick={() => console.log('5')}>
                    5
                </Button>
                <button className="test" onClick={() => getUsers()}> test </button>
            </Buttons>


            <Category>
                <Textbox>
                Basic    
                </Textbox>    
            </Category>

            </Background>    
        </MobileContainer>
    </>
)};


const getUsers = async () => {
    const response = await fetch(
      `https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/bruker`
    );
    const users = await response.json();
    console.log(users.hits);
  }


const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #d0d0d0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Textbox = styled.div`
    color: black;
    font-size: 180%;
    text-align: center;
    
`;

const Information = styled.div`
    
    height = 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
`

const Question = styled.div`
    width: 80%;
    height: 50%;
    background-color: #ffffff;
    margin: 5px;
    padding-top: 10%;
` 


const Category = styled.div`
    width: 80%;
    height: 5%;
    background-color: #ffffff;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    
    margin: 10px;

`;

const CurrentPlayer = styled.div`
    width: 80%;
    height: 30%;
    background-color: #ffffff;
    margin: 10px;
`
const Buttons = styled.div`
    width: 80%;
    height: 60%;
    background-color: #ffffff;
    
    
    display: grid;
    grid-template-columns: [first] auto [line2] auto;
    column-gap: 2%;
    row-gap: 1%;
`

const Button  = styled.button`
    
    
    text-align: center;
    background-color: #ff0000;

`

