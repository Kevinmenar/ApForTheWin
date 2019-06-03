import React, { Component } from "react";
import './VisualizarComentarios.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {db} from './Firebase/firebase'

const initialList = [ //aqui es donde esperaria que se solicitara la info de los comentarios que posee la farmacia
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
];

export default class VisualizarComentarios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      name: ''
    };
  }


  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleButtonEvent = (event) => {
    let pharmacyId = ""
    db.ref().child('Pharmacy/').orderByChild("nombre").equalTo(this.state.name)
    .on("value", (snapshot) => {
      let pharmacy = snapshot.val();
      Object.keys(pharmacy).map((item, i) => {
        console.log("item ", item);
        pharmacyId = item;
      });
      if (pharmacyId != "") {
        let listCommentaries = [];
        db.ref().child('Commetaries/' + pharmacyId)
        .on("value", (snapshot) => {
          let commentary = snapshot.val();
          Object.keys(commentary).map((item, i) => {
            console.log("commentary[item] ", commentary[item]);
            listCommentaries[i] = commentary[item];
          });
          this.setState({
            list: listCommentaries
          });
        });
      }
    });
    console.log("pharmacyId ", pharmacyId);

    console.log("Event");
  }

  render() {
    return(
      <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <Form.Group controlId="nombreFarmacia" bsSize="large">
            <Form.Label>Ingrese el nombre de la farmacia: </Form.Label>
            <Form.Control
              autoFocus
              type="nombreFarmacia"
              value={this.state.name}
              onChange={(e)=>{this.handleChange(e)}}
            />
          </Form.Group>
          <Button onClick={(e) => {this.handleButtonEvent(e)}} variant="dark" size="lg" block >
            Buscar comentario
          </Button>
          <div class="row">
                <div class="col-md-8">
              <h3>
                Comentarios
              </h3>
              <div id="card-485932">
                        {this.state.list.map(item => (
                                <li key={item.id} class="card" >
                                    <a class="card-link" data-toggle="collapse" data-parent="#card-485932">{item.Commentary}</a>
                                    <div id={item.id} class="collapse show">
                  </div>
                                </li>
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