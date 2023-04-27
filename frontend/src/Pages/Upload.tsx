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
import ProjectSelect from '../Components/ProjectSelect';


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
                        <Box sx={{width:"16vw", height:"42px", alignText:'center', bgcolor:"#D9D9D9", alignContent:'center'}} >
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
                    <Box display={'flex'} flexDirection={'column'} overflow={'auto'} marginX={'auto'} marginY={'10px'}>
                      <div>
                        <DragDrop/>
                      </div>
                    </Box>
                </Box> 
            </Box>
        </ThemeProvider>
    );
  }
export default Upload;