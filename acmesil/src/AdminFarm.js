import React, { Component } from "react";
import {db} from './Firebase/firebase'
import './AdminFarm.css'

const initialList = [ //aqui es donde esperaria que se solicitara la info de los medicamanetos que posee la farmacia
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
];

const farmaList = [//aqui es donde esperaria que se solicitara la info de las farmacias activas 
    {id: '1', name: 'Farmacia1'},
    {id: '2', name: 'Farmacia2'},
    {id: '3', name: 'Farmacia3'},
    {id: '4', name: 'Farmacia4'},
    {id: '5', name: 'Farmacia5'},
    {id: '6', name: 'Farmacia6'},
];

export default class AdminFarmacia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialList: [],
      farmaList: [],
      nombreFarmacia: ""
    };
  }

  getFarmacias = () => {
    let listPharmacies = []
    db.ref().child('Pharmacy/')
      .on("value", (snapshot) => {
        let pharmacy = snapshot.val();
        //Object.keys(pharmacy).map((item, i) => {
          //listPharmacies[i] = pharmacy[item];
        //});
        this.setState({
          farmaList: pharmacy
        });
      });
  }

  getMedicamentos = () => {
    let listMedicines = [];
    db.ref().child('Medicamentos/').orderByChild("idFarmacia").equalTo(this.props.idFarmacia)
    .on("value", (snapshot) => {
      let medicines = snapshot.val();
      if(medicines!=null){
        listMedicines = medicines;
        //Object.keys(medicines).map((item, i) => {
          //console.log("medicines[item] ", medicines[item]);
          //listMedicines[i] = medicines[item];
        //});
        this.setState({
          initialList: listMedicines
        });
      }
    });
  }

  componentWillMount(){
    this.getFarmacias();
    this.getMedicamentos();
  }

  handleClick = (index) => {
    let newList = this.state.initialList;

    Object.keys(this.state.initialList).map((item, i) => {
      let updateDataFood = {};
      db.ref().child("Medicamentos/" + item).update({
        idFarmacia:index
      })
    });
  };

  render(){
    return (
      <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h3>
          {this.state.nombreFarmacia}
        </h3>
        <div class="row">
              <div class="col-md-8">
            <h3>
              Medicamentos 
            </h3>
            <div id="card-485932">
                      {Object.keys(this.state.initialList).map(item => (
                              <li key={item} class="card" >
                                  <a class="card-link" data-toggle="collapse" data-parent="#card-485932" href="#">{this.state.initialList[item].nombre}</a>
                                  <div id={this.state.initialList[item].price} class="collapse show">
                            <div class="card-body">
                              {item.price}
                            </div>
                </div>
                              </li>
                          ))}
            </div>
          </div>
          <div class="col-md-4">
            <h3>
              Transferir a farmacia.
            </h3>
            <div class="btn-group btn-group-vertical" role="group">
                      {Object.keys(this.state.farmaList).map(item => (
                          <button key = {item} class="btn btn-secondary" type="button" onClick={()=>{this.handleClick(item)}}>
                          {this.state.farmaList[item].nombre}
                          </button>
                          ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
};