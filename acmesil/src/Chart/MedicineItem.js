import React, { Component } from  'react'
import Badge from 'react-bootstrap/Badge'

class MedicineItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:props.name,
      quantity:props.quantity
    }
  }

  static defaultProps = {
    name: 'Medicamento',
    quantity: 2
  }

  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.state.name}
        <Badge pill variant="info">{this.state.quantity}</Badge>
      </li>
    )
  }
}

export default MedicineItem
