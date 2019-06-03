import React, { Component } from "react";
import './EscogerFarmacia.css'
import FarmController from './FarmaciController'
import AdminFarmacia from './AdminFarm';
import {db} from './Firebase/firebase'

const initialList = [ //aqui es donde esperaria que se solicitara la info de las farmacia
  { id: 'a', name: 'Farmacia1' },
  { id: 'b', name: 'Farmacia2' },
  { id: 'c', name: 'Farmacia3' },
];


export default class VisualizarComentarios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      selectedIndex: -1,
      idCurrentFarmacia: ""
    };
  }

  handleListItemClick = (index) => {
    this.setState({
      selectedIndex: 0,
      idCurrentFarmacia: index
    })
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
          list: pharmacy
        });
      });
  }

  componentWillMount(){
    this.getFarmacias();
  }

  getCurrentView = () => {
    if ( this.state.selectedIndex !== -1) {
      return (
        <AdminFarmacia idFarmacia={this.state.idCurrentFarmacia}/>
      );
    } else {
      return(null);
    }
  }

  render() {
    return (
    <div className='prueba'>
      <div class="container-fluid">
          <div class="row">
          <div class="col-md-12">
            <h3>
              Escoger una farmacia
            </h3>
            <div class="row">
                  <div class="col-md-8">
                <h3>
                </h3>
                <div id="card-485932">
                          {Object.keys(this.state.list).map((item, index) => (
                                  <li key={item} class="card" >
                                      <a class="card-link" data-toggle="collapse" data-parent="#card-485932">
                                      {this.state.list[item].nombre}
                                      <button key = {1} class="btn btn-secondary" type="button"  onClick={event => this.handleListItemClick(item)}>
                                      Escoger
                                      </button>
                                      </a>
                                  </li>
                              ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main
                  >
                    <div className='prueba' />
                    {this.getCurrentView()}
                  </main>
      </div>
      );
}
};

