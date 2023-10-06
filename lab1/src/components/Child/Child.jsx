import React, { Component } from 'react'

export default class Child extends Component {
    state;
  render() {
    let {name, price} = this.props.productDetails
    return (
      <div className='col-md-4'>
        <div className='container bg-success p-2'>
        <h2>Child works</h2>
          <h5>Name: {name}</h5>
          <h5>Price: {price}</h5>
          <button className='btn btn-info' onClick={() => this.props.upDatePrice(this.props.index)}>Increase</button>
        </div>
      </div>
    )
  }
}
