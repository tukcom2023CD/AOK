import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { IconButton, Typography } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function FileList() {
    return (
    <Box>
        <nav aria-label="folders">
        <List>
        <ListItem disablePadding sx={{width:"400px", height:"60px" ,backgroundColor:"#FFD3D3", marginY:"20px",paddingX:"10px", borderRadius:"5px", display:"flex", justifyContent:"space-between"}}>
            <ListItemText primary="디노명암.png" sx={{fontSize:"20px"}}/>
                  <IconButton edge="end" aria-label="delete">
                    <SaveAltIcon sx={{color:'#000000'}}/>
                  </IconButton>
            </ListItem>
            {/* <ListItem disablePadding sx={{width:"400px", height:"60px" ,backgroundColor:"#FFD3D3", marginY:"20px",paddingX:"10px", borderRadius:"5px", display:"flex", justifyContent:"space-between"}}>
            <ListItemText primary="디노선화.png" sx={{fontSize:"20px"}}/>
                  <IconButton edge="end" aria-label="delete">
                    <SaveAltIcon sx={{color:'#000000'}}/>
                  </IconButton>
            </ListItem>
            <ListItem disablePadding sx={{width:"400px", height:"60px" ,backgroundColor:"#FFD3D3", marginY:"20px",paddingX:"10px", borderRadius:"5px", display:"flex", justifyContent:"space-between"}}>
            <ListItemText primary="디노리본.png" sx={{fontSize:"20px"}}/>
                  <IconButton edge="end" aria-label="delete">
                    <SaveAltIcon sx={{color:'#000000'}}/>
                  </IconButton>
            </ListItem>
            <ListItem disablePadding sx={{width:"400px", height:"60px" ,backgroundColor:"#FF9C9C", marginY:"20px",paddingX:"10px", borderRadius:"5px", display:"flex", justifyContent:"space-between"}}>
            <ListItemText primary="디노채색.png" sx={{fontSize:"20px"}}/>
                  <IconButton edge="end" aria-label="delete">
                    <SaveAltIcon sx={{color:'#000000'}}/>
                  </IconButton>
            </ListItem> */}
        </List>
        </nav>
    </Box>
    );
}                   

{/* <ListItem disablePadding sx={{width:"400px", height:"60px" ,backgroundColor:"#FFD3D3", marginY:"20px",paddingX:"10px", borderRadius:"5px", display:"flex", justifyContent:"space-between"}}>
<Typography sx={{fontSize:"1px", fontWeight:"bold"}}>디노리본.png</Typography>
<IconButton edge="end" aria-label="delete">
  <SaveAltIcon sx={{color:'#000000'}}/>
</IconButton>
</ListItem> */}