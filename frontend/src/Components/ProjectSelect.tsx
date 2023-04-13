import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Button, Input} from '@mui/material';
import { BtnStyle } from './Button';
import { fontWeight } from '@mui/joy/styles/styleFunctionSx';
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

export default function BasicSelect() {
    const [text, setText] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
    setText(event.target.value as string);
    };

    return (
    <ThemeProvider theme={theme}>
        <Box sx={{ maxWidth:310, minWidth: 120, color:'secondary'}}>
            <FormControl fullWidth>
            <Select
                autoWidth={true}
                sx={{paddingX:'8px', fontWeight:"bold"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={text}
                onChange={handleChange}
            >
                <Input type="text" />
                <MenuItem value={10}>Tino Project</MenuItem>
                <MenuItem value={20}>ex1</MenuItem>
                <MenuItem value={30}>ex2</MenuItem>
                <Button> create</Button>
            </Select>
            </FormControl>
        </Box>
    </ThemeProvider>
    );
}