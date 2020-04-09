import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, LabelList, ResponsiveContainer } from "recharts";
import { getAttractionsAsArray } from "../../services";

class FavBarChart extends Component {
  state = {
    topData: null,
  };

  componentDidMount() {
    getAttractionsAsArray().then((attractions) => {
      const topData = attractions.slice(0, 5);
      const ratings = [287, 235, 196, 150, 128];

      ratings.forEach((rating, index) => topData[index].rating = rating);

      this.setState({ topData });
    });
  }

  render() {
    const { topData } = this.state;
    if (topData === null) {
      return null;
    }
    return (
      <ResponsiveContainer aspect={460/400} width="100%">
        <BarChart
          // width={460}
          // height={400}
          data={topData}
          layout="vertical"
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis type="number" hide={true} />
          <YAxis type="category" dataKey="name" width={120} />
          <Bar dataKey="rating" fill="var(--color-blue)" barSize={50}>
            <LabelList dataKey="rating" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
    );
  }
}

export default FavBarChart;
