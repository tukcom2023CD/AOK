import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import UpsideGray from '../Components/UpsideGray';
import { Typography, Button, TextField } from '@mui/material';
import BasicSelect from '../Components/ProjectSelect';
import BasicList from '../Components/List';
import AddIcon from '@mui/icons-material/Add';
import Profile from '../Components/Profile';
import styled from 'styled-components';
import { reverse } from 'dns';
import SelectBar from '../Components/SelectBar';
import EditIcon from '@mui/icons-material/Edit';
import TextField2 from '../Components/TextField2';
import TitleList from '../Components/Title/TitleList';
import IosShareSharpIcon from '@mui/icons-material/IosShareSharp';

interface props{
    backgroundcolor?: string;
}

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


const ProfilePic = styled.div<props>`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    margin-right: 0.8rem;
    background-color: ${(props) => props.backgroundcolor};
`;



export default function Project() {
    const [text, setText] = useState("Hello, World!");

    const handleButtonClick = () => {
        setText("Button Clicked");
    };

    
    return (
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
                    <Box display={'flex'} flexDirection={'column'} width={'100vw'} overflow={'auto'} height={"80vh"}>  
                        <Box display={'flex'} marginX={'auto'} marginTop={'50px'}>
                            <img src="img/tino.png" alt="tino" width={'400px'} height={'400px'}/>
                        </Box>
                        

                        
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginLeft={'65px'} marginY={'20px'}>
                            <TitleList></TitleList>
                        </Box>
                        
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: "#838383", fontSize: '15px'}}>@Ellie</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={{color: "#838383", fontSize: '15px'}}>23.08.01:22</Typography>
                        </Box>

                        <Box display={'flex'} justifyContent={'center'} marginRight={'200px'} marginTop ={'20px'}>
                            <ProfilePic backgroundcolor='#d9d9d9' />
                            <Box width={'350px'} bgcolor={'#FFEFEF'} padding={'10px'} borderRadius={'10px'}>
                                <Typography fontWeight={'bold'}>색이 조금 연했으면 좋겠어요.<br></br>선 굵기는 아주 좋아요!</Typography>
                            </Box>
                        </Box>


                        
                        <Box display={'flex'} justifyContent={'center'} marginTop={'50px'}>
                            {/* <UseFormControl /> */}
                            <TextField2 />
                        </Box>
                    </Box>

                    <Box>

                    </Box>
                </Box> 
            </Box>
    );
}