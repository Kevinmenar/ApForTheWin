import React, { Component } from  'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import Badge from 'react-bootstrap/Badge'
import MedicineItem from './MedicineItem'

class TopMedicamentos extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  componentWillMount(){
    this.getChartData();
    //this.testArr = this.state.chartData.labels.map( function(x, i){
    //    return {"name": x, "quantity": this.state.chartData.datasets.data[i]}
    //  }.bind(this));
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      testArr: [{name:"Parecetamol",quantity:50}],
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
    },
    () => {
      this.state.testArr = this.state.chartData.labels.map((name, index) => (
        {"name":name, "quantity": this.state.chartData.datasets[0].data[index]}
      ));
      console.log(this.state.testArr);
    }
  );
  }


  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 align="center">Medicamentos más consultados</h1>
        <div className="row row-no-gutters">
          <div className="col-sm-4">
            <ul className="list-group">
              {this.state.testArr.map((item) => (
                <MedicineItem name={item.name} quantity={item.quantity}/>
              ))}
            </ul>
          </div>
          <div className="col-sm-8">
            <Bar
              data={this.state.chartData}
              options={{
                title:{
                  display:this.props.displayTitle,
                  text:'Gráfica',
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
                }
              }}
            />
          </div>
        </div>
      </div>


    )
  }
}

export default TopMedicamentos
