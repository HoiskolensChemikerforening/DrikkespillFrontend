import {MobileContainer} from "../Components/MobileContainer";
import styled from 'styled-components';

export const Registreringsside = () => (
    <>
    <MobileContainer>
        <Container>
            <Text >Ny profil</Text>
            <RegistrationContainer>
                <Text >Brukernavn</Text>
                <Text >Ny profil</Text>
                <Text >Passord</Text>
                <Text >Kallenavn</Text>
            </RegistrationContainer>   
            <Text >Opprett bruker</Text>
        </Container>
    </MobileContainer>
    </>
);




const Text = styled.div`
        display: flex;
        width:  100%;
        justify-content: center;
        flex-direction: cloumn;
    `;

const RegistrationContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-around;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    `;

const Column = styled.div`
    display: flex;
`;

    const RowEnd = styled.div`
    display: flex;
    flex-direction: row;
    width:  ;
    justify-content: flex-end;
`;
