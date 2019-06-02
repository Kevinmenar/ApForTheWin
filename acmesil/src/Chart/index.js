import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import MediCount from './medicount'
import {db} from '../Firebase/firebase'

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
                {name: 'Page B', uv: 200, pv: 2600, amt: 2600},
                {name: 'Page C', uv: 600, pv: 2200, amt: 2200},
                {name: 'Page D', uv: 50, pv: 1900, amt: 1900},
                {name: 'Page E', uv: 2000, pv: 1500, amt: 1500},
                {name: 'Page F', uv: 0, pv: 3000, amt: 3000}];

class ChartComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        this.getMedecines();
    }

    getMedecines = () => {
        db.ref().child('Medicamentos/').on("value", (snapshot) => {
            let medecines = snapshot.val();
            let medecinesList = [];
            let idList = []
            if(medecines != null) {
                Object.keys(medecines).map((item, i) => {
                    console.log(item)
                    console.log("Medecines " + medecines[item]);
                    medecinesList[i] = medecines[item];
                });
                this.setState({
                    list: medecinesList
                })
            }
        });
    }

    render() {
        return (
            <div> 
                <div> 
                    <ul>
                        {this.state.list.map(item => (
                            <MediCount key={item.nombre} medecine={item.nombre} count={item.consultas}/>
                        ))}
                    </ul>
                </div>
                <div>
                    <LineChart width={600} height={300} data={this.state.list} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="consultas" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="nombre" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
        );
    }
}

export default ChartComponent;