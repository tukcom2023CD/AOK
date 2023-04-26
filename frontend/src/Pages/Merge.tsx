import * as React from 'react';
import {useCallback} from "react";
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import { Typography} from '@mui/material';
import ImgList from '../Components/ImgList';
import BasicList from '../Components/List';
import Profile from '../Components/Profile';
import SelectBar from '../Components/SelectBar';
import UpsideGray from '../Components/UpsideGray';
import MergeComponent from '../Components/Merge/MergeComp';
import ProjectSelect from '../Components/ProjectSelect';
import MergeModal from '../Components/MergeModal_Button';
//import MergeModal from '../Components/MergeIconModal';


export default function Merge() {

  const [open, setOpen] = React.useState(false);

  const onClickToggleModal = useCallback(() => {
      setOpen(!open);
  }, [setOpen]);
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
                        <Backgrdiv>
                          <MergeComponent/>
                          <Commentdiv/>
                          <Btndiv>
                            <MergeModal onClickToggleModal = {onClickToggleModal}></MergeModal>
                          </Btndiv>
                        </Backgrdiv>
                      </div>
                    </Box>
                </Box> 
            </Box>
        </ThemeProvider>
    );
  }

  const Backgrdiv = styled.div`
  display: inline-block;
  width: 100%;
  background-color: white;
  text-align: center;
`; 


const Commentdiv = styled.input`
  width: 1000px;
  height: 85px;
  border-radius: 10px;
  background-color: #FFF4F4;
  border: 3px solid #FFDEDE;
  font-size: 20pt;
  font-weight: bold;
  padding: 1.5rem;
  //box-shadow: 2px 4px 8px;
`;

const Btndiv = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
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