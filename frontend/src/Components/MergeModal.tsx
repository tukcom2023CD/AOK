import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {PropsWithChildren} from "react";
import styled from "styled-components";
import MergeIcon from '@mui/icons-material/Merge';

interface ModalDefaultType{
    onClickToggleModal: () => void;
}
export default function MergeModal({
        onClickToggleModal,
        children,
    }: PropsWithChildren<ModalDefaultType>) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    return (
    <div>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}
        onClick={handleOpen}>
          <MergeIcon sx={{mr:"5px", fontSize:"20px"}}/>
          <Typography>merge</Typography>
        </Box>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <ImagePrevDiv>
            <ImagePrev>
                <MergeImgPrevDiv>
                  <MergeImgPrev>
                  <img src="img/tino.png" alt="tino" width={'350px'} height={'350px'} />
                  </MergeImgPrev>
                </MergeImgPrevDiv>
            </ImagePrev>
          </ImagePrevDiv>
          
          <TitleDiv>
          <Typography id="modal-modal-title"  variant="h5" component="h5">
            현재 선택한 내용을 메인에 merge합니다. 
          </Typography>
          </TitleDiv>
          
          <BtnBox>
            <CancelBtn onClick={handleClose}> cancel </CancelBtn>
            <CreateBtn> apply </CreateBtn>
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
    width: 900,
    height: 600,
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
    margin-top: 3rem;
  `;
  
  const TitleDiv = styled.div `
    //border: 1px solid black;
    display: flex;
    margin-top: 50px;
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
  const ImagePrevDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ImagePrev = styled.div`
    width: 600px;
    height: 350px;
    background-color: #D9D9D9;
    display: table;
    align-items: center;
    position: relative;
  `;

  //후에 이미지 불러와서 띄울때 사용할 div 
  const MergeImgPrevDiv = styled.div`
    display: table-cell;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  //후에 이미지 불러와서 띄울때 사용할 div 
  const MergeImgPrev = styled.div`
    max-width: 600px;
    max-height: 350px;
  `;