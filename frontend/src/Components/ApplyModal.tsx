import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {PropsWithChildren} from "react";
import styled from "styled-components";

interface ModalDefaultType{
    onClickToggleModal: () => void;
}
export default function ApplyModal({
        onClickToggleModal,
        children,
    }: PropsWithChildren<ModalDefaultType>) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    return (
    <div>
        <Btn onClick={handleOpen}>apply</Btn> 
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <TitleDiv>
            <Typography id="modal-modal-title"  variant="h5" component="h5">
              branch를 현재 log로 적용합니다.
            </Typography>
            </TitleDiv>
          
          <BtnBox>
            <CancelBtn> cancel </CancelBtn>
            <CreateBtn> accept </CreateBtn>
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
    width: 600,
    height: 280,
    borderRadius: 6,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };

  const Btn = styled.button`
  width: 180px;
  height: 50px;
  color: white;
  background-color: #FF9198;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  
  &:hover{
    background-color: #d7777e;
    transition: 0.3s;
  }
`;

  
  const CreateBtn = styled.button`
    width: 200px;
    height: 50px;
    background-color: #FF9198;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    &:hover{
      background-color: #d7777e;
      transition: 0.5s;
    }
  `;

  const CancelBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 10px;
  margin-right: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #555555;
  &:hover{
    background-color: #b6b6b6;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  `;
  
  const TitleDiv = styled.div `
    //border: 1px solid black;
    display: flex;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    //margin: auto;
  `;
  
  const TypoBox = styled.div `
    text-align: center;
  `;
  
  const CancelBox = styled.div `
    
    position: absolute;
    right: 0;
    margin-right: 50px;
    
  `

