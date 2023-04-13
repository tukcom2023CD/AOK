import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import UpsideBar from '../Components/UpsideBar';
import { Typography, Button } from '@mui/material';
import ImgList from '../Components/ImgList';
import { BtnStyle } from '../Components/Button';


const CreateBtn = styled.button `
  width: 80px;
  height: 30px;
  background-color: #FF9198;
  color: white;
  font-size: 10x;
  font-weight: bold;
  border-radius: 8px;
  &:hover{
    background-color: #d7777e;
    transition: 0.5s;
  }
`;

export const theme = createTheme({
    palette: {
    primary: {
        main: "#FF9198",
    },
    secondary: {
        main: "#FFFFFF",
    },
    },
});

export const button = styled.button`
    transform: 'translate(Y)(2)'
`

export default function Main() {

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }}>
                <UpsideBar/>
                <Box display={'flex'} justifyContent={'center'} width={'100vw'} marginTop={'5rem'}>
                    <Box display={'flex'} justifyContent={'center'}  width={'33%'}></Box>
                    <Box display={'flex'} justifyContent={'center'}  width={'33%'}><Typography variant='h5' fontWeight={'bolder'} ml={'0rem'} alignContent={'center'}  >Projects</Typography></Box> 
                    <Box width={'26%'} display={'flex'} justifyContent={'center'}>
                    <CreateBtn
                    >create
                    </CreateBtn>
                    </Box>
                    <Box width={'7%'}></Box>
                    
                    
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
                <ImgList/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}