import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import UpsideBar from '../Components/UpsideBar';
import VirtualizedList from '../Components/VirtualList';
import { AiOutlinePlus } from "react-icons/ai";
import SvgIcon from '@mui/material/SvgIcon';
// import AiOutlinePlus from "*.svg";

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
            <Box sx={{ flexGrow: 1 }}>
                <UpsideBar/>
                <Box width={600} height={400} alignItems={'center'}  margin={'auto'}  marginTop={15}  bgcolor={'#D3D3D3'} padding={2} borderRadius={2}>

                            <Box display={'flex'} justifyContent={'center'} color={'black'} fontSize={20} fontWeight={'bold'} marginBottom={3} alignItems={'center'}>
                            <Box>      Choose the Project</Box><button>< AiOutlinePlus color={'FF9198'} fontSize={20}/></button></Box>
                    <VirtualizedList/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

