import React, { Component } from 'react';
import './AdminStatsHolder.css'

class AdminUserHolder extends Component {

  render() {

    return(
      <div className="container-fluid" id="productitem" >
        <div className="row">

          <div className="col-xs-12 text-left ">

            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>User ID: </span> {this.props.userid}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Voornaam: </span> {this.props.userfirstname}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Achternaam: </span>{this.props.userlastname}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Email: </span>{this.props.useremail}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Gender: </span>{this.props.usergender}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Geboortedatum: </span> {this.props.userbirth}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Telefoonnummer: </span> {this.props.userphone}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Rol: </span>{this.props.userrole}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Adres ID: </span>{this.props.addressid}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>Straat: </span>{this.props.addressstreet}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>stad: </span>{this.props.addresscity}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>huisnummer: </span>{this.props.addressnumber}</p>
            <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)', fontSize: "15px"}} id="productname"><span style={{color: "black"}}>zipcode: </span>{this.props.addresszip}</p>

          </div>
        </div>

      </div>
    );
  };
}

export default AdminUserHolder;
