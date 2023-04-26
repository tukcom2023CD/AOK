import * as React from 'react';
import { useState, useEffect } from 'react'; 
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
import { useSelector } from 'react-redux';
import { RootState } from './Redux/Store';
import axios from 'axios';

interface BranchResponse {
    status: number;
    code: string;
    message: string;
    data: BranchInfo;
}

interface BranchInfo{
    id: number;
    name: string;
}


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
    let branchUuid = useSelector((state: RootState) => {
        return state.branch.uuid;
    });
    
    const [branch, setBranch] = useState('');

    useEffect(()=>{
        (async () => {
            await axios.get('/api/v1/branches/'+ branchUuid)
            .then((response) => {
                console.log("브랜치 위치 : ", response.data.data.name);
                setBranch(response.data.data.name);

            })
            .catch((error) => {
                console.log("브랜치 위치 불러오기 실패");
                console.log(error);
            })
        })();
    },[]);

    return (
        <Box sx={{position: 'fixed'}}>
            <ThemeProvider theme={theme}>
                <Box bgcolor={"secondary.light"} display={'flex'} width={"100vw"} height={'60px'}>
                    <Box marginLeft={'20px'} marginY={"auto"} alignItems={'center'}>
                        <Typography fontSize={"27px"} fontWeight={"bold"} fontFamily={"unset"} width={"20vw"}>{branch}</Typography>
                    </Box>
                </Box>
                <Box bgcolor={"secondary.light"} width={"100vw"} paddingX={"5px"}>
                    <ColorTabs/>
                </Box>
            </ThemeProvider>
        </Box>
    );
}


