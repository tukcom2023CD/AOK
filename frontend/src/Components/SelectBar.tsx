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

export default function SelectBar() {
    return (
        <Box position={'fixed'}>
        <ThemeProvider theme={theme}>
        <Box bgcolor={"secondary.light"} display={'flex'} width={"83vw"} height={'60px'}>
            <Box marginLeft={'20px'} marginY={"auto"} alignItems={'center'}>
                <Typography fontSize={"27px"} fontWeight={"bold"} fontFamily={"unset"} width={"20vw"}>Line</Typography>
            </Box>
        </Box>
        <Box bgcolor={"secondary.light"} width={"83vw"} paddingX={"5px"}>
            <ColorTabs/>
        </Box>
        </ThemeProvider>
    </Box>
    );
}

{/* <Box>
        <ThemeProvider theme={theme}>
        <Box bgcolor={"secondary.light"} display={'flex'} justifyContent={'space-between'}>
            <Box marginLeft={'20px'} marginY={"auto"} alignItems={'center'}>
                <Typography fontSize={"27px"} fontWeight={"bold"} fontFamily={"unset"} width={"20vw"}>Line</Typography>
            </Box>
            <Box marginY={'10px'}>
            <ColorTabs/>
            </Box>
            {/*우측 프로필
            <Box display={"flex"} justifyContent={"flex-end"} marginLeft={'20px'} marginY={"auto"} alignItems={'center'} width={"20vw"}>
                <Box  width={"200px"}>
                    <MainProfile />
                </Box>
            </Box> 
        </Box>
        </ThemeProvider></Box>
*/}

