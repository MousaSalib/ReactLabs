import React, { Component } from 'react';
import Child from '../Child/Child';

export default class Parent extends Component {
  state = {
    userName: "Mousa",
    age: 24,
    education: "ITI",
    products: [
      {
        name: "Js",
        price: 1000,
        id:1
      },
      {
        name: "Css",
        price: 500,
        id: 2
      },
      {
        name: "Html",
        price: 250,
        id: 3
      }
    ]
  }
  upDatePrice = (index) => {
    console.log(index)
    let products = [...this.state.products];
    products[index].price += 10;
    this.setState({products: products})
  }
  render() {
    return (
      <div className='container bg-info'>
        <div className='row p-5'>
          <h1>Parent works!</h1>
          {this.state.products.map((product, index) => <Child key={index} productDetails= {product} upDatePrice = {this.upDatePrice} index={index}/>)}
        </div>
      
      </div>
      
      
    )
  }
}
