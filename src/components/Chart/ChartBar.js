import React from "react";
import "./ChartBar.css";

const Chartbar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value/props.maxValue)*100)+'%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={/*style wants an object, so we add secondary brackets */{height:barFillHeight, /*backgroundColor:'#3283a8'*/ }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default Chartbar;
