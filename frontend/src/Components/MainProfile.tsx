import React from "react";
import styled from "styled-components";
import MenuListComposition  from "./Dropmenu";
import { AiFillCaretDown } from "react-icons/ai";

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
    margin-right: 1.5rem;
    background-color: ${(props) => props.backgroundcolor};
`;
const Name = styled.div`
    text-align: center;
    font-size: 17pt;
`;

const DropBtn = styled.div`
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;
    border: dotted;
`;

function MainProfile(){
    return(
        <ProfileDiv>
            <ProfilePic backgroundcolor='#FFF19E'/>
            <Name>크레페</Name>
            <MenuListComposition/>
        </ProfileDiv>
    );
}

export default MainProfile;