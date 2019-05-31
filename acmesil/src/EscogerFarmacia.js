import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./EscogerFarmacia.css";

export default class EscogerFarmacia extends Component {
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

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (

      <div className="EscogerFarmacia">
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
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="comentario" bsSize="large">
            <label for="field5"><span>Ingrese el comentario acerca de la farmacia: <span class="required"></span></span><textarea name="field5" class="textarea-field"></textarea></label>
          </Form.Group>
          <div class="form-button" bsSize ="large">
          <Button variant="dark" size="lg" block>
            Ingresar comentario
          </Button>
          </div>
        </form>
      </div>


    );
  }
}
