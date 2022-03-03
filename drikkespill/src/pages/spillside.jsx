import React from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";


export const Spillside = () => (
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


            <Category>
                <Textbox>
                Basic    
                </Textbox>    
            </Category>

            </Background>    
        </MobileContainer>
    </>
);

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #d0d0d0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    


`;

const Textbox = styled.div`
    color: black;
    font-size: 3vmax;
    text-align: center;
    
`;

const Information = styled.div`
    
    height = 50%;
    display: flex;
    flex-direction: column;

`

const Question = styled.div`
    width: 80%;
    height: 10%;
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
    width: r80%;
    height: r10%;
    background-color: #ffffff;

    margin: 10px;
`
