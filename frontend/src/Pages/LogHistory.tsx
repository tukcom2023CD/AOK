
import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { Typography, Button,IconButton } from '@mui/material';
import BasicList from '../Components/List';
import Profile from '../Components/Profile';
import styled from 'styled-components';
import SelectBar from '../Components/SelectBar';
import EditIcon from '@mui/icons-material/Edit';
import DiscreteSlider from '../Components/Slider';
import DateSlide from '../Components/DateSlider';
import FileList from '../Components/FileList';
import FeedBack from '../Components/FeedBack';
import UpsideGray from '../Components/UpsideGray';
import ProjectSelect from '../Components/ProjectSelect';

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
            <Box sx={{ flexGrow: 1, flexShrink:1 }} display={'flex'} flexDirection={'column'} position={'fixed'}>
                 <Box width={'100vw'}  display={'flex'} > {/*상단바 */}
                    <Box width={'16vw'} display={'flex'} flexDirection={'column'} >
                        <Box width={'16vw'} >
                            <UpsideGray />
                        </Box>
                        <Box sx={{width:"100vw", height:"42px", alignText:'center', bgcolor:"#D9D9D9", alignContent:'center'}} >
                            <ProjectSelect/>
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
                        <Box width={'16vw'}position={'fixed'} sx={{left:0, bottom:0, marginBottom: "10px"}}>
                            <Profile />
                        </Box>
                    </Box>
                    {/* 우측 */}
                    <Box  display={'flex'} flexDirection={'column'} overflow={'auto'} height={"80vh"} marginX={'auto'}>
                                <Box display={'flex'} marginX={'auto'} marginTop={'20vh'}>
                                    <img src="img/tino.png" alt="tino" width={'400px'} height={'400px'} />
                                </Box>
                                
                                
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginLeft={'65px'}>
                                    <Typography fontSize={'21px'} fontWeight={'bold'} marginTop={'20px'} marginBottom={"5px"} textAlign={"center"}>선 굵기 수정 24px</Typography>
                                        <Button sx={{border:"ButtonShadow",  mt:'15px', }}><EditIcon/></Button>
                                        {/* position:'inherit' 속성은 버튼을 클릭했을 때 효과로 화면 전체 배경을 "#FF9198"로 변경하기에 제외 */}
                                </Box>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Typography sx={{color: 'primary.light', fontSize: '15px'}}>@Ellie</Typography>
                                </Box>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Typography sx={{color: 'primary.light', fontSize: '15px'}}>23.08.01:22</Typography>
                                </Box>

                                {/* <Box display={'flex'} justifyContent={'center'} marginY={"40px"} >
                                    <DiscreteSlider />
                                </Box> */}

                                <Box display={'flex'} justifyContent={'center'} marginY={"40px"}>
                                    <DateSlide />
                                </Box>

                                <Box display={'flex'} justifyContent={'center'} marginX={"200px"}>
                                    <Box display={'flex'} flexDirection={'column'} marginRight={'15px'}>
                                        <Typography sx={{fontWeight:"bolder", fontSize:"20px"}}>files</Typography>
                                            <Box display={'flex'} justifyContent={'center'} width={'500px'} height={'500px'} bgcolor={"#FFF2F2"} sx={{overflowY:"auto"}}>
                                                <FileList />
                                        </Box>
                                    </Box>

                                    <Box display={'flex'} flexDirection={'column'} marginLeft={'15px'}>
                                        <Typography sx={{fontWeight:"bolder", fontSize:"20px"}}>feedback</Typography>
                                        <FeedBack />
                                    </Box>
                                </Box>

                                <Box display={'flex'} justifyContent={'center'} marginY={"50px"}>
                                    <Button sx={{width:"180px", height:"50px", color:"#FFFFFF" ,bgcolor:"#FF9198", borderRadius:"10px", fontSize:"15px" , fontWeight:"bold"}}>apply</Button>
                                </Box>
                            </Box>
                    <Box>

                    </Box>
                </Box> 
            </Box>
        </ThemeProvider>
    );
}
