import React, { Component } from 'react';
import './AdminStatsHolder.css'

class AdminStatsHolder extends Component {

  render() {

    return(
      <div className="container-fluid" id="productitem" >
        <div className="row">

          <div className="col-xs-6 text-left ">

            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>ItemNummer:</span> {this.props.orderdatum}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>ItemNaam:</span> {this.props.methode}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>ItemNummer:</span>{this.props.orderid}</p>

          </div>
        </div>

      </div>
    );
  };
}

export default AdminStatsHolder;
