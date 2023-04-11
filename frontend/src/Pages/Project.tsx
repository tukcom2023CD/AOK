import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import UpsideGray from '../Components/UpsideGray';
import { Typography, Button } from '@mui/material';
import BasicSelect from '../Components/ProjectSelect';
import BasicList from '../Components/List';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import Profile from '../Components/Profile';
import UseFormControl from "../Components/TextField";
import styled from 'styled-components';
import { reverse } from 'dns';
import SelectBar from '../Components/SelectBar';
import EditIcon from '@mui/icons-material/Edit';
import TextField2 from '../Components/TextField2';

import IosShareSharpIcon from '@mui/icons-material/IosShareSharp';

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



export default function Project() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }}>
                
                <Box display={'flex'}>
                    <Box sx={{bgcolor: 'secondary.light'}}width='300px' height={'100vh'} >
                    <UpsideGray />
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
                        
                        <SelectBar />
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

                        <Box display={'flex'} justifyContent={'center'} marginRight={'200px'} marginTop ={'20px'}>
                            <ProfilePic backgroundcolor='#d9d9d9' />
                            <Box width={'350px'} bgcolor={'primary.dark'} padding={'10px'} borderRadius={'10px'}>
                                <Typography fontWeight={'bold'}>색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                            </Box>
                        </Box>


                        
                        <Box display={'flex'} justifyContent={'center'} marginTop={'50px'}>
                            {/* <UseFormControl /> */}
                            <TextField2 />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

