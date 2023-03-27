import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendSharpIcon from '@mui/icons-material/SendSharp';

export default function TextField2() {
const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
};

    return (
    <Box sx={{ display: 'flex', justifyContent:'center'}}>
        <div>
        
        <FormControl sx={{ m: 1, width: '800px' }} variant="outlined">
            <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
                <InputAdornment position="end">
                <IconButton sx={{rotate:'320deg'}}>
                    <SendSharpIcon color='primary'/>
                </IconButton >
                </InputAdornment>
            }
            />
        </FormControl>
        </div>
    </Box>
    );
}
