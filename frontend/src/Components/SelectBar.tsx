import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import ColorTabs from './ColorTab';


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

export default function SelectBar() {
    return (
        <Box>
            <ThemeProvider theme={theme}>
            <Box bgcolor={"secondary.light"} display={'flex'} justifyContent={'space-between'}>
                <Box marginLeft={'20px'} marginY={"auto"} alignItems={'center'}>
                    <Typography fontSize={"30px"} fontWeight={"bold"} fontFamily={"unset"}>Line</Typography>
                </Box>
                <Box marginY={'10px'}>
                <ColorTabs/>
                </Box>
                <Box marginLeft={'20px'} marginY={"auto"} alignItems={'center'}>
                    <Typography fontSize={"30px"} fontWeight={"bold"} fontFamily={"unset"} color={"transparent"}>Line</Typography>
                </Box>
            </Box>
            </ThemeProvider>
        </Box>
    );
}

