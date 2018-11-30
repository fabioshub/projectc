import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

class Navbarcomplete extends Component {

  componentWillMount() {
    let authstring = `Bearer ${localStorage.getItem("auth_token")}`
    console.log(authstring)
    fetch("http://localhost:5000/api/userinfo/user",{
      host: 'localhost',
      port: 5000,
      method: 'GET',
      type: 'application/json',
      headers:{
        'Authorization' : authstring},
      }).then(function(response) {
      return response.json();
      }).then(function(myJson) {
    console.log(myJson)});

    this.forceUpdate();
  }


  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top" id="Navbar">

        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>

  <div className="container-fluid">
    <div className="navbar-header" id="headernav">
      <Link to="/home"><i id="logo" className="fab fa-html5"></i></Link>
    </div>
    <form className="navbar-form navbar-left hidden-xs">
      <div className="form-group" id="search">
        <input type="text" className="form-control border " placeholder="Zoeken naar tassen, merken, etc. "/>
      </div>
      <button id="searchsubmitbutton" type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
    </form>
    <ul className="collapse navbar-collapse nav navbar-nav navbar-right" id="rightbuttons">
      <li id="loginbutton"><Link to="/login">Login</Link></li>
      <li id="wishlistbutton"><Link to="/wishlist" style={{padding: "0"}}><i className="fas fa-heart" ></i> </Link></li>
      <li id="cartbutton"><Link to="/cart" style={{padding: "0"}}><i className="fas fa-shopping-cart"></i></Link></li>
    </ul>
  </div>
  <div className="container-fluid">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul className="nav navbar-nav navbar-left" id="selection">
                  <li><a href="#">Tassen</a></li>
                  <li><a href="#">Reistassen</a></li>
                  <li><a href="#">Schooltassen</a></li>
                  <li><a href="#">Werktassen</a></li>
                  <li><a href="#">Rugzakken</a></li>
                  <li><a href="#">Portemonnees</a></li>
                  <li><a href="#">Koffers</a></li>
                  <li><a href="#">Overig</a></li>
                </ul>
      </div>
  </div>

</nav>
    );
  };
}

export default Navbarcomplete;
