import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, LinearProgress, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const appUsageData = [
  { version: '0.1.5.2', usage: 123, unit: 'k', percentage: 80 },
  { version: '0.1.5.3', usage: 53, unit: 'k', percentage: 35 },
  { version: '0.1.5.4', usage: 23, unit: 'k', percentage: 15 },
  { version: '0.1.5.5', usage: 3, unit: 'k', percentage: 5 },
  { version: '0.1.5.6', usage: 1, unit: 'k', percentage: 2 },
];

const AppVersions = () => {
  return (
    <Paper sx={{ width: 342, height: 260, padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle1">App Versions</Typography>
        <IconButton size="small">
          <MoreVert fontSize="small" />
        </IconButton>
      </Box>
      <Typography variant="body2" color="textSecondary" mb={1}>App Usage across versions</Typography>
      <List disablePadding>
        {appUsageData.map((item, index) => (
          <ListItem key={index} disableGutters>
            <ListItemText primary={item.version} />
            <Box width="50%" mr={1}>
              <LinearProgress variant="determinate" value={item.percentage} sx={{ height: 10 }} />
            </Box>
            <ListItemSecondaryAction>
              <Typography variant="body2">{item.usage}{item.unit}</Typography>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AppVersions;
