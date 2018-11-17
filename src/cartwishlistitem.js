import React, { Component } from 'react';
import './product.css'

class CartWLI extends Component {

  render() {

    return(
      <div className="container text-center" id="productitem" >
        <div className="row">
          <div className="col-xs-2">
            <img src={this.props.image} width="180px"></img>
          </div>
          <div className="col-xs-4">
            <h1 style={{fontFamily:'Roboto', fontSize: '23px', fontWeight: '500',color:'rgb(71, 71, 71)'}} id="productname">{this.props.name}</h1>
              <ul style={{color: 'grey'}} >
                {this.props.productSpecification}
              </ul>
          </div>
          <div className="col-xs-6 text-right ">
            <button  type="button" id="instock">Op voorraad</button>

            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)'}} id="productname">{this.props.price}</p>

          </div>
        </div>

      </div>
    );
  };
}

export default CartWLI;
