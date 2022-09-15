import React from 'react';
import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataMax = props.dataPoints.map(datapoint => datapoint.value)
    const maxValue = Math.max(...dataMax)
    return (
        <div className="chart">
            {props.dataPoints.map(datapoint =>
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={maxValue}
                    label={datapoint.label} />
            )}
        </div>
    );
};

export default Chart;