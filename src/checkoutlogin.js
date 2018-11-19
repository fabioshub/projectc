import React, { Component } from 'react';
import './login.css'
import Product from './product'
import { Link } from 'react-router-dom';

class Checkoutlogin extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)

  }

  render() {
    return(
      <div class="container login-container" style={{marginTop: "130px"}}>
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Inloggen</h3>
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Vul je email in *"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Vul je wachtwoord in *"/>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Log in" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd">Wachtwoord vergeten?</a>
                        </div>
                    </form>
                </div>
                <div class="col-md-6 login-form-2">
                    <h3>Registreren</h3>
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Vul je email in *"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Vul je wachtwoord in *"/>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Registreer" />
                        </div>
                        <div class="form-group">

                            <a href="#" class="ForgetPwd" value="Login">Wachtwoord vergeten?</a>
                        </div>
                    </form>
                </div>
            </div>
            <br/>
            <h3>of</h3>
            <br/>
            <Link to="/payscreen"><button style={{fontSize: '17px', fontWeight: "300", padding: "10px", backgroundColor: "rgb(45, 82, 163)", border: "none"}} type="button" id="addtocartbtn" class="btn"> ga door als gast</button></Link>
        </div>
    );
  }
}

export default Checkoutlogin;
