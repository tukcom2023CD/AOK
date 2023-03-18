import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import Profile from '../Components/Profile';
import DropMenu from '../Components/Dropmenu';
import UpsideBar from '../Components/UpsideBar';
import MainProfile from '../Components/MainProfile';


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

export default function Main() {
    // const [auth, setAuth] = React.useState(true);
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setAuth(event.target.checked);
    // };

    // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    // setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    // setAnchorEl(null);
    // };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <UpsideBar/>
                <Box width={600} height={400}  marginTop={100} bgcolor={'#D3D3D3'}>
                <Box color={'black'}>Choose the Project +</Box>

                </Box>
            </Box>
        </ThemeProvider>
    );
}




