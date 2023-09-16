import React from 'react';
import MPaper from '../common/MPaper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, Stack, Typography, colors } from '@mui/material';
import SalaryPieChartForUserKPI from '../common/SalaryPieChartForUserKPI';

const data = [
  {
    title: "Employees Salary",
    value: "$8.000.00",
    color: '#c71432'
  },
  {
    title: "Material Supplies",
    value: "$2.130.00",
    color: "#ba5796"
  },
];

const UserKPIPieChartForUserKPI = () => {
  
  return (
    <MPaper>
      <Stack spacing={3}>
        <Stack display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="p">Spend by category</Typography>
          <MoreHorizIcon/>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" p={3}>
          <Box position="relative">
            <Box width="290px" overflow="hidden">
              <SalaryPieChartForUserKPI/>
            </Box>
            <Box sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}>
              <Typography variant="subtitle2" color={colors.grey[600]}>Overvall Spending</Typography>
              <Typography variant="h5" fontWeight={700}>$76.400</Typography>
            </Box>
          </Box>
        </Stack>
        <Stack spacing={3}>
          {data.map((data, index) => (
            <Stack key={index} direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center">
                <Box sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  bgcolor: data.color,
                  mr: 1
                }} />
                <Typography variant="subtitle2" color={colors.grey[700]}>
                  {data.title}
                </Typography>
              </Stack>
              <Typography variant="subtitle2">
                {data.value}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </MPaper>
  );
};

export default UserKPIPieChartForUserKPI;