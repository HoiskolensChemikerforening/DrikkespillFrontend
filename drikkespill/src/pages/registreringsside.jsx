import {MobileContainer} from "../Components/MobileContainer";
import styled from 'styled-components';

export const Registreringsside = () => (
    <>
    <MobileContainer>
        <Column>
            <Row>Ny Profil</Row>
        </Column>
    </MobileContainer>
    </>
    
);


const Row = styled.div`
        display: flex;
        flex-direction: row;
        width:  ;
        justify-content: center;
    `;

const Container = styled.div`
    color: black;
    `;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    `;