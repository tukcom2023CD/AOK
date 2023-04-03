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

export default function LogHistory2() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }} display={'flex'}>
                <Box sx={{bgcolor: 'secondary.light'}} width={'16vw'} height={'100vh'} position={'fixed'}>
                    <Box>
                        <UpsideBar />
                    </Box>
                            <Box height={'88vh'}>
                                <BasicSelect />
                                <Box sx={{bgcolor: 'secondary.light'}} maxWidth='300px' marginTop={'1px'} marginBottom={'25px'}>
                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} maxWidth='300px' height='50px'>
                                        <Box paddingLeft={'20px'}>
                                            <Typography fontWeight={'bold'}>branch</Typography>
                                        </Box>
                                        <Box paddingRight={'3px'}>
                                            <Button><AddIcon sx={{fontSize: '18px', color: '#000000'}}/></Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'center'}>
                                        <BasicList />
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Profile />
                            </Box>
                    </Box>
                    
                    <Box display={'flex'} position={"absolute"}>
                        <Box display={'flex'} flexDirection={'column'} width={'83vw'} marginLeft={'16vw'}>  
                    

                            <Box sx={{position:"fixed"}}>
                                <SelectBar />
                            </Box>

                            <Box  display={'flex'} flexDirection={'column'} >
                                <Box display={'flex'} marginX={'auto'} marginTop={'20vh'}>
                                    <img src="img/tino.png" alt="tino" width={'400px'} height={'400px'} />
                                </Box>
                                
                                
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginLeft={'65px'}>
                                    <Typography fontSize={'21px'} fontWeight={'bold'} marginTop={'20px'} marginBottom={"5px"} textAlign={"center"}>선 굵기 수정 24px</Typography>
                                    {/* <IconButton sx={{border:"ButtonShadow", mt:'15px',bgcolor:"primary", position:"none"}}><EditIcon sx={{bgcolor:"primary"}}/></IconButton> */}
                                    <Button sx={{border:"ButtonShadow", mt:'15px', position:'inherit'}}><EditIcon/></Button>
                                </Box>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Typography sx={{color: 'primary.light', fontSize: '15px'}}>@Ellie</Typography>
                                </Box>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Typography sx={{color: 'primary.light', fontSize: '15px'}}>23.08.01:22</Typography>
                                </Box>

                                <Box display={'flex'} justifyContent={'center'} marginY={"40px"} >
                                    <DiscreteSlider />
                                </Box>

                                <Box display={'flex'} justifyContent={'center'} marginY={"40px"} >
                                    <Seekbar />
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
            </Box>
        </ThemeProvider>
    );
}


