import * as React from 'react';
import crepeimg from '../Images/crepeimg.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BackgrDiv = styled.div`
    display: flex;
    width: 100%;
    height: 65px;
    background-color: #8292A5;
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
    color: white;
    margin-left: 15px;
    margin-bottom: 5px;
`;


export default function UpsideGray() {
    const navigate = useNavigate();
    const Logonavigate = () => {
        navigate("/main")
        window.location.reload()
    };

    return(
        <BackgrDiv>
            <LogoDiv onClick = {Logonavigate}>
                <ImageDiv/>
                <TitleDiv>Crepe</TitleDiv>
            </LogoDiv>
            
        </BackgrDiv>
    );
}
