import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnoutChart({ data }) {
  if (!data || !data.datasets || !Array.isArray(data.datasets)) {
    return <p>Loading chart data...</p>;
  }

  return <Doughnut data={data} />;
}
