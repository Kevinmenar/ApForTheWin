import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Paracetamol', 'Panadol', 'Ibuprofeno', 'viagra', 'Codeina', 'Cannabis'],
        datasets:[
          {
            label:'Número de consultas',
            data:[
              500,
              300,
              312,
              150,
              40,
              13
            ],
            backgroundColor: 'rgba(0, 99, 132, 0.7)'
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>No tengo vida</h2>
        </div>
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
