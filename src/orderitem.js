import React, { Component } from 'react';
import './historyproduct.css'

class OrderItemHolder extends Component {

  render() {

    return(
      <div className="container" id="productitem" >
        <div className="row">

          <div className="col-xs-12 text-left ">
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Productnaam:</span> {this.props.name}</p>

            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(129, 237, 102)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Order status: </span> {this.props.status}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Besteldatum: </span> {this.props.orderdatum}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Betaalmethode: </span> {this.props.methode}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Ordernummer: </span>{this.props.orderid}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Prijs: </span>{this.props.price}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Hoeveelheid: </span>{this.props.itemsInOrder}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Straat: </span>{this.props.adressStreet}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Stad: </span>{this.props.adressCity}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Huisnummer: </span>{this.props.adressHouseNumber}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Postcode: </span>{this.props.adressZipCode}</p>



          </div>

        </div>

      </div>
    );
  };
}

export default OrderItemHolder;
