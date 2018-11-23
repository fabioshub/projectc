import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

class Navigationbar extends Component {

  backupcode() {
    [
      <div className="container-fluid" style={{margin: "20px 0"}}>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul className="nav navbar-nav navbar-left"  id="selection">
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
    ]
  }

  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top" id="Navbar">

        <button style={{}} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>

  <div className="container-fluid" style={{}}>
    <div className="navbar-header" id="headernav">
      <Link to="/pagina1"><i id="logo" className="fab fa-html5"></i></Link>
    </div>


    <ul className="collapse navbar-collapse nav navbar-nav navbar-right" id="rightbuttons">
      <li   style={{background: "brown"}}  id="browsebutton"><Link to="/browse" style={{padding: "0"}}><a id="browsetext">browse</a></Link></li>
      <li  id="wishlistbutton"><Link to="/wishlist" style={{padding: "0"}}><i className="fas fa-heart" ></i> </Link></li>
      <li id="cartbutton"><Link to="/cart" style={{padding: "0", margin: "0px 10px 0px 4px"}}><i className="fas fa-shopping-cart"></i></Link></li>
      <li style={{background: "brown"}}  id="loginbutton"><Link style={{padding: "0"}} to="/login"><i class="fas fa-user-alt"></i></Link></li>
    </ul>
  </div>

  <div className="container-fluid" style={{background: "brown"}}>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul className="nav navbar-nav navbar-left" id="selection">
                <li><a href="#"> <Link to='/browse'>Tassen</Link></a></li>
                <li><a href="#"> <Link to='/browse'>Reistassen</Link></a></li>
                <li><a href="#"> <Link to='/browse'>Schooltassen</Link></a></li>
                <li><a href="#"> <Link to='/browse'>Werktassen</Link></a></li>
                <li><a href="#"> <Link to='/browse'>Rugzakken</Link></a></li>
                <li><a href="#"> <Link to='/browse'>Portemonnees</Link></a></li>
                <li><a href="#"> <Link to='/browse'>Koffers</Link></a></li>
               <li><a href="#"> <Link to='/browse'>Overig</Link></a></li>
                </ul>
      </div>
  </div>

</nav>
    )
  }
}

export default Navigationbar;
