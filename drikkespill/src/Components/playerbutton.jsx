import styled from "styled-components";
import React from "react";

const PlayerButton = ({name, nickname, id}) => {
    
    return (
    <Button onClick={() => console.log({nickname})}>
        {nickname}
    </Button>
    );
};



export {PlayerButton};


const Button  = styled.button`    
    text-align: center;
    background-color: #ff0000;

`