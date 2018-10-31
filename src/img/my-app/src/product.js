import React, { Component } from 'react';
import './product.css'

class Product extends Component {

  render() {

    return(
      <div className="container-fluid text-center" id="productitem">
        <ul>

          <li><img src={this.props.image} width="100px" height="100px"></img></li>
          <li><h1 id="productname">{this.props.name}</h1></li>
          <li><h1 id="prijs">{this.props.price}</h1></li>
        <li><button  type="button" id="instock">In stock</button></li>
        <li><button type="button" id="addtocartbtn" class="btn ">Add to cart</button></li>

        </ul>
      </div>
    );
  };
}

export default Product;
