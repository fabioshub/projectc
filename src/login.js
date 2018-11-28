import React, { Component } from 'react';
import './login.css'
import Product from './product'

class Login extends Component {

  //

  //submit()
  //fetch(api/account)
  //body: {email: email, password: password}
  //post.response(token)
  //setlocalstorage: token


  render() {
    return(
      <div class="container login-container" style={{    marginTop: "130px"
}}>
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
        </div>
    );
  }
}

export default Login;
