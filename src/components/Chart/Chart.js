import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value); // we return a value for each dataPoint. So we return an array of values to dataPointsValues
  const totalMaximum = Math.max(...dataPointsValues); //max() wants a list of arguments instead of an array of values. So we spread it, to search for the max value

  return (
    <div className="chart">
      {
        props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label /*month*/}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        )) /* dataPoints is a map, and we want to affect a ChartBar to each dataPoint (element of Datapoints)*/
      }
    </div>
  );
};

export default Chart;
