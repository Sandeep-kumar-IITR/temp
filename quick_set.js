// import React from 'react';
// import { Box, Typography, Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
// import { MoreVert, Settings, Subscriptions, Autorenew, EmojiEvents, ExitToApp } from '@mui/icons-material';
// import { PieChart, Pie, Cell, Sector, Layer } from 'recharts';

// const quickSettings = [
//   { name: 'Settings', icon: <Settings fontSize="small" /> },
//   { name: 'Subscription', icon: <Subscriptions fontSize="small" /> },
//   { name: 'Auto Renewal', icon: <Autorenew fontSize="small" /> },
//   { name: 'Achievements', icon: <EmojiEvents fontSize="small" /> },
//   { name: 'Logout', icon: <ExitToApp fontSize="small" /> },
// ];

// const gaugeData = [
//   { value: 75, color: '#00C49F' }, // Actual value
//   { value: 25, color: '#d5d5d5' }, // Remaining part
// ];

// // Custom Needle
// const renderNeedle = (value, data, cx, cy, iR, oR, color) => {
//   let total = 0;
//   data.forEach((entry) => {
//     total += entry.value;
//   });
  
//   const needleValue = 180 * (value / total);
//   const length = oR * 0.8;
//   const needleAngle = needleValue + 90; // Offset by 90 degrees to start from the bottom
//   const x = cx + length * Math.cos(Math.PI * needleAngle / 180);
//   const y = cy + length * Math.sin(Math.PI * needleAngle / 180);
  
//   return (
//     <Layer key={`needle-${value}`}>
//       <line
//         x1={cx}
//         y1={cy}
//         x2={x}
//         y2={y}
//         stroke={color}
//         strokeWidth={2}
//         pointerEvents="none"
//       />
//       <circle cx={cx} cy={cy} r={3} fill={color} stroke="none" />
//     </Layer>
//   );
// };

// const QuickSettings = () => {
//   return (
//     <Paper sx={{ width: 342, height: 260, padding: 2 }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="subtitle1">Quick Settings</Typography>
//         <IconButton size="small">
//           <MoreVert fontSize="small" />
//         </IconButton>
//       </Box>
//       <Box display="flex" justifyContent="space-between">
//         <List>
//           {quickSettings.map((item, index) => (
//             <ListItem key={index} disableGutters>
//               <Box display="flex" alignItems="center">
//                 {item.icon}
//                 <ListItemText primary={item.name} sx={{ ml: 1 }} />
//               </Box>
//             </ListItem>
//           ))}
//         </List>
//         <Box display="flex" flexDirection="column" alignItems="center">
//           <Typography variant="body2">Profile Completion</Typography>
//           <PieChart width={120} height={120}>
//             <Pie
//               data={gaugeData}
//               cx="50%"
//               cy="50%"
//               startAngle={180}
//               endAngle={0}
//               innerRadius={40}
//               outerRadius={60}
//               paddingAngle={0}
//               dataKey="value"
//             >
//               {gaugeData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//               {renderNeedle(75, gaugeData, 60, 60, 40, 60, '#000')} {/* Render needle at 75 */}
//             </Pie>
//           </PieChart>
//           <Box display="flex" justifyContent="space-between" width="100%" mt={-1}>
//             <Typography variant="caption">0%</Typography>
//             <Typography variant="caption">100%</Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Paper>
//   );
// };

// export default QuickSettings;




import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { MoreVert, Settings, Subscriptions, Autorenew, EmojiEvents, ExitToApp } from '@mui/icons-material';
import { PieChart, Pie, Cell } from 'recharts';

const quickSettings = [
  { name: 'Settings', icon: <Settings fontSize="small" /> },
  { name: 'Subscription', icon: <Subscriptions fontSize="small" /> },
  { name: 'Auto Renewal', icon: <Autorenew fontSize="small" /> },
  { name: 'Achievements', icon: <EmojiEvents fontSize="small" /> },
  { name: 'Auto Renewal', icon: <Autorenew fontSize="small" /> },
  { name: 'Achievements', icon: <EmojiEvents fontSize="small" /> },
  { name: 'Logout', icon: <ExitToApp fontSize="small" /> },
];

const gaugeData = [
  { value: 75, color: '#00C49F' },
  { value: 25, color: '#d5d5d5' },
];

const QuickSettings = () => {
  return (
    <Paper sx={{ width: 342, height: 260, padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle1">Quick Settings</Typography>
        <IconButton size="small">
          <MoreVert fontSize="small" />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <List>
          {quickSettings.map((item, index) => (
            <ListItem key={index} disableGutters>
              <Box display="flex" alignItems="center">
                {item.icon}
                <ListItemText primary={item.name} sx={{ ml: 1 }} />
              </Box>
            </ListItem>
          ))}
        </List>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="body2">Profile Completion</Typography>
          <PieChart width={120} height={120}>
            <Pie
              data={gaugeData}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={40}
              outerRadius={60}
              paddingAngle={0}
              dataKey="value"
            >
              {gaugeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <Box display="flex" justifyContent="space-between" width="100%" mt={-1}>
            <Typography variant="caption">0%</Typography>
            <Typography variant="caption">100%</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default QuickSettings;
