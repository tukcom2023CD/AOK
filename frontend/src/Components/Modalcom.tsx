import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderRadius } from '@mui/system';
import styled from 'styled-components';

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
`;

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" sx={{fontWeight: 'bold'}} variant="h3" component="h2" align="center">
            Project
          </Typography>
          <InputBox>
            <Typography id="modal-modal-title" sx={{fontWeight: 'bold'}} variant="h6" component="h2" align="left" marginLeft={'125px'}>
              name
            </Typography>
            <InputStyle/>
          </InputBox>
          <BtnBox>
            
          </BtnBox>
        </Box>
      </Modal>
    </div>
  );
}