import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {PropsWithChildren} from "react";
import styled from "styled-components";

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
            <InputStyle/>
          </InputBox>
          <BtnBox>
            <CreateBtn> create </CreateBtn>
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
  background-color: white;
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

