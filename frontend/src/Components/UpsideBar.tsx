import * as React from 'react';
import crepeimg from '../Images/crepeimg.png';
import styled from 'styled-components';
import Profile from '../Components/Profile';


const BackgrDiv = styled.div`
    display: flex;
    width: 100%;
    height: 65px;
    background-color: #F1F1F1;
`;

const LogoDiv = styled.div`
    display: flex;
    margin-left: 20px;
    align-items: center; 
`;

const ImageDiv = styled.div`
    width: 45px;
    height: 45px;
    background-image: url(${crepeimg});
    background-position: center;
    background-size: 45px;
    background-repeat: no-repeat;
`; 

const TitleDiv = styled.div`
    font-size: 20pt;
    font-weight: bold;
    color: #534D4D;
    margin-left: 15px;
    margin-bottom: 5px;
`;

const ProfileDiv = styled.div `
    display: flex;
    margin-left: auto;
    align-items: center;

`;

export default function UpsideBar() {
    return(
        <BackgrDiv>
            <LogoDiv>
                <ImageDiv/>
                <TitleDiv>Crepe</TitleDiv>
            </LogoDiv>
            
            <ProfileDiv>
                <Profile/>
            </ProfileDiv>
        </BackgrDiv>
    );
}
