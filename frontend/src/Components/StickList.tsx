import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';

export default function StickyList() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        width: 320,
        maxHeight: 300,
        overflow: 'auto',
        borderRadius: 'sm',
      }}
    >
      <List>
        {[...Array(5)].map((_, categoryIndex) => (
          <ListItem nested key={categoryIndex}>
            <List>
              {[...Array(10)].map((__, index) => (
                <ListItem key={index}>
                  <ListItemButton>Subitem {index + 1}</ListItemButton>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Sheet>
  );
}