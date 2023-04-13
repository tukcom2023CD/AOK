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
import SelectBar from '../Components/SelectBar';
import UpsideGray from '../Components/UpsideGray';
import MainModal from '../Components/MainModal';

export const button = styled.button`
    transform: 'translate(Y)(2)'
`

export default function Main() {
    // const [OpenModal, setOpenModal] = useState<boolean>(false);
    const [open, setOpen] = React.useState(false);

    const onClickToggleModal = useCallback(() => {
        setOpen(!open);
    }, [setOpen]);
    
    // const onClickToggleModal = useCallback(() => {
    //     setOpenModal(!OpenModal);
    // }, [OpenModal]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, flexShrink:1 }} display={'flex'} flexDirection={'column'} position={'fixed'}>
                 <Box width={'100vw'}  display={'flex'} > {/*상단바 */}
                    <Box width={'16vw'} display={'flex'} flexDirection={'column'} >
                        <Box width={'16vw'} >
                            <UpsideGray />
                        </Box>
                        <Box sx={{width:"100vw", height:"42px", alignText:'center', bgcolor:"#D9D9D9", alignContent:'center'}} >
                            <Typography sx={{fontWeight:"bold", mt:'8px', ml:'15px'}}>
                            Tino Project
                            </Typography>
                        </Box>
                    </Box>
                    <Box width={'83vw'} >
                        <SelectBar />
                    </Box>
                </Box>

                <Box  width={'100vw'} display={'flex'} height={'100vh'}>
                    {/* 좌측 */}
                    <Box width={'16vw'} display={'flex'} flexDirection={'column'} sx={{bgcolor: '#F3F3F3'}}>
                        <BasicList />
                        <Box marginTop={'65vh'}>
                            <Profile />
                        </Box>
                    </Box>
                    {/* 우측 */}
                    <Box display={'flex'} flexDirection={'column'} marginX={'auto'} marginY={'50px'}>
                        
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box display={'flex'} justifyContent={'center'}  width={'20%'}></Box>
                            <Box display={'flex'} justifyContent={'center'}  width={'60%'}><Typography variant='h4' fontWeight={'bold'} >Projects</Typography></Box> 
                            <Box width={'20%'} display={'flex'} justifyContent={'center'}>
                                <CreateBtn onClick={onClickToggleModal}>create</CreateBtn>
                                {open && (
                                    <MainModal onClickToggleModal = {onClickToggleModal}></MainModal>
                                )}{/*OpenModal*/}
                            </Box>
                            
                        </Box>

                        <Box display={'flex'} justifyContent={'center'}>
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


