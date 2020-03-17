import React, { Component } from 'react';
import data from '../../data';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';

console.log(data);
const topData = [data[3], data[10], data[21], data[13], data[25]];
console.log(topData);
topData[0].rating = 287;
topData[1].rating = 235;
topData[2].rating = 196;
topData[3].rating = 150;
topData[4].rating = 128;

class FavBarChart extends Component {
  render() {
    return (
      <BarChart width={600} height={400} data={topData} layout="vertical" margin={{top: 20, right: 20, bottom: 0, left: 20}}>
        <XAxis type="number" hide={true} />
        <YAxis type="category" dataKey="name" width={200} />
        <Tooltip />
        <Bar dataKey="rating" fill="var(--color-blue)" barSize={50}>
          <LabelList dataKey="rating" position="right" />
        </Bar>
      </BarChart>
    );
  }
}

export default FavBarChart;