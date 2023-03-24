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
import styled from 'styled-components';
import { reverse } from 'dns';

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
    margin: 0.3rem;
    background-color: ${(props) => props.backgroundcolor};
`;


export default function Project() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }}>
                <UpsideBar />
                <Box display={'flex'}>


                    <Box sx={{bgcolor: 'secondary.light'}}width='300px' height={'100vh'} >
                        <Box height={'80vh'}>
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
                            <Box>
                                <Divider />
                            </Box>
                            <Box marginLeft={'20px'}>
                                <Typography fontWeight={'bold'} paddingY={'17px'}>log history</Typography>
                            </Box>
                            <Box marginBottom={'10px'}>
                                <Divider />
                            </Box>
                        </Box>
                        <Box height={'20vh'}>
                        <Box>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'baseline'} marginX={'13px'}>
                                <Box>
                                    <Typography paddingY={'2px'}>contributer</Typography>
                                </Box>
                                <Box>
                                    <Button sx={{color:'secondary.main', bgcolor:"#FA735F", width:'15px', height:'20px', fontSize: '12px', }}>invite</Button>
                                </Box>
                            </Box>
                            <Box display={'flex'} sx={{ width:'230px', bgcolor:'#D7D7D7'}} marginX={'auto'} borderRadius={'5px'}>
                                <ProfilePic backgroundcolor='#ffffff' />
                                <ProfilePic backgroundcolor='#ffffff'/>
                                <ProfilePic backgroundcolor='#ffffff'/>
                            </Box>
                        </Box>
                        </Box>
                    </Box>



                    <Box display={'flex'} flexDirection={'column'} width={'100vw'}>
                        <Box display={'flex'} flexDirection={'row-reverse'}>
                            <Button sx={{px:'20px', py:'20px'}}><SettingsIcon sx={{fontSize: '35px', color: 'secondary.dark'}}/></Button>
                        </Box>
                        <Box display={'flex'} marginX={'auto'} marginY={'20px'}>
                            <img src="img/tino.png" alt="tino" />
                        </Box>
                        
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography fontSize={'23px'} fontWeight={'bold'} marginY={'10px'}>선 굵기 수정 24px</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: 'primary.light'}}>@Ellie</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: 'primary.light'}}>23.08.01:22</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

