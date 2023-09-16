import React from 'react';
import MPaper from './MPaper';
import { Box, Stack, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const chartData = {
  labels: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Expense",
      data: [11000, 6000, 14000, 9000, 7000, 15000, 8000, 10000, 14000, 13000, 11000, 13000],
      stack: "stack 0",
      backgroundColor: [
        "#4623e9",
        "#4623e9",
        "#4623e9",
        "#4623e9",
        "#4623e9",
        "#4623e9",
        "#4623e9",
        "#4623e9",
        "black",
        "#4623e9",
        "#4623e9",
        "#4623e9",
      ],
      
      barPercentage: 0.6,
      categoryPercentage: 0.4,
    }
  ]
};

const charOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: true,
      },
    },
    y: {
      title: {
        display: true,
      },
      beginAtZero: true,
      ticks: {
        stepSize: 500,
        callback: function (value, index, values) {
          if (value === 0) {
            return value;
          } else if (value >= 1000) {
            return value / 1000 + 'k';
          } else {
            return value;
          }
        },
      },
    },
  },
  plugins: {
    legend: { display: false },
    title: { display: false }
  },
  elements: {
    bar: {
      borderRadius: 10
    }
  }
};
const StatisticData = () => {
  return (
    <MPaper>
      <Stack spacing={4}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            Spending Statistics
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            {chartData.datasets.map((data, index) => (
              <Stack key={index} direction="row" alignItems="center">
                <ArrowBackIosIcon sx={{ color:"#333", fontSize:"13px", }}/>
                <Typography variant="subtitle2" sx={{paddingLeft: "8px", paddingRight: "8px"}}>
                  2024
                </Typography>
                <ArrowForwardIosIcon  sx={{ color:"#333", fontSize:"13px", }}/>
              </Stack>
            ))}
          </Stack>
        </Stack>
        {/* bar chart */}
        <Box>
          <Bar options={charOptions} data={chartData} height="300px"/>
        </Box>
        {/* bar chart */}
      </Stack>
    </MPaper>
  );
};

export default StatisticData;;