import React, { Component } from 'react';
import './login.css'
import Product from './product'
import { Link, Redirect } from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);

    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      gender: '',
      birthdate: '',
      phone: '',
      redirect: false
    };
  }

  componentDidMount(){
    window.scrollTo(0, 0)

  }

  handleSubmit(event) {
    event.preventDefault();
    let userobject = {UserName: this.state.username, Password: this.state.password}
    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(userobject),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      localStorage.setItem('auth_token', myJson.auth_token);
      window.location.reload();

    });
    this.setState({redirect: true})

  }

  handleSubmitRegister(event) {
    console.log(this.state.username)
    console.log(this.state.password)

    event.preventDefault();
    let registerobject = {UserName: this.state.username, UserPassword: this.state.password}
    fetch('http://localhost:5000/api/user/registration', {
      method: 'POST',
      body: JSON.stringify(registerobject),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      console.log(response)
    })

    let userobject = {UserName: this.state.username, Password: this.state.password}
    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(userobject),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      return response.json();
    })
    .then(myJson => {
      localStorage.setItem('auth_token', myJson.auth_token);
      this.setState({redirect: true})
      this.forceUpdate()
      window.location.reload();

    });



  }

  onChangeUsername = (e) => {
    console.log(this.state.username)
    this.setState({ username: e.target.value });
  }
  onChangePassword = (e) => {
    console.log(this.state.password)
    this.setState({ password: e.target.value });
  }
  onChangeName = (e) => {
    console.log(this.state.firstname)
    this.setState({ password: e.target.value });
  }
  onChangeLastname = (e) => {
    console.log(this.state.lastname)
    this.setState({ password: e.target.value });
  }
  onChangePhone = (e) => {
    console.log(this.state.phone)
    this.setState({ password: e.target.value });
  }




  render() {
    const { username, password } = this.state;

    if (this.state.redirect) {
      return <Redirect to="/pagina1"></Redirect>
    } else {
      return(
        <div class="container login-container" style={{    marginTop: "130px"
        }}>

        <div class="row">

          <div class="col-md-6 login-form-1">

            <h3>Inloggen</h3>
            <form onSubmit={this.handleSubmit} >
              <div class="form-group">
                <input type="username" class="form-control" placeholder="Vul je email in *" onChange={this.onChangeUsername} />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Vul je wachtwoord in *" onChange={this.onChangePassword}/>
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
            <form onSubmit={this.handleSubmitRegister} >
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Vul je email in *" onChange={this.onChangeUsername}/>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Vul je wachtwoord in *" onChange={this.onChangePassword}/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Vul je naam in *" onChange={this.onChangeName}/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Vul je achternaam in *" onChange={this.onChangeLastname}/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Vul je telefoonnummer in *" onChange={this.onChangephone}/>
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
}

export default Login;
