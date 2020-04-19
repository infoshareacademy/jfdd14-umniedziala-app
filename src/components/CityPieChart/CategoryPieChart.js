import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { AttractionsContext } from "../../contexts/AttractionsContext";

const COLORS = [
  "var(--color-blue)",
  "var(--color-yellow)",
  "var(--color-blue2)",
  "var(--color-grey)"
];


function CategoryPieChart() {
  const attractionData = useContext(AttractionsContext);
  const { attractionList } = attractionData;

  const countAttractionsInCategory = (categoryName) => {
    return attractionList.filter(item => {
      return item.type === categoryName
    }).length;
  };

  const data = [
    { name: "natura", value: countAttractionsInCategory("natura") },
    { name: "sport", value: countAttractionsInCategory("sport") },
    { name: "kultura", value: countAttractionsInCategory("kultura") },
    { name: "restauracja", value: countAttractionsInCategory("restauracja") }
  ];
  
  return (
    <ResponsiveContainer aspect={1} width="100%">
      <PieChart
      >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          fill="var(--color-blue)"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend iconType="circle" iconSize={18} />
      </PieChart>
    </ResponsiveContainer>
  );
  
}

export default CategoryPieChart;
