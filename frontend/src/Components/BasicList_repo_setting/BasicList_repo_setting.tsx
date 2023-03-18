import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import styles from './BasicList.module.css';
import { margin, padding } from '@mui/system';


export default function BasicList_repo_setting() {
  return (
    <Box className={styles.box} sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List className={styles.list}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="설정" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="참가자 설정" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="공개 범위 설정" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
