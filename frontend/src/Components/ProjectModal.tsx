import * as React from 'react';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {PropsWithChildren} from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { setBranchUuid } from './Redux/BranchSlice';
import axios from 'axios';

interface BranchResponse {
  status: number;
  code: string;
  message: string;
  data: BranchInfo; 
}

interface BranchInfo {
  uuid: string;
}

interface ModalDefaultType{
    onClickToggleModal: () => void;
}
export default function BranchModal({
        onClickToggleModal,
        children,
    }: PropsWithChildren<ModalDefaultType>) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const [branch, setBranch] = useState(''); 

        const createBranch = () => {
          if(branch === '') {
            alert('만들 브랜치의 이름을 입력해주세요.');
          }else{
            axios.post('/api/v1/branches', {
              name: branch,
              projectId: 1
            })
            .then((response) => {
              console.log('브랜치 생성 성공')
              console.log(response)
  
              const uuidData = response.data.data.uuid
              console.log("발급된 브랜치 uuid : ", uuidData)
              dispatch(setBranchUuid(uuidData));
              console.log("dispatch : ", branch);
              navigate('/Project');
              window.location.reload();
            })
            .catch((error)=> {
              console.log('createBranch 실패')
              console.log(error)
              alert("오류로 인해 브랜치 생성에 실패했습니다.")
            })
          }
          
        }

    return (
    <div>
        <Btn onClick={handleOpen}>create</Btn> 
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <TitleDiv>
            <Typography id="modal-modal-title" sx={{fontWeight: 'bold'}} variant="h3" component="h3">
              New Branch
            </Typography>
            </TitleDiv>
            <InputBox>
            <Typography id="modal-modal-title" sx={{fontWeight: 'bold'}} variant="h6" component="h2" align="left" marginLeft={'125px'}>
              name
            </Typography>
            <InputStyle type="text" value={branch} onChange={(event)=>setBranch(event.target.value)}/>
          </InputBox>
          <BtnBox>
            <CreateBtn onClick={createBranch}> create </CreateBtn>
          </BtnBox>
        </Box>
      </Modal>
    </div>
    );
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 940,
    height: 600,
    borderRadius: 6,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };

  const Btn = styled.button`
  width: 16vw;
  height: 2.3vw;
  margin-top: 10px;
  background-color: #F7B5A5;
  font-size: 16px;
  font-weight: bold;
  &:hover{
    background-color: #ececec;
    transition: 0.5s;
  }
`;

  
  const CreateBtn = styled.button`
    width: 830px;
    height: 75px;
    background-color: #FF9198;
    border: none;
    border-radius: 10px;
    font-size: 20pt;
    font-weight: bold;
    color: white;
    &:hover{
      background-color: #d7777e;
      transition: 0.5s;
    }
  `;
  
  const InputBox = styled.div`
    text-align: center;
    margin-top: 8rem;
  `;
  
  const InputStyle = styled.input`
    width: 630px;
    height: 75px;
    border: 1px solid #CFCFCF;
    border-radius: 10px;
    font-size: 20pt;
    font-weight: bold;
    padding: 1.5rem;
  `;
  
  const BtnBox = styled.div`
    text-align: center;
    margin-top: 9.3rem;
  `;
  
  const TitleDiv = styled.div `
    //border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  `;
  
  const TypoBox = styled.div `
    text-align: center;
  `;
  
  const CancelBox = styled.div `
    
    position: absolute;
    right: 0;
    margin-right: 50px;
    
  `

