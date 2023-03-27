import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;

    return (
    <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`}/>
        </ListItemButton>
    </ListItem>
    );
}
export default function VirtualizedList() {
    return (
    <Box margin={'auto'} borderRadius={3}
        sx={{ width: '100%', height: 300, maxWidth: 360, bgcolor: 'background.paper' }}
    >
        <FixedSizeList
            height={300}
            width={360}
            itemSize={46}
            itemCount={100}
            overscanCount={5}
            
            >
            {renderRow}
        </FixedSizeList>
    </Box>
);
}