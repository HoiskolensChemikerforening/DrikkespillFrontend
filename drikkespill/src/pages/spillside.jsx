import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import './spillside.css';


export const Spillside = () => {
    
    const [users, setUsers] = useState([]);
    const [questions, setQuestions] = useState([]);
    


    useEffect(() =>{
        getUsers();
        getQuestions();
      },[]);
    
    const getUsers = async () => {
        const response = await fetch(
          `https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/bruker.json`
        );
        const data = await response.json();
        setUsers(data);
        console.log(data);
    }


    const getQuestions = async () => {
        const response = await fetch(
          `https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/question.json`);
        const data = await response.json();
        setQuestions(data);
        console.log(data);
    }


    const randomQuestion = async () => {
        let length = questions.length;
        const random = Math.floor((Math.random()*(length-1))+1);
        const question = questions[random];
        const display = document.getElementById("question");
        display.textContent = question
    }

    const setName = (button) => {
        console.log("setting name")
        const display = document.getElementById(button);
        console.log()
        /* console.log(users.044.kallenavn); */

    }
    
    return(

    <>
        <MobileContainer >
            <Background>

            
            <Information>
            <Question>
                <Textbox id="question">
                    question
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
                <Button id="2" onClick={() => console.log('2')}>
                    2
                </Button>
                <Button id="3" onClick={() => console.log('3')}>
                    3
                </Button>
                <Button id="4" onClick={() => setName("4")}>
                    4
                </Button>
                <Button id="5" className="knapp5" onClick={() => console.log(randomQuestion())}>
                    5
                </Button>
            </Buttons>


            <Category>
                <Textbox>
                Basic    
                </Textbox>    
            </Category>

            </Background>    
        </MobileContainer>
    </>

    )
};



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
    padding-top: 5%;
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
    height: 50%;
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


/* const getUsers = async () => {
        const response = await fetch(
          `https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/bruker`
        );
        const users = await response.json();
        console.log(users.hits);
      } */
    
    
    /* const firebaseConfig = {
        apiKey: "AIzaSyAs6zRmpXmZlmmDeCtOFeulxo4v0qPtIeA",
        authDomain: "drikkespill-c7188.firebaseapp.com",
        databaseURL: "https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "drikkespill-c7188",
        storageBucket: "drikkespill-c7188.appspot.com",
        messagingSenderId: "879998514120",
        appId: "1:879998514120:web:fd38ab2f8c6014bb42c6fd",
        measurementId: "G-63HY1WKNT8"
    };
      
      // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

     */