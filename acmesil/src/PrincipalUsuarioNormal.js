import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//import "./EscogerFarmacia.css";

export default class PrincipalUsuarioNormal extends Component {
  constructor(props) {
    super(props);

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

      <div class="container-fluid">
      	<div class="row">
      		<div class="col-md-12">
      			<h3 class="text-center text-primary">
      				ACMECIL
      			</h3>
      			<div class="row">
      				<div class="col-md-12">

      					<button type="button" class="btn btn-outline-primary btn-lg btn-block active">
      						Realizar comentarios
      					</button>
      				</div>
      			</div>
      			<div class="row">
      				<div class="col-md-12">
      				</div>
      			</div>
      			<div class="row">
      				<div class="col-md-12">

      					<button type="button" class="btn btn-outline-primary btn-lg btn-block active">
      						Visualizar comentarios
      					</button>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>


    );
  }
}
