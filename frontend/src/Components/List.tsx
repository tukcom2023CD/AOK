import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function BasicList() {
    return (
    <Box sx={{ width: '230px', bgcolor: 'background.paper',}} borderRadius='10px'>
        <Divider />
        <nav aria-label="folders">
        <List>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary="main" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="line" />
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
    );
}