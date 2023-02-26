import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import styles from './BasicListRepo.module.css';
import { margin, padding } from '@mui/system';
import styled from 'styled-components';


export default function BasicListRepo() {
  return (
    <Box className={styles.box} sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
          <ListItem  disablePadding>
              <ListItemText className={styles.title} primary="설정" />
          </ListItem>
        <List>
        <Line/>
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
    </Box>
  );
}

const Line = styled.section`
width: 200px;
height: 0.5px;
background: black;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
`





