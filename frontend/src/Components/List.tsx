import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CreateBtn from './CreateBtn';

export default function BasicList() {
    return (
    <div>
    <Box sx={{ width: '16vw', bgcolor: 'background.paper'}}>
        <Divider />
        <nav aria-label="folders">
        <List>
            <ListItem disablePadding>
            <ListItemButton >
                <ListItemText primary="main" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="line"  />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="color" />
            </ListItemButton>
            </ListItem>
        </List>
        </nav>
    </Box>
    <CreateBtn/>
    </div>
    );
}