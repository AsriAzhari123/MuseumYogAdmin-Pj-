import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'On Progress', value: 30 },
  { name: 'Finished', value: 70 },
];

const COLORS = ['#FFBE9D', '#A5C399'];

const PieChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend align="right" verticalAlign="top" layout="vertical" wrapperStyle={{ top: 20, right: 20 }}>
        {data.map((entry, index) => (
          <span key={`legend-${index}`} style={{ color: COLORS[index % COLORS.length] }}>
            {entry.name}
          </span>
        ))}
      </Legend>
      <text x="40%" y="90%" textAnchor="middle" dominantBaseline="middle">Total Event</text>
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartComponent;
