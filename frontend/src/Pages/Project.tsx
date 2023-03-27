import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import UpsideBar from '../Components/UpsideBar';
import { Typography, Button } from '@mui/material';
import ImgList from '../Components/ImgList';
import BasicSelect from '../Components/ProjectSelect';

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


export default function Project() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }}>
                <UpsideBar/>
                <Box>
                    <BasicSelect />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

