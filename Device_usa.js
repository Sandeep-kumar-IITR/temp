import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import { MoreVert } from '@mui/icons-material';

const data = [
  { name: 'iOS', value: 30, color: '#0088FE' },
  { name: 'Android', value: 10, color: '#00C49F' },
  { name: 'Blackberry', value: 20, color: '#FFBB28' },
  { name: 'Symbian', value: 15, color: '#FF8042' },
  { name: 'Others', value: 25, color: '#FF0000' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

const DeviceUsage = () => {
  return (
    <Paper sx={{ width: 342, height: 260, padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle1">Device Usage</Typography>
        <IconButton size="small">
          <MoreVert fontSize="small" />
        </IconButton>
      </Box>
      <Typography variant="body2" color="textSecondary" mb={1}>Top 5</Typography>
      <Box display="flex" justifyContent="space-between">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            cx={75}
            cy={75}
            innerRadius={30}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <Box>
          <Box display="flex" justifyContent="space-between" px={2}>
            <Typography variant="body2" color="textSecondary">Device</Typography>
            <Typography variant="body2" color="textSecondary">Progress</Typography>
          </Box>
          <List>
            {data.map((item, index) => (
              <ListItem key={index} disableGutters>
                <Box width={10} height={10} bgcolor={item.color} mr={1} />
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                  <Typography variant="body2">{item.value}%</Typography>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Paper>
  );
};

export default DeviceUsage;
