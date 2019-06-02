import React, { Component } from  'react'
import {Bar, Line, Pie} from 'react-chartjs-2';
import Badge from 'react-bootstrap/Badge'

class TopMedicamentos extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
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
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <Badge pill variant="info">14</Badge>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <Badge pill variant="info">2</Badge>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Morbi leo risus
                <Badge pill variant="info">1</Badge>
              </li>
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
