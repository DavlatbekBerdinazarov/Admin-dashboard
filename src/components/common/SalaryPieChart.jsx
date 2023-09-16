import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function SalaryPieChart() {
  return (
    <PieChart
    colors={['#c71432', '#ba5796', '#7c5cfc',"#4120a9","#5caffc",]}
      series={[
        {
          data: [
            { id: 0, value: 40, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 15, label: 'series C' },
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 10, label: 'series B' },
            { id: 2, value: 10, label: 'series C' },
          ],
            innerRadius: 78,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 360,
            cx: 140,
            cy: 95,
        },
      ]}
      width={400}
      height={200}
    />
  );
}