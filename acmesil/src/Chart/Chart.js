import React, { Component } from  'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import Badge from 'react-bootstrap/Badge'
import MedicineItem from './MedicineItem'
import {db} from '../Firebase/firebase'

class Chart extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      testArr:[]
    }
  }

  componentWillMount(){
    this.getChartData();
  }


  getChartData(){
    // Ajax calls here
    this.dbref = db.ref().child('Usuarios').orderByChild('login').limitToLast(10);
    console.log(this.dbref);
    var labels = [];
    var queries = [];
    var testArr = [];
    this.dbref.on('value',
      (snapshot) => {
        snapshot.forEach(
            (childSnapshot) => {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                labels.unshift(childData.nombre);
                queries.unshift(childData.login);
                testArr.unshift({"name":childData.nombre, "id":childKey, "quantity":childData.login});
        });
        this.setState({
            testArr: testArr,
            chartData:{
                labels: labels,
                datasets:[
                {
                    label:'Número de consultas',
                    data:queries,
                    backgroundColor: 'rgba(0, 99, 132, 0.7)'
                }
                ]
            }
            });
    });
    console.log(testArr);

  }

  render() {
    return (
      <div className="container-fluid">
        <h1 align="center">Usuarios más activos</h1>
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

export default Chart
