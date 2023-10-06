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
      },
      {
        name: "Bootstrap",
        price: 250,
        id: 4
      },
      {
        name: "Angular",
        price: 750,
        id: 5
      },
      {
        name: "React",
        price: 800,
        id: 6
      },
      {
        name: "Node Js",
        price: 1000,
        id: 7
      },
      {
        name: "Express",
        price: 200,
        id: 8
      },
      {
        name: "Sass",
        price: 250,
        id: 9
      },
      {
        name: "Jquery",
        price: 300,
        id: 10
      }
    ]
  }

  addProduct = () => {
    const newProduct = {
      name: "anyThing",
      price: 0,
      id: this.state.products.length + 1
    };

    this.setState({products: [...this.state.products, newProduct]})
  };
  
  upDatePrice = (index) => {
    // console.log(index)
    let products = [...this.state.products];
    products[index].price += 10;
    this.setState({products: products})
  };

  deleteProduct = (index) => {
    let products = [...this.state.products];
    products.splice(index, 1);
    this.setState({products: products})
  };

  saveDataInLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(this.state.products));
  }

  componentDidMount() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      this.setState({ products: JSON.parse(savedProducts) });
    }
  }

  componentDidUpdate() {
    this.saveDataInLocalStorage()
  }

  render() {
    return (
      <div className='container bg-info'>
        <div className='row p-5'>
          <h1>Parent works!</h1>
          <button className='btn btn-success m-2' onClick={this.addProduct}>Add Product</button>
          {this.state.products.map((product, index) => <Child key={index} productDetails= {product} upDatePrice = {this.upDatePrice} index={index} deleteProduct = {this.deleteProduct} />)}
        </div>
      
      </div>
      
      
    )
  }
}
