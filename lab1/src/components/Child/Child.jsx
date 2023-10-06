import React, { Component } from 'react'

export default class Child extends Component {
    state;
  render() {
    let {name, price} = this.props.productDetails
    return (
      <div className='col-md-4 p-1'>
        <div className='container bg-warning'>
          <h2>Child works</h2>
          <h5>Name: {name}</h5>
          <h5>Price: {price}</h5>
          <button className='btn btn-info m-2' onClick={() => this.props.upDatePrice(this.props.index)}>Increase</button>
          <button className='btn btn-danger m-2' onClick={() => this.props.deleteProduct(this.props.index)}>Delete</button>
        </div>
      </div>
    )
  }
}
