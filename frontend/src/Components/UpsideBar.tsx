import React from "react";
import styled from "styled-components";
import MainProfile from "./MainProfile";


interface props{
    backgroundcolor?: string;
}

const BarDiv = styled.div<props>`
    width: 100vw;
    height: 6rem;
    //background-color: 'rgba(0,0,0,1)';
    display: flex;
    background-color: ${(props) => props.backgroundcolor};
`;

const BarSecondDiv = styled.div`
    display: flex;
    margin-top: 1.5rem; 
    margin-left: 2rem;
    margin-right: 2rem;
    width: 100%;
    align-items: center;
`;

const Logo = styled.button<props>`
    width : 15rem;
    height: 3rem;
    border-style: none;
    //background-color: 'rgba(255,241,158,1)';
    background-color: ${(props) => props.backgroundcolor};
`;

const ProfileDiv = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 2rem;
`;


function UpsideBar() {
    return(
        <BarDiv>
            <BarSecondDiv>
                <Logo backgroundcolor='rgba(255,241,158,1)'>로고(임시)</Logo>
                <ProfileDiv>
                    <MainProfile/>
                </ProfileDiv>
                
            </BarSecondDiv>
        </BarDiv>
    );
}

export default UpsideBar;

