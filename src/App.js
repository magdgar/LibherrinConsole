import logo from './logo.svg';
import './App.css';
import { Card, PieClassic, LineChart1 } from './ui-components';

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const data = [
  { name: 'SWISS01', value: 400 },
  { name: 'GER02', value: 300 },
  { name: 'HUNG00', value: 300 },
];

const data1 = [
  {
    name: 'Feb',
    SWISS01: 15,
    GER02: 30,
    HUNG00: 50,
    amt: 2400,
  },
  {
    name: 'Mar',
    SWISS01: 16,
    GER02: 18,
    HUNG00: 30,
    amt: 2210,
  },
  {
    name: 'Apr',
    SWISS01: 14,
    GER02: 15,
    HUNG00: 10,
    amt: 2290,
  },
  {
    name: 'May',
    SWISS01: 16,
    GER02: 18,
    HUNG00: 30,
    amt: 2000,
  },
  {
    name: 'Jun',
    SWISS01: 15,
    GER02: 12,
    HUNG00: 20,
    amt: 2181,
  },
  {
    name: 'Jul',
    SWISS01: 14,
    GER02: 22,
    HUNG00: 30,
    amt: 2500,
  },
  {
    name: 'Aug',
    SWISS01: 15,
    GER02: 20,
    HUNG00: 50,
    amt: 2100,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  }
}

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }} >
        <LineChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="SWISS01" stroke="#8884d8" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="GER02" stroke="#1234d8" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="HUNG00" stroke="#82ca9d" />
        </LineChart>    
<PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            nameKey= "name"
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      <LineChart1/>
    </div>
  );
}

export default App;
