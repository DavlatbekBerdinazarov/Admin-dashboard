import React from 'react';
import MPaper from '../common/MPaper';
import { Box, Stack, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const chartData = {
  labels: ["I chorak", "II chorak", "III chorak", "IV chorak"],
  datasets: [
    {
      label: "Sold",
      data: [70, 90, 21, 90, 25, 91, 100, 90, 21, 90, 25, 91],
      stack: "stack 0",
      backgroundColor: "#a1a9fe",
      barPercentage: 0.6,
      categoryPercentage: 0.6
    },
    {
      label: "Canceled1",
      data: [30, 10, 38, 40, 10, 59, 30, 10, 48, 40, 10, 69],
      stack: "stack 1",
      backgroundColor: "#eb7ca6",
      barPercentage: 0.6,
      categoryPercentage: 0.6
    },
    {
      label: "Canceled2",
      data: [40, 50, 18, 70, 50, 39, 43, 16, 68, 30, 17, 35],
      stack: "stack 2",
      backgroundColor: "#725cff",
      barPercentage: 0.6,
      categoryPercentage: 0.6
    },
    {
      label: "Canceled2",
      data: [40, 50, 18, 70, 50, 39, 33, 16, 68, 30, 17, 65],
      stack: "stack 3",
      backgroundColor: "#5caffc",
      barPercentage: 0.6,
      categoryPercentage: 0.6
    },
  ]
};

const charOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false },
      stacked: true
    },
    y: { stacked: true }
  },
  plugins: {
    legend: { display: false },
    title: { display: false }
  },
  elements: {
    bar: {
      borderRadius: 15
    }
  }
};
const WorkEffectStatistics = () => {
  return (
    <MPaper title="Statistic">
      <Stack spacing={4}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            Spending Statistics
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
              <Stack direction="row" alignItems="center">
                <ArrowBackIosIcon sx={{ color:"#333", fontSize:"13px", }}/>
                <Typography variant="subtitle2" sx={{paddingLeft: "8px", paddingRight: "8px"}}>
                  2024
                </Typography>
                <ArrowForwardIosIcon  sx={{ color:"#333", fontSize:"13px", }}/>
              </Stack>
          </Stack>
        </Stack>
        <Box>
          <Bar options={charOptions} data={chartData} height="300px" />
        </Box>
        {/* bar chart */}
      </Stack>
    </MPaper>
  );
};

export default WorkEffectStatistics;