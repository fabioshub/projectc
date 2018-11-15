import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

class Navbarcomplete extends Component {
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
      <Link to="/pagina1"><i id="logo" className="fab fa-html5"></i></Link>
    </div>
    <form className="navbar-form navbar-left hidden-xs">
      <div className="form-group" id="search">
        <input type="text" className="form-control border " placeholder="Search for bags, brands, etc. "/>
      </div>
      <button id="searchsubmitbutton" type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
    </form>
    <ul className="collapse navbar-collapse nav navbar-nav navbar-right" id="rightbuttons">
      <li id="loginbutton"><Link to="/pagina2">Login</Link></li>
      <li id="wishlistbutton"><Link to="/wishlist" style={{padding: "0"}}><i className="fas fa-heart" ></i> </Link></li>
      <li id="cartbutton"><Link to="/cart" style={{padding: "0"}}><i className="fas fa-shopping-cart"></i></Link></li>
    </ul>
  </div>
  <div className="container-fluid">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul className="nav navbar-nav navbar-left" id="selection">
                  <li><a href="#">Male</a></li>
                  <li><a href="#">Female</a></li>
                  <li><a href="#">Handbags</a></li>
                  <li><a href="#">Workbags</a></li>
                  <li><a href="#">Free-Time-Bags</a></li>
                  <li><a href="#">Suitcases</a></li>
                </ul>
      </div>
  </div>

</nav>
    );
  };
}

export default Navbarcomplete;
