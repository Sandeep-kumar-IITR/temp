import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { DateRange } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';



const data = [
    { name: 'Jan 02', uv: 60 },
    { name: 'Jan 03', uv: 80 },
    { name: 'Jan 04', uv: 50 },
    { name: 'Jan 05', uv: 100 },
    { name: 'Jan 06', uv: 30 },
    { name: 'Jan 07', uv: 60 },
];

const campaignData = [
    { name: 'Facebook Campaign', value: 80 },
    { name: 'Twitter Campaign', value: 70 },
    { name: 'Conventional Media', value: 40 },
    { name: 'Billboards', value: 60 },
];

export default function NetworkActivities() {
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box display="flex" justifyContent="space-between" alignItems="center" >
                    <Typography variant="h6">Network Activities</Typography>
                    <Typography variant="subtitle1" color="textSecondary">Graph title sub-title</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <DateRange fontSize="small" />
                    <Typography variant="body2" ml={1}>May 30, 2019 - June 28, 2019</Typography>
                </Box>
            </Box>
            {/* <div className='graph_dv'>
                <div className='graph_head'>
                    <Typography variant="h6">Network Activities</Typography>
                    <Typography variant="subtitle1" color="textSecondary">Graph title sub-title</Typography>
                </div>


            </div> */}
            <Box className='graph_plot' display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <AreaChart
                        width={1200}
                        height={250}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </Box>
                {/* <Divider sx={{ my: 2 }} /> */}
                <Box>
                    <Typography variant="h6">Top Campaign Performance</Typography>
                    <List>
                        {campaignData.map((item, index) => (
                            <ListItem  key={index}>

                                <Box width="100%" Width={250} mr={2}>
                                    <ListItemText primary={item.name} />
                                    <Box width={`${item.value}%`} bgcolor="primary.main" height={10} />
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>

    );
};


// import React from 'react';
// import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
// import { DateRange } from '@mui/icons-material';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

// const data = [
//   { name: 'Jan 02', uv: 60 },
//   { name: 'Jan 03', uv: 80 },
//   { name: 'Jan 04', uv: 50 },
//   { name: 'Jan 05', uv: 100 },
//   { name: 'Jan 06', uv: 30 },
//   { name: 'Jan 07', uv: 60 },
// ];

// const campaignData = [
//   { name: 'Facebook Campaign', value: 80 },
//   { name: 'Twitter Campaign', value: 70 },
//   { name: 'Conventional Media', value: 40 },
//   { name: 'Billboards', value: 60 },
// ];

// const NetworkActivities = () => {
//   return (
//     <Box p={2} component={Paper}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Box>
//           <Typography variant="h6">Network Activities</Typography>
//           <Typography variant="subtitle1" color="textSecondary">Graph title sub-title</Typography>
//         </Box>
//         <Box display="flex" alignItems="center">
//           <DateRange fontSize="small" />
//           <Typography variant="body2" ml={1}>May 30, 2019 - June 28, 2019</Typography>
//         </Box>
//       </Box>
//       <AreaChart
//         width={730}
//         height={250}
//         data={data}
//         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//       >
//         <defs>
//           <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//             <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//           </linearGradient>
//         </defs>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <CartesianGrid strokeDasharray="3 3" />
//         <Tooltip />
//         <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
//       </AreaChart>
//       <Divider sx={{ my: 2 }} />
//       <Typography variant="h6">Top Campaign Performance</Typography>
//       <List>
//         {campaignData.map((item, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={item.name} />
//             <Box width="100%" maxWidth={150} mr={2}>
//               <Box width={`${item.value}%`} bgcolor="primary.main" height={10} />
//             </Box>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default NetworkActivities;
