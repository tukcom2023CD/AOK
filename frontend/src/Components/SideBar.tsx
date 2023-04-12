import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import UpsideGray from '../Components/UpsideGray'; 
import { Typography, Button,IconButton } from '@mui/material';
import BasicSelect from '../Components/ProjectSelect';
import BasicList from '../Components/List';
import AddIcon from '@mui/icons-material/Add';
import Profile from '../Components/Profile';



export default function SideBar() {
    return (
        <Box >
                    <Box>
                        <UpsideGray />
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
                                <Profile></Profile>
                            </Box>
                    </Box>
    );
}

