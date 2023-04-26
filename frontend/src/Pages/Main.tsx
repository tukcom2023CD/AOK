import * as React from 'react';
import {useState, useCallback} from "react";
import BasicModal from '../Components/Modalcom';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import { Typography} from '@mui/material';
import ImgList from '../Components/ImgList';
import BasicList from '../Components/List';
import Profile from '../Components/Profile';
import UpsideGray from '../Components/UpsideGray';
import MainModal from '../Components/MainModal';
import ProjectSelect from '../Components/ProjectSelect';
import NonSelectBar from '../Components/nonSelectBar';


export default function Main() {

    const [open, setOpen] = React.useState(false);

    const onClickToggleModal = useCallback(() => {
        setOpen(!open);
    }, [setOpen]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }} display={'flex'} flexDirection={'column'} position={'fixed'}>
                 <Box width={'100vw'}  display={'flex'} > {/*상단바 */}
                    <Box width={'16vw'} display={'flex'} flexDirection={'column'} >
                        <Box width={'16vw'} >
                            <UpsideGray />
                        </Box>
                        <Box sx={{width:"16vw", height:"42px", alignText:'center', bgcolor:"#D9D9D9", alignContent:'center'}} >
                            <ProjectSelect/>
                        </Box>
                    </Box>
                    <Box width={'83vw'} >
                        <NonSelectBar/>
                    </Box>
                </Box>

                <Box  width={'100vw'} display={'flex'} height={'100vh'}>
                    {/* 좌측 */}
                    <Box width={'16vw'} display={'flex'} flexDirection={'column'} sx={{bgcolor: '#F3F3F3'}}>
                        <BasicList />
                        <Box width={'16vw'}position={'fixed'} sx={{left:0, bottom:0, marginBottom: "10px"}}>    
                        <Profile />
                        </Box>
                    </Box>
                    {/* 우측 */}
                    <Box display={'flex'} flexDirection={'column'} marginX={'auto'} marginY={'50px'} overflow={'auto'} height={"100vh"}>
                        
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box display={'flex'} justifyContent={'center'}  width={'20%'}></Box>
                            <Box display={'flex'} justifyContent={'center'}  width={'60%'}><Typography variant='h4' fontWeight={'bold'} >Projects</Typography></Box> 
                            <Box width={'20%'} display={'flex'} justifyContent={'center'}>
                        
                                    <MainModal  onClickToggleModal = {onClickToggleModal}></MainModal>
                            
                                {/* <CreateBtn onClick={ onClickToggleModal}>create</CreateBtn> */}

                            </Box>
                            
                        </Box>

                        <Box display={'flex'} justifyContent={'center'} marginBottom={'10rem'}>
                            <ImgList/>
                        </Box>
                    </Box>
                </Box> 
            </Box>
        </ThemeProvider>
    );
}

export const theme = createTheme({
    palette: {
    primary: {
        main: "#FF9198",
    },
    secondary: {
        main: "#FFFFFF",
    },
    },
});

const CreateBtn = styled.button `
    width: 100px;
    height: 30px;
    background-color: #FF9198;
    color: white;
    font-size: 15px;
    font-weight: bold;
    border-radius: 8px;
    &:hover{
        background-color: #d7777e;
        transition: 0.5s;
    }
`;


