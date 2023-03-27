import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SendSharpIcon from '@mui/icons-material/SendSharp';
export default function CustomizedInputBase() {
    return (
    <Paper
        component="form"
        // sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40vw', bgcolor:"#f8f8f8" }}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40vw', }}
    >

        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="reply"
        inputProps={{ 'aria-label': 'send feedback' }}
        />
        <IconButton type="button" sx={{ p: '10px' , rotate:'320deg'}} aria-label="send" color='primary'>
        <SendSharpIcon />
        </IconButton>
    </Paper>
    );
}