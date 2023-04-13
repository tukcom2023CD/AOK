import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import { Typography} from '@mui/material';
import ImgList from '../Components/ImgList';
import BasicList from '../Components/List';
import Profile from '../Components/Profile';
import SelectBar from '../Components/SelectBar';
import UpsideGray from '../Components/UpsideGray';
import DragDrop from '../Components/DragDrop/DragDrop';

const Backgrdiv = styled.div`
  display: inline-block;
  width: 100%;
  background-color: white;
  text-align: center;
`; 


const Commentdiv = styled.input`
  width: 1050px;
  height: 85px;
  border-radius: 10px;
  background-color: #FFF4F4;
  border: 3px solid #FFDEDE;
  font-size: 20pt;
  font-weight: bold;
  padding: 1.5rem;
`;

const Btndiv = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const ApplyBtn = styled.button `
  width: 250px;
  height: 75px;
  background-color: #FF9198;
  color: white;
  font-size: 18pt;
  font-weight: bold;
  border-radius: 20px;
  &:hover{
    background-color: #d7777e;
    transition: 0.5s;
  }
`;

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

function Upload() {
    return(
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
                    <Box display={'flex'} flexDirection={'column'} overflow={'auto'} marginX={'auto'} marginY={'100px'}>
                      <div>
                        <Backgrdiv>
                          <DragDrop/>
                          <Commentdiv/>
                          <Btndiv>
                            <ApplyBtn>apply</ApplyBtn>
                          </Btndiv>
                        </Backgrdiv>
                      </div>
                    </Box>
                </Box> 
            </Box>
        </ThemeProvider>
    );
  }
export default Upload;