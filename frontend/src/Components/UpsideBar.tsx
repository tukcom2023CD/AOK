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


export const theme = createTheme({
    palette: {
    primary: {
        main: "#FF9198",
    },
    secondary: {
        main: "#000000",
    },
    },
});

export default function UpsideBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
        
        <AppBar position="static" color='primary'>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <img src="img/crepe.png" alt="crepe" /> */}
            crepe
            </Typography>
            {auth && (
            <Box>
                <Profile />
            </Box>
            )}
        </Toolbar>
        </AppBar>

        <section>
        </section>
    </Box>
    </ThemeProvider>
    );
}
