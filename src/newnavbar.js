import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import logo from './btb.png';



class Navigationbar extends Component {

  constructor(props){
    super(props);

    this.state = {
      accSymbol : "login | Registreren",
      newmessage: "anus"
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
          console.log(myJson)
          let acciconupdate = myJson[0].firstName;
          this.setState({accSymbol: acciconupdate})
          $("#wishlistbutton").show()
          $("#loguitbutton").show()
          $("#radbutton").show()
          this.radclicker()



        });
      } else {
        $("#wishlistbutton").hide()
        $("#loguitbutton").hide()
        $("#radbutton").hide()


      }

      if(localStorage.getItem("role")) {
        $("#adminbutton").show()
      } else {
        $("#adminbutton").hide()
      }

      $("#kortingcode").hide()


    }

    resettokentonull() {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_id");

      localStorage.removeItem("role")

      window.location.reload();

      localStorage.removeItem('pagina');
      localStorage.removeItem('filters');
      localStorage.removeItem('filterarraylist');


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
      if(this.state.accSymbol == "login | Registreren")
      {return "login"}
      else
      {return "userpanelnew" }

    }

    radclicker() {
      if(localStorage.getItem('kortingbinder'))
      {

        // if kortingbinder contains user_id {}

        let temparray = JSON.parse(localStorage.getItem("kortingbinder"))

        //

        // var foundproduct = false;
        for(var i = 0; i < temparray.length; i++) {
            if ( Object.keys(temparray[i]) == localStorage.getItem('user_id')) {
                 $("#radbutton").hide()
                 this.setState({newmessage: "Korting: " + Object.values(temparray[i]) + "%"})
                 $("#kortingcode").show()
                 // foundproduct = true;
                // break;
            }
        }

        // console.log(keys)




      }

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
              <li style={{background: "white"}}  id="adminbutton"><Link style={{padding: "0"}} to={"/adminpanelnew" }><a id="accSymbol"  style={{color: "rgba(71, 73, 88, 0.93)"}} >Adminpanel</a></Link></li>
                <li style={{background: "white"}}  id="kortingcode"> <a id="accSymbol"  style={{color: "rgba(71, 73, 88, 0.93)", padding: "0", margin: "0"}} >{this.state.newmessage}</a></li>

                <li style={{background: "white"}}  className="radfortuin" id="radbutton"><Link style={{padding: "0"}} to={"/rad" }><a id="accSymbol"  style={{color: "rgba(71, 73, 88, 0.93)"}} >Korting winnen!</a></Link></li>

              <li style={{background: 'rgb(254, 198, 101)' }}  id='browsebutton'><Link to="/browse" style={{padding: "0"}}><a id="browsetext" style={{color: "white"}}>browse</a></Link></li>
              <li  id='wishlistbutton'><Link to="/wishlist" style={{padding: '0'}}><i style={{color: "rgb(246, 115, 97)"}} className='fas fa-heart' ></i> </Link></li>
              <li id="cartbutton"><Link to="/cart" style={{padding: "0", margin: "0px 10px 0px 4px"}}><i style={{color: "rgb(254, 198, 101)"}} className="fas fa-shopping-cart"></i></Link></li>
              <li style={{background: "white"}}  id="browsebutton"><Link style={{padding: "0"}} to={"/" + this.personalclicker() }><a id="accSymbol"  style={{color: "rgba(71, 73, 88, 0.93)"}} >{this.state.accSymbol}</a></Link></li>
              <li style={{}}  id="loguitbutton" style={{padding: "16px"}} onClick={this.resettokentonull}><Link style={{padding: "0"}} to={"/pagina1" } ><a id="accSymbol" style={{color: "rgba(71, 73, 88, 0.93)", cursor: "pointer"}} >log uit</a></Link></li>
            </ul>
          </div>



        </nav>
      )
    }
  }

  export default Navigationbar;
