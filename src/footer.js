import React, { Component } from 'react';
import './footer.css'


class Footer extends Component {
  render() {
    return(
      <footer id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-xs-12 text-center-xs text-left-sm ">
              <img style={{marginLeft: "30px"}}src="" width="100px" height="100px"></img>
            </div>
            <div></di>


            <div className="col-xs-6 col-sm-2 col-md-2 ">
					<ul className="list-unstyled quick-links">
						<li><a href="#">Home</a></li>
						<li><a href="#">Wishlist</a></li>
						<li><a href="#">Cart</a></li>
						<li><a href="#">Contact us</a></li>
					</ul>
				</div>
        <div className="col-xs-6 col-sm-4 col-md-4">
      <ul className="list-unstyled quick-links-2">
        <li><a href="#">Search</a></li>
        <li><a href="#">T & C's</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
    <div className="col-md-4 col-sm-4  col-xs-12 text-center">
      <p style={{marginTop: '10px;', color: 'white'}}>Get out newsletter</p>
      <form className="navbar-form navbar-left">
        <div className="form-group" id="signup">
          <input type="text" className="form-control border " placeholder="Enter your Email "/>
        </div>
        <button id="searchsubmitbutton" type="submit" className="btn btn-default">Sign up!</button>
      </form>
    </div>
          </div>
        </div>

      </footer>
    );
  };
}

export default Footer;
