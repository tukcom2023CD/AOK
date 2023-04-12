
import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import UpsideBar from '../Components/UpsideBar';
import { Typography, Button,IconButton } from '@mui/material';
import BasicSelect from '../Components/ProjectSelect';
import BasicList from '../Components/List';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import Profile from '../Components/Profile';
import UseFormControl from "../Components/TextField";
import styled from 'styled-components';
import SelectBar from '../Components/SelectBar';
import EditIcon from '@mui/icons-material/Edit';
import TextField2 from '../Components/TextField2';
import DiscreteSlider from '../Components/Slider';
import FileList from '../Components/FileList';
import { bgcolor, fontSize } from '@mui/system';
import FeedBack from '../Components/FeedBack';
import Seekbar from '../Components/Seekbar';
import Seekbars from '../Components/Seekbars';
import UpsideGray from '../Components/UpsideGray';
import { BtnStyle } from '../Components/Button';

interface props{
    backgroundcolor?: string;
}

const ProjectBtn = styled.button `
  width: 100vw;
  height: 30px;
  background-color: #FF9198;
  color: white;
  font-size: 10x;
  font-weight: bold;
  border-radius: 8px;
  &:hover{
    background-color: #d7777e;
    transition: 0.5s;
  }
`;

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

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

const ProfilePic = styled.div<props>`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    margin-right: 0.8rem;
    background-color: ${(props) => props.backgroundcolor};
`;


export default function LogHistory() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }} display={'flex'}>
                <Box width={'100vw'} display={'flex'}>
                    <Box width={'16vw'} display={'flex'} flexDirection={'column'}>
                        <UpsideGray />
                        <Box sx={{width:"100vw", height:"40px", alignText:'center', bgcolor:"#D9D9D9", alignContent:'center'}}><Typography sx={{fontWeight:"bold", mt:'8px', ml:'15px'}}>
                            Tino Project</Typography>
                        </Box>
                    </Box>
                    <Box width={'83vw'}>
                        <SelectBar />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
