import React from "react";
import {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import MenuListComposition from './Dropmenu';
interface props{
    backgroundcolor?: string;
}

interface userResponse{
    status: number;
    code: string;
    message: string;
    data: userInfo;
}

interface userInfo{
    email: string;
    uuid: string;
    photo: string;
    nickname: string;
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
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        axios.get<userResponse>('/users/d40051c9-8ae7-4d34-9b3c-b3307d9a9fb7')
        .then(response => {
            setNickname(response.data.data.nickname)
        })
        .catch(error =>{
            console.log(error);
        })
    }, []);

    return(
        <ProfileDiv >
            <Div>
                <ProfilePic backgroundcolor='#000000'/>
                <Name>{nickname}</Name>
            </Div>
            <MenuListComposition />
        </ProfileDiv>
    );
}

