import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import UpsideBar from './Components/UpsideBar';
import { Typography, Button } from '@mui/material';
import ImgList from './Components/ImgList';

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
                <Box display={'flex'} justifyContent={'flex-end'} width={'100vw'} marginTop={'80px'} paddingX={'140px'}>
                    <Typography variant='h5' fontWeight={'bolder'}>Projects</Typography> 
                    <Button
                    variant='contained'
                    sx={{color:'white', backgroundColor:'#FF9198', borderRadius:'8px', ml:'490px'}}
                    >create
                    </Button>
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
                <ImgList/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
