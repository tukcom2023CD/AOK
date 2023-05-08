import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import ColorTabs from './ColorTab';
import MainProfile from './Profile';
import { Container } from '@mui/material';

export const theme = createTheme({
    palette: {
    primary: {
        light: "#838383",
        main: "#FF9198",
        dark: "#FFEFEF"
    },
    secondary: {
        light: '#F3F3F3',
        main: "#FFFFFF",
        dark: "#4A4A4A"
    },
    
    },
});

interface Props{
    title?: "Line" | "Log History"
}

const Title: Props = {
    title: "Line",
}

export default function nonSelectBar() {
    return (
        <Box sx={{position: 'fixed'}}>
        <ThemeProvider theme={theme}>
        <Box bgcolor={"#4F6680"} display={'flex'} width={"100vw"} height={'108px'}>
            <Box marginLeft={'20px'} marginY={"auto"} alignItems={'center'}>
                
            </Box>
        </Box>
        </ThemeProvider>
    </Box>
    );
}

