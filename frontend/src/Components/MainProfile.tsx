import React from "react";
import styled from "styled-components";

interface props{
    backgroundcolor?: string;
}

const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
`;

const ProfilePic = styled.div<props>`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    border-style: dotted;
    margin-right: 1.5rem;
    //background-color: 'rgba(0,0,0,1)';
    background-color: ${(props) => props.backgroundcolor};
`;
const Name = styled.div`
    text-align: center;
    font-size: 17pt;
`;

const DropBtn = styled.div`
    width: 1rem;
    height: 1rem;
    border-style: dotted;
    margin-left: 1rem;

`;
function MainProfile(){
    return(
        <ProfileDiv>
            <ProfilePic backgroundcolor='black'/>
            <Name>김이름</Name>
            <DropBtn/>
        </ProfileDiv>
    );
}

export default MainProfile;