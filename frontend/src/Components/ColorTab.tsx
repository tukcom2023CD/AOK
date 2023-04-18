import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import UploadIcon from '@mui/icons-material/Upload';
import MergeIcon from '@mui/icons-material/Merge';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom';

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
    info: {
        light: '#F3F3F3',
        main: "#FFFFFF",
        dark: "#4A4A4A"
    },
    },
});

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <nav>
    <Box sx={{width: '100%', marginY:'auto'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="upload" label= {<Box display={"flex"} justifyContent={"center"} alignItems={"center"}><UploadIcon sx={{mr:"5px", fontSize:"20px"}}/><Typography>upload</Typography></Box>} />
        <Tab value="merge" label= {<Box display={"flex"} justifyContent={"center"} alignItems={"center"}><MergeIcon sx={{mr:"5px", fontSize:"20px"}}/><Typography>merge</Typography></Box>} />
        <Tab value="log history" label= {<Box display={"flex"} justifyContent={"center"} alignItems={"center"}><HistoryIcon sx={{mr:"5px", fontSize:"20px"}}/><Typography>log history</Typography></Box>} />
        <Tab value="setting" label= {<Box display={"flex"} justifyContent={"center"} alignItems={"center"}><SettingsIcon sx={{mr:"5px", fontSize:"20px"}}/><Typography>setting</Typography></Box>} />
      </Tabs>
    </Box>

      {/* <Link to='../Pages/Upload'>upload</Link> */}
    </nav>
  );
}