import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import './spillside.css';
import { PlayerButton } from "../components/playerbutton";


export const Spillside = () => {
    
    const [users, setUsers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [gamerooms, setGamerooms] = useState();
    


    useEffect(() =>{
        getUsers();
        getQuestions();
        getGamerooms();
      },[]);
    
    const getUsers = async () => {
        const response = await fetch(
          `https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/bruker.json`
        );
        const data = await response.json();
        const liste = Object.values(data).slice(0, 8);
        setUsers(liste);
        console.log(liste);
        randomPlayer(liste)
    }


    const getQuestions = async () => {
        const response = await fetch(
          `https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/question.json`);
        const data = await response.json();
        setQuestions(data);
        console.log(data);
        randomQuestion(data); // endrer spm på page refresh
        
    }

    const getGamerooms = async () => {
        const response = await fetch(
            `https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app/drikkespill/gamerooms.json`);
        const data = await response.json();
        setGamestate(data)
        console.log(data)
    }

    const randomListObj = (list, start=0) => {
        let length = list.length;
        const random = Math.floor((Math.random()*(length-start))+start);
        const ranObj = list[random];
        return ranObj;
    }

    const randomPlayer = (users) => {
        console.log("Setting random player");
        const user = randomListObj(users);
        setPlayer(user.kallenavn)

    }

    const randomQuestion = (questions) => {
        console.log("Setting random question");
        const question = randomListObj(questions, 1);
        const display = document.getElementById("question");
        display.textContent = question;
    }

    const setPlayer = (player) => {
        console.log("setting player");
        const display = document.getElementById("player");
        const prompt = "Det er " + player + " sin tur til å velge";
        display.textContent = prompt;
    }


    const updateChoice = (id) => {
        const output = "id: " + id
        console.log(output)
        gamestate.id = id

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
                <Textbox id="player">
                 
                </Textbox>
            </CurrentPlayer>
            </Information>

            
            <Buttons>
                {users.map( (user) => (
                    <Button key={user.id} onClick = {() => {updateChoice(user.kallenavn)}}>{user.kallenavn}</Button>
                )

                )}

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
    width: 100%;
    height20 30%;
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
    grid-template-columns: [first] 49% [line2] 49%;
    column-gap: 2%;
    row-gap
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

    {/* <Button className="hei" onClick={() => console.log('1')}>
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
                </Button> */}