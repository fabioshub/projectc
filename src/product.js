import React, { Component } from 'react';
import './product.css'

class Product extends Component {

  render() {

    return(
      <div style={{}}>
      <div  className="container-fluid text-center" id="productitem" >
        <ul>

          <li><img src={this.props.image} width="100px" ></img></li>
          <div style={{}}>
            <li><h1 style={{fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)'}} id="productname">{this.props.name}</h1></li>
          </div>
          <div style={{}}>
            <li><h1 id="prijs">{this.props.price}</h1></li>
          </div>
        <li><button  type="button" id="instock">In stock</button></li>

        </ul>
      </div>
      </div>
    );
  };
}

export default Product;
