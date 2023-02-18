import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import styles from './BasicList.module.css';
import { margin, padding } from '@mui/system';


export default function BasicList() {
  return (
    <Box className={styles.box} sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List className={styles.list}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="main" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="캐릭터 작업" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="배경 작업" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
