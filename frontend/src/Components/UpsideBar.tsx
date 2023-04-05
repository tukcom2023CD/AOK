import * as React from 'react';
import crepeimg from '../Images/crepeimg.png';
import styled from 'styled-components';

const BackgrDiv = styled.div`
    display: flex;
    width: 100%;
    height: 65px;
    background-color: #FF9198;
`;

const LogoDiv = styled.div`
    display: flex;
    margin-left: 20px;
    align-items: center; 
`;

const ImageDiv = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${crepeimg});
    background-position: center;
    background-size: 50px;
    background-repeat: no-repeat;
`; 

const TitleDiv = styled.div`
    font-size: 20pt;
    font-weight: bold;
    color: white;
    margin-left: 15px;
`;


export default function UpsideBar() {
    return(
        <BackgrDiv>
            <LogoDiv>
                <ImageDiv/>
                <TitleDiv>Crepe</TitleDiv>
            </LogoDiv>
            
        </BackgrDiv>
    );
}
