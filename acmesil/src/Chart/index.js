import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
                {name: 'Page B', uv: 200, pv: 2600, amt: 2600},
                {name: 'Page C', uv: 600, pv: 2200, amt: 2200},
                {name: 'Page D', uv: 50, pv: 1900, amt: 1900},
                {name: 'Page E', uv: 2000, pv: 1500, amt: 1500},
                {name: 'Page F', uv: 0, pv: 3000, amt: 3000}];

class ChartComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        );
    }
}

export default ChartComponent;