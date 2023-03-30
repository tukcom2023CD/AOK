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
import InteractiveList from '../Components/FileList';
import { bgcolor, fontSize } from '@mui/system';

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

interface Props{
    title?: "Line" | "Log History"
}

const Title: Props = {
    title: "Line",
}

export default function LogHistory2() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }}>
                
                <Box display={'flex'}>
                    <Box sx={{bgcolor: 'secondary.light'}}width='300px' height={'100vh'} >
                    <UpsideBar />
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



                    <Box display={'flex'} flexDirection={'column'} width={'100vw'}>  
                        
                        <SelectBar/>
                        <Box display={'flex'} marginX={'auto'} marginTop={'50px'}>
                            <img src="img/tino.png" alt="tino" width={'400px'} height={'400px'}/>
                        </Box>
                        

                        
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginLeft={'65px'}>
                            <Typography fontSize={'21px'} fontWeight={'bold'} marginTop={'20px'} marginBottom={"5px"} textAlign={"center"}>선 굵기 수정 24px</Typography>
                            <Button sx={{border:"ButtonShadow", mt:'15px'}}><EditIcon/></Button>
                        </Box>
                        {/* <Box display={'flex'} justifyContent={'center'}>
                            <Typography fontSize={'21px'} fontWeight={'bold'} marginTop={'20px'} marginBottom={"5px"} textAlign={"center"}>선 굵기 수정 24px</Typography> 
                        </Box>  */}
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: 'primary.light', fontSize: '15px'}}>@Ellie</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: 'primary.light', fontSize: '15px'}}>23.08.01:22</Typography>
                        </Box>

                        <Box display={'flex'} justifyContent={'center'}>
                            <DiscreteSlider/>
                        </Box>

                        <Box display={'flex'} justifyContent={'space-around'} marginBottom={"20px"} marginX={"150px"}>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography sx={{fontWeight:"bolder", fontSize:"20px"}}>Files</Typography>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Box display={'flex'} justifyContent={'center'} width={'500px'} bgcolor={"#000000"}>
                                        <InteractiveList />
                                    </Box>    
                                </Box>
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography sx={{fontWeight:"bolder", fontSize:"20px"}}>feedback</Typography>
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} sx={{bgcolor:"#FFF2F2", width:"500px", height:"600px"}}>
                                        
                                        <Box padding={"10px"} display={'flex'}>
                                            <ProfilePic backgroundcolor='#d9d9d9' />
                                            <Box width={'250px'} height={"80px"} bgcolor={'#FFFAFA'} borderColor={"#FFD3D3"} padding={'10px'} borderRadius={'10px'}>
                                                <Typography fontWeight={'bold'}>색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                                            </Box>
                                        </Box>

                                        <Box padding={"10px"} display={'flex'}>
                                            <ProfilePic backgroundcolor='#d9d9d9' />
                                            <Box width={'250px'} height={"80px"} bgcolor={'#FFFAFA'} borderColor={"#FFD3D3"} padding={'10px'} borderRadius={'10px'}>
                                                <Typography fontWeight={'bold'}>색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                                            </Box>
                                        </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box display={'flex'} justifyContent={'center'}>
                            <Button sx={{width:"180px", height:"50px", color:"#FFFFFF" ,bgcolor:"#FF9198", borderRadius:"10px", fontSize:"15px"}}>apply</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

