import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { borderRadius } from '@mui/system';
import ClearIcon from '@mui/icons-material/Clear';
import {PropsWithChildren} from "react";
import styled from "styled-components";
import BasicModal from "./Modalcom";
import DragDrop from './DragDrop/DragDrop2';
import ErrorIcon from '@mui/icons-material/Error';

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
        <Button onClick={handleOpen}><ErrorIcon sx={{color: "red"}}/></Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <DragDrop/>

            
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
  width: 100px;
  height: 30px;
  background-color: #FF9198;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  &:hover{
    background-color: #d7777e;
    transition: 0.5s;
  }
`;


  
  const ApplyBtn = styled.button `
  width: 250px;
  height: 75px;
  background-color: #FF9198;
  color: white;
  font-size: 18pt;
  font-weight: bold;
  border-radius: 20px;
  &:hover{
    background-color: #d7777e;
    transition: 0.5s;
  }
`;

