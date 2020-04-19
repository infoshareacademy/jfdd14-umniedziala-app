import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, LabelList, ResponsiveContainer, Legend } from "recharts";
import { AttractionsContext } from "../../contexts/AttractionsContext";

function FavBarChart() {
  const attractionData = useContext(AttractionsContext);
  const { attractionList } = attractionData;

  const countAttractionsInLocationAndPriceRange = (priceRange, location) => {
    return attractionList.filter(item => {
      return item.priceRange === priceRange && item.location === location
    }).length;
  };
  
  const data = [
    {
      priceRange: "darmowe",
      Gdynia: countAttractionsInLocationAndPriceRange("darmowe", "Gdynia"),
      Sopot: countAttractionsInLocationAndPriceRange("darmowe", "Sopot"),
      Gdańsk: countAttractionsInLocationAndPriceRange("darmowe", "Gdańsk")
    },
    {
      priceRange: "tanio",
      Gdynia: countAttractionsInLocationAndPriceRange("tanio", "Gdynia"),
      Sopot: countAttractionsInLocationAndPriceRange("tanio", "Sopot"),
      Gdańsk: countAttractionsInLocationAndPriceRange("tanio", "Gdańsk")
    },
    {
      priceRange: "umiarkowanie",
      Gdynia: countAttractionsInLocationAndPriceRange("umiarkowanie", "Gdynia"),
      Sopot: countAttractionsInLocationAndPriceRange("umiarkowanie", "Sopot"),
      Gdańsk: countAttractionsInLocationAndPriceRange("umiarkowanie", "Gdańsk")
    },
    {
      priceRange: "drogo",
      Gdynia: countAttractionsInLocationAndPriceRange("drogo", "Gdynia"),
      Sopot: countAttractionsInLocationAndPriceRange("drogo", "Sopot"),
      Gdańsk: countAttractionsInLocationAndPriceRange("drogo", "Gdańsk")
    }
  ]
    
  
  return (
    <ResponsiveContainer aspect={1} width="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis type="number" hide={true} />
        <YAxis type="category" dataKey="priceRange" width={120} axisLine={false} tickLine={false} />
        <Bar dataKey="Gdynia" fill="var(--color-blue)" barSize={16}>
          <LabelList dataKey="Gdynia" position="right" />
        </Bar>
        <Bar dataKey="Sopot" fill="var(--color-yellow)" barSize={16}>
          <LabelList dataKey="Sopot" position="right" />
        </Bar>
        <Bar dataKey="Gdańsk" fill="var(--color-blue2)" barSize={16}>
          <LabelList dataKey="Gdańsk" position="right" />
        </Bar>
        <Legend iconType="circle" iconSize={18} height={1} />
      </BarChart>
    </ResponsiveContainer>
    
  );
  
}

export default FavBarChart;
