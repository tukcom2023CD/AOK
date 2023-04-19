import * as React from 'react';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from '../Components/Logincom';
import styled from 'styled-components';
import background_dark from '../Images/background_dark.png';
import Together from '../Images/TeamWork.png';
import { makeStyles } from "@mui/styles";

// const Background = styled.div`
//     width: 960px;
//     height: 1080px;
//     background-image: url(${background_dark});
//     background-position: center;
//     background-repeat: no-repeat;
// `

    const Background2 = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${Together});
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
`

export default function Login2() {
  return (
        <Background2>
            <Box><SignIn/></Box>
        </Background2>
  );
}