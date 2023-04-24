import React from "react";
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUuid } from "./Redux/UserSlice";
import {RootState} from './Redux/Store'; 
import styled from "styled-components";
import axios from 'axios';
import MenuListComposition from './Dropmenu';
interface props{
    backgroundcolor?: string;
}

interface userResponse{
    status: string;
    code: string;
    message: string;
    data: userInfo;
}

interface userInfo{
    email: string;
    nickname: string;
    photo: string;
    uuid: string; 
}

interface userUuid{
    uuid: string; 
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
    const [Uuid, setUuidState] = useState('');
    /*1.Postman에서 만든 User 데이터의 uuid로 데이터 조회 테스트*/

    // useEffect(() => {
    //     //테스트 값으로 postman 상에서 데이터를 만들어서 잘 가져와지나 테스트
    //     //users 값 뒤의 uuid를 통해 가져와지나 확인
    //     axios.get<userResponse>('/users/d40051c9-8ae7-4d34-9b3c-b3307d9a9fb7')
    //     .then(response => {
    //         setNickname(response.data.data.nickname)
    //     })
    //     .catch(error =>{
    //         console.log(error);
    //     })
    // }, []);

    /*2.임의로 데이터 하나를 post해서(post로 회원가입 과정을 거쳤다고 가정) 받는 uuid 값으로 테스트*/
    //ProfilePic onclick 했을 때 데이터 저장되도록 설정하였음

    const dispatch = useDispatch();
    const createTestData = () => {
        axios.post('/api/v1/users',{
            email: 'test13@naver.com',
            password: '1111',
            photo: '1111',
            nickname: 'test10'
        })
        .then((response) => {
            console.log("성공적으로 생성완료")
            console.log(response)

            //uuid useState에 uuid값 저장
            const uuidData = response.data.data.uuid
            console.log("발급된 uuid : ", uuidData)
            const disp = dispatch(setUuid(uuidData))
            console.log("안녕",disp)
            setUuidState(response.data.data.uuid)
            

        })
        .catch((error)=> {
            console.log("createTestData 실패")
            console.log(error);
        })
    }
    

    

    useEffect(()=>{
        (async () => {
            await axios.get<userResponse>('/api/v1/users/'+ Uuid)
            .then((response)=>
                {setNickname(response.data.data.nickname)
                console.log("닉네임 불러오기 성공")
                })
            .catch((error)=>{
                console.log("닉네임 불러오기 실패")
                console.log(error)
            })
        })();
    },[]);

    return(
        <ProfileDiv >
            <Div>
                <ProfilePic backgroundcolor='#000000' onClick={createTestData}/>
                <Name>{nickname}</Name>
            </Div>
            <MenuListComposition />
        </ProfileDiv>
    );
}

