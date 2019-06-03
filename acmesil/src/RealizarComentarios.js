import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./RealizarComentarios.css";
import {db} from './Firebase/firebase'

export default class RealizarComentarios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombreFarmacia: "",
      comentario: ""
    };
  }

  validateForm() {
    return this.state.nombreFarmacia.length > 0 && this.state.comentario.length > 0;
  }

  handleTextArea = (e) => {
    this.setState({
      comentario: e.target.value
    });
  }

  handleChange = event => {
    this.setState({
      nombreFarmacia: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleButtonEvent = (event) => {
    let pharmacyId = ""
    db.ref().child('Pharmacy/').orderByChild("nombre").equalTo(this.state.nombreFarmacia)
    .on("value", (snapshot) => {
      let pharmacy = snapshot.val();
      Object.keys(pharmacy).map((item, i) => {
        console.log("item ", item);
        pharmacyId = item;
      });
    });
    
    if(pharmacyId !== "" && this.state.comentario !== "") {
      db.ref().child("Commetaries/" + pharmacyId).push().set({
        Commentary: this.state.comentario
      });
    }
  }

  render() {
    return (

      <div className="RealizarComentarios">
      <div class="form-style-2-heading" bsSize="large">
      <form><Form.Label> Realizar Comentarios </Form.Label> </form>
      </div>
        <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="nombreFarmacia" bsSize="large">
            <Form.Label>Ingrese el nombre de la farmacia: </Form.Label>
            <Form.Control
              autoFocus
              type="nombreFarmacia"
              value={this.state.nombreFarmacia}
              onChange={(e)=>{this.handleChange(e)}}
            />
          </Form.Group>
          <Form.Group controlId="comentario" bsSize="large">
            <label for="field5"><span>Ingrese el comentario acerca de la farmacia: <span class="required"></span></span><textarea name="field5" onChange={(e) => {this.handleTextArea(e)}} class="textarea-field"></textarea></label>
          </Form.Group>
          <div class="form-button" bsSize ="large">
          <Button onClick={(e) => {this.handleButtonEvent(e)}} variant="dark" size="lg" block >
            Ingresar comentario
          </Button>
          </div>
        </form>
      </div>

    );
  }
}

