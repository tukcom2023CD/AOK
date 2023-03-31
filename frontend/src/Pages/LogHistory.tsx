import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import UpsideBar from '../Components/UpsideBar';
import { Typography, Button } from '@mui/material';
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

interface props{
    backgroundcolor?: string;
}

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

// interface Props{
//     title?: "Line" | "Log History"
// }

// const Title: Props = {
//     title: "Line",
// }

export default function LogHistory() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }}>
                
                <Box display={'flex'}>
                    <Box display={'flex'} flexDirection={'column'} width={'100vw'}>  
                        
                        <SelectBar/>
                        <Box display={'flex'} marginX={"20px"} width={"100vw"} paddingY={"5px"} sx={{bgcolor:"#FFFFFF"}}>
                            <Typography color={"#7B7B7B"}>Dino Project / Line</Typography>
                        </Box>

                        <Box display={'flex'} marginX={'auto'} marginTop={'50px'}>
                            <img src="img/tino.png" alt="tino" width={'400px'} height={'400px'} />
                        </Box>
                        
                        
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginLeft={'65px'}>
                            <Typography fontSize={'21px'} fontWeight={'bold'} marginTop={'20px'} marginBottom={"5px"} textAlign={"center"}>선 굵기 수정 24px</Typography>
                            <Button sx={{border:"ButtonShadow", mt:'15px'}}><EditIcon/></Button>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: 'primary.light', fontSize: '15px'}}>@Ellie</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: 'primary.light', fontSize: '15px'}}>23.08.01:22</Typography>
                        </Box>

                        <Box display={'flex'} justifyContent={'center'} marginY={"40px"}>
                            <DiscreteSlider/>
                        </Box>

                        <Box display={'flex'} justifyContent={'space-around'} marginX={"300px"}>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography sx={{fontWeight:"bolder", fontSize:"20px"}}>files</Typography>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Box display={'flex'} justifyContent={'center'} width={'500px'} height={'600px'} bgcolor={"#FFF2F2"} sx={{overflowY:"auto"}}>
                                        <FileList />
                                    </Box>    
                                </Box>
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography sx={{fontWeight:"bolder", fontSize:"20px"}}>feedback</Typography>
                                <FeedBack />
                            </Box>
                        </Box>

                        <Box display={'flex'} justifyContent={'center'} marginY={"50px"}>
                            <Button sx={{width:"180px", height:"50px", color:"#FFFFFF" ,bgcolor:"#FF9198", borderRadius:"10px", fontSize:"15px" , fontWeight:"bold"}}>apply</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}


