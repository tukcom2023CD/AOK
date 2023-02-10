import React from "react";
import styled from "styled-components";
import MainProfile from "./MainProfile";


const BarDiv = styled.div`
    width: 100vw;
    height: 6rem;
    background-color: 'rgba(0,0,0,1)';
    display: flex;
    

`;
const BarSecondDiv = styled.div`
    display: flex;
    border-style: dashed;
    margin-top: 1.5rem; 
    margin-left: 2rem;
    margin-right: 2rem;
    width: 100%;
    align-items: center;
`;

const Logo = styled.button`
    width : 15rem;
    height: 3rem;
    border-style: none;
    background-color: 'rgba(255,241,158,1)';
`;

const ProfileDiv = styled.div`
    display: flex;
    margin-left: auto;
`;


function UpsideBar() {
    return(
        <BarDiv>
            <BarSecondDiv>
                <Logo>로고(임시)</Logo>
                <ProfileDiv>
                    <MainProfile/>
                </ProfileDiv>
                
            </BarSecondDiv>
        </BarDiv>
    );
}

export default UpsideBar;

