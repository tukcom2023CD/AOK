import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from '../Components/Logincom2';
import styled from 'styled-components';
import background_dark from '../Images/background_dark.png';
import Together from '../Images/TeamWork.png';


    const Background2 = styled.div`
    width: 70vw;
    height: 100vh;
    background-image: url(${Together});
    background-position: center;
    background-repeat: no-repeat;
    `

export default function Login() {
  return (
    <Box display={'flex'} >
      <Box width={'70vw'} height={'100vh'}>
        <Background2 />
      </Box>
      <Box  width={'30vw'} height={'100vh'} bgcolor={'#1A2634'}><SignIn /></Box>
    </Box>
  );
}

