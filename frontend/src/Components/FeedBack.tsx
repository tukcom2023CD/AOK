import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import UpsideBar from '../Components/UpsideBar';
import { Typography, Button, Paper } from '@mui/material';
import BasicSelect from '../Components/ProjectSelect';
import BasicList from '../Components/List';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import Profile from '../Components/Profile';
import styled from 'styled-components';
import SelectBar from '../Components/SelectBar';
import EditIcon from '@mui/icons-material/Edit';
import TextField2 from '../Components/TextField2';
import DiscreteSlider from '../Components/Slider';
import InteractiveList from '../Components/FileList';
import { bgcolor, borderColor, fontSize } from '@mui/system';

interface props{
    backgroundcolor?: string;
}

const ProfilePic = styled.div<props>`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    margin-right: 0.8rem;
    background-color: ${(props) => props.backgroundcolor};
`;

export default function FeedBack() {
    return (
        <Box display={'flex'} flexDirection={'column'}  sx={{bgcolor:"#FFF2F2", width:"500px", height:"500px", paddingY:"10px", overflowY:"auto"}}>
            <Box padding={"10px"} display={'flex'}sx={{marginY:"10px", marginX:"10px"}}>
                    <ProfilePic backgroundcolor='#d9d9d9' />
                    <Paper sx={{width:'250px',  bgcolor:'#FFFAFA', borderColor:"#FFD3D3", padding:'10px',borderRadius:'10px'}}>
                            <Typography >색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                    </Paper>
            </Box>
            <Box padding={"10px"} display={'flex'}sx={{marginY:"10px", marginX:"10px"}}>
                    <ProfilePic backgroundcolor='#d9d9d9' />
                    <Paper sx={{width:'250px',  bgcolor:'#FFFAFA', borderColor:"#FFD3D3", padding:'10px',borderRadius:'10px'}}>
                            <Typography >색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                    </Paper>
            </Box>
            <Box padding={"10px"} display={'flex'}sx={{marginY:"10px", marginX:"10px"}}>
                    <ProfilePic backgroundcolor='#d9d9d9' />
                    <Paper sx={{width:'250px',  bgcolor:'#FFFAFA', borderColor:"#FFD3D3", padding:'10px',borderRadius:'10px'}}>
                            <Typography >색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                    </Paper>
            </Box>
            <Box padding={"10px"} display={'flex'}sx={{marginY:"10px", marginX:"10px"}}>
                    <ProfilePic backgroundcolor='#d9d9d9' />
                    <Paper sx={{width:'250px',  bgcolor:'#FFFAFA', borderColor:"#FFD3D3", padding:'10px',borderRadius:'10px'}}>
                            <Typography >색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                    </Paper>
            </Box>
            <Box padding={"10px"} display={'flex'}sx={{marginY:"10px", marginX:"10px"}}>
                    <ProfilePic backgroundcolor='#d9d9d9' />
                    <Paper sx={{width:'250px',  bgcolor:'#FFFAFA', borderColor:"#FFD3D3", padding:'10px',borderRadius:'10px'}}>
                            <Typography >색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                    </Paper>
            </Box>
        </Box>
    );
}


