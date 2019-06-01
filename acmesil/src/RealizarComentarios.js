import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./RealizarComentarios.css";

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


//<label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
//<label for="field2"><span>Email <span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>
//<label><span>Telephone</span><input type="text" class="tel-number-field" name="tel_no_1" value="" maxlength="4" />-<input type="text" class="tel-number-field" name="tel_no_2" value="" maxlength="4"  />-<input type="text" class="tel-number-field" name="tel_no_3" value="" maxlength="10"  /></label>
//<label for="field4"><span>Regarding</span><select name="field4" class="select-field">
//<option value="General Question">General</option>
//<option value="Advertise">Advertisement</option>
//<option value="Partnership">Partnership</option>
//</select></label>
//<label for="field5"><span>Message <span class="required">*</span></span><textarea name="field5" class="textarea-field"></textarea></label>

//<label><span> </span><input type="submit" value="Submit" /></label>
//</form>
//</div>
    );
  }
}

/*
render() {
  return (
    <div className="Login">
      <form onSubmit={this.handleSubmit}>
        <Form.Group controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </Form.Group>
        <Button
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}*/
