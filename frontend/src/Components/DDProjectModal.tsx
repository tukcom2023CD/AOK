import * as React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {PropsWithChildren} from "react";
import styled from "styled-components";


interface ModalDefaultType{
    onClickToggleModal: () => void;
}
export default function DDProjectModal({
        onClickToggleModal,
        children,
    }: PropsWithChildren<ModalDefaultType>) {
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const [project, setProject] = useState(''); 
        const navigate = useNavigate();

        const createProject = () => {
          if(project === '') {
            alert('만들 프로젝트의 이름을 입력해주세요.');
          }
          axios.post('/api/v1/projects', {
            name: project,
            userId: 1
            //실험결과 userId는 유저 데이터들 만들어진 순서 id를 의미하는 것으로 보임
          })
          .then((response) => {
            console.log('프로젝트 생성 성공')
            console.log(response)
            //navigate('/Project');
          })
          .catch((error)=> {
            console.log('createProject 실패')
            console.log(error)
            alert("오류로 인해 프로젝트 생성에 실패했습니다.")
          })
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
                  New Project
                </Typography>
                </TitleDiv>
                <InputBox>
                <Typography id="modal-modal-title" sx={{fontWeight: 'bold'}} variant="h6" component="h2" align="left" marginLeft={'125px'}>
                  name
                </Typography>
                <InputStyle type="text" value={project} onChange={(event)=>setProject(event.target.value)}/>
              </InputBox>
              <BtnBox>
                <CreateBtn onClick={createProject}> create </CreateBtn>
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
  width: 300px;
  height: 50px;
  background-color: white;
  color: #FF9198;
  font-size: 20px;
  font-weight: bold;
  border-top: 1px solid #d9d9d9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  
  &:hover{
    background-color: #e1e1e1;
    transition: 0.3s;
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

