import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';


class Navigationbar extends Component {

  constructor(props){
    super(props);

    this.state = {
      accSymbol : "login"
    }

  }

  componentDidMount() {
    if (localStorage.getItem("auth_token")) {
      let authstring = `Bearer ${localStorage.getItem("auth_token")}`
      console.log(authstring)
      fetch("http://localhost:5000/api/user/user",{
        host: 'localhost',
        port: 5000,
        method: 'GET',
        type: 'application/json',
        headers:{
          'Authorization' : authstring},
        }).then(response => {
          return response.json();
        }).then(myJson => {
          let acciconupdate = myJson[0].firstName;
          this.setState({accSymbol: acciconupdate})
          $("#wishlistbutton").show()
          $("#loguitbutton").show()


        });
      } else {
        $("#wishlistbutton").hide()
        $("#loguitbutton").hide()

      }
    }

    resettokentonull() {
      localStorage.removeItem("auth_token");
      window.location.reload();


    }
    // backupcode() {
    //   [
    //     <div className="container-fluid" style={{margin: "20px 0"}}>
    //         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    //
    //                   <ul className="nav navbar-nav navbar-left"  id="selection">
    //                     <li><a href="#">Tassen</a></li>
    //                     <li><a href="#">Reistassen</a></li>
    //                     <li><a href="#">Schooltassen</a></li>
    //                     <li><a href="#">Werktassen</a></li>
    //                     <li><a href="#">Rugzakken</a></li>
    //                     <li><a href="#">Portemonnees</a></li>
    //                     <li><a href="#">Koffers</a></li>
    //                     <li><a href="#">Overig</a></li>
    //                   </ul>
    //         </div>
    //     </div>
    //   ]
    personalclicker() {
      if(this.state.accSymbol == "login")
      {return "login"}
      else
      {return "userpanelnew"}

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
              <li style={{background: 'rgba(71, 73, 88, 0.93)', borderRadius: "0 0px 7px 7px" }}  id='browsebutton'><Link to="/browse" style={{padding: "0"}}><a id="browsetext" style={{color: "white"}}>browse</a></Link></li>
              <li  id='wishlistbutton'><Link to="/wishlist" style={{padding: '0'}}><i className='fas fa-heart' ></i> </Link></li>
              <li id="cartbutton"><Link to="/cart" style={{padding: "0", margin: "0px 10px 0px 4px"}}><i style={{color: "rgba(71, 73, 88, 0.93)"}} className="fas fa-shopping-cart"></i></Link></li>
              <li style={{background: "white"}}  id="browsebutton"><Link style={{padding: "0"}} to={"/" + this.personalclicker() }><a id="accSymbol"  style={{color: "rgba(71, 73, 88, 0.93)"}} >{this.state.accSymbol}</a></Link></li>
              <li style={{}}  id="loguitbutton" style={{padding: "16px"}}><Link style={{padding: "0"}} to={"/pagina1" } onClick={this.resettokentonull}><a id="accSymbol" style={{color: "black", cursor: "pointer"}} >log uit</a></Link></li>
            </ul>
          </div>

          <div className="container-fluid" style={{background: "white"}}>
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
