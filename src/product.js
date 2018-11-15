import React, { Component } from 'react';
import './product.css'

class Product extends Component {

  render() {

    return(
      <div style={{marginBottom: "10px"}}>
      <div  className="container-fluid text-right" id="productitem" >
        <div className="row">
          <div className="col-sm-4">
            <img src={this.props.image} width="150px" ></img>
          </div>
          <div className="col-sm-8">
            <h1 style={{fontFamily: "Rubik", fontWeight: '400',color:'rgb(71, 71, 71)'}} id="productname">{this.props.name}</h1>
            <h3 style={{fontFamily: "Rubik", fontSize: "13px", fontWeight: '400',color:'rgb(71, 71, 71)'}} id="prijs">{this.props.price}</h3>

          </div>

        </div>
      </div>
      </div>
    );
  };
}

export default Product;
