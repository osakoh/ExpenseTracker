import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  // calculate the fill height of bar
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    // convert to percentage
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
