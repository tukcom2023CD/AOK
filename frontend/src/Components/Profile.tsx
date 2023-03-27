import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import MenuListComposition from './Dropmenu';
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

    background-color: ${(props) => props.backgroundcolor};
`;
const Name = styled.div`
    text-align: center;
    font-size: 17pt;
    color: white;
`;

const DropBtn = styled.div`
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;

`;


function MainProfile(){
    return(
        <ProfileDiv>
            <ProfilePic backgroundcolor='#FFFFFF'/>
            {/* <Name>ellie</Name> */}
            <MenuListComposition />
        </ProfileDiv>
    );
}

export default MainProfile;