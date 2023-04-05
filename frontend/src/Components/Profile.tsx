import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import MenuListComposition from './Dropmenu';
interface props{
    backgroundcolor?: string;
}

const ProfileDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
`;

const ProfilePic = styled.div<props>`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    margin-left: 20px;
    margin-right: 10px;
    background-color: ${(props) => props.backgroundcolor};
`;
const Name = styled.div`
    text-align: center;
    font-size: 17pt;
    color: black;
`;

const DropBtn = styled.div`
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;
`;


export default function MainProfile(){
    return(
        <ProfileDiv >
            <Div>
                <ProfilePic backgroundcolor='#000000'/>
                <Name>Ellie</Name>
            </Div>
            <MenuListComposition />
        </ProfileDiv>
    );
}

