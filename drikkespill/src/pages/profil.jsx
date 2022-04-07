import React, { Profiler } from "react";
import styled from "styled-components";
import { MobileContainer } from "../components/MobileContainer";
import {useEffect, useState} from "react";
import Image from "../images/dextersquare.png";


export const Profil = () => {
    
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

    return(

    <>
        <MobileContainer>
            <Tilbake onClick={event => window.location.href="/menyside"}> Tilbake </Tilbake>
            <Tittel> Profil </Tittel>
            <BildeCont>
            <img width="250px" src={Image} alt="a"/>
            </BildeCont>

            <EndreBilde type="submit" className="edit"> Endre bilde </EndreBilde>
            <Brukernavn> Johannes </Brukernavn>
            <Kallenavn> Kallenavn: Johannes </Kallenavn>
            <NyttKallenavn type="text" placeholder="Nytt kallenavn"/>
            <EndreKallenavn onClick={() => console.log('Endre kallenavn')}> Endre kallenavn </EndreKallenavn>
            <GammeltPassord type="password" placeholder="Gammelt passord"/>
            <NyttPassord type="password" placeholder="Nytt passord"/>
            <GjentaNyttPassord  type="password" placeholder="Gjenta nytt passord"/>
            <EndrePassord onClick={() => console.log('Endre passord')}> Endre passord </EndrePassord>


        </MobileContainer>

    </>
    
    )
};

const Tittel = styled.h1`
    font-size: 1,5em;
    text-align: center;
    color: dimgrey;
    display: flex;
    justify-content: center;
`;

const Brukernavn = styled.div`
    

`;

const Kallenavn = styled.div`
    color:dimgrey;
    text-align: left;
    display: flex;
    align-items: flex-start;
    margin: -300px 50px 100px 40px;
`;

const NyttKallenavn = styled.input`
    color: grey;
    border-radius: 2px;
    width = 20px;
    position:relative; left:40px; top:-95px;   
`;

const EndreBilde = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:230px; top:22px;
`;

const EndreKallenavn = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:-72px; top:-70px;
`;

const EndrePassord = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:-62px; top:3px;
`;

const GammeltPassord = styled.input`
    color: grey;
    border-radius: 2px;
    position:relative; left:40px; top:-50px;
`;

const NyttPassord = styled.input`
    color: grey;
    border-radius: 2px;
    position:relative; left:-113px; top:-25px;
`;

const GjentaNyttPassord = styled.input`
    color: grey;
    border-radius: 2px;
    position:relative; left:40px; top:-21px;
`;

const BildeCont = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`;

const Tilbake = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:10px; top:10px;
`;

const ImgUpload = ({
    onChange,
    src
}) =>
    <label htmlFor="photo-upload" className="custom-file-uploard fas">
        <div className="img-wrap img-upload">
            <img for="photo-upload" src={src}/>
        </div>
        <input id="photo-upload" type="file" onChange={onChange}/>
    </label>

const Edit =({
    onSubmit,
    children
})=>
    <div className="card">
        <form onSubmit={onSubmit}>
            {children}
            <button type="submit" className="save"> Save </button>
        </form>
    </div>

const Profile =({
    onSubmit, src,
    })=>
    <div className='card'>
        <form onSubmit={onSubmit}>
            <label className="customfile-upload fas">
                <div className="img-wrap">
                    <img for="photo-upload" src={src}/>
                </div>
            </label>
        </form>

    </div>

class CardProfile extends React.Component {
    state = {
        file: '',
        imagePreviewUrl:'https://raw.githubusercontent.com/OlgaKoplik/CodePen/master/profile.jpg',
        active: 'edit'
    }

    photoUpload = e =>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    handleSubmit = e =>{
        e.preventDefault();
        let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
        this.setState({
            active: activeP
        })
    }

    render() {
        const {imagePreviewUrl, name, status, active} = this.state;
        return (
            <div>
                {(active === 'edit')?(
                    <Edit onSubmit={this.handleSubmit}>
                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
                    </Edit>
                ):(
                    <Profile
                        onSubmit={this.handleSubmit}
                        src = {imagePreviewUrl}/>
                )}
            </div>
        )
    }
}

/* https://codepen.io/OlgaKoplik/pen/ZdyKGY */