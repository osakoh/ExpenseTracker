import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // convert datapoints to number type
  const dataPointsValues = props.datapoints.map((dataPoint) => dataPoint.value);
  // cal maximum value in expense
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {props.datapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
      {console.log(`totalMaximum: ${totalMaximum}`)}
    </div>
  );
};

export default Chart;
