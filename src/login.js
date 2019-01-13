import React, { Component } from 'react';
import './login.css'
import Product from './product'
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';


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
    this.onChangeBirthdate = this.onChangeBirthdate.bind(this);
    this.onChangeStreet = this.onChangeStreet.bind(this);
    this.onChangeZipcode = this.onChangeZipcode.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeHouse = this.onChangeHouse.bind(this);


    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      gender: '',
      birthdate: '',
      straat: '',
      stad: '',
      postcode: '',
      huis: '',
      phone: 0,
      redirect: false
    };
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    $(".hiddenval").hide()

    $(".hiddenvaltrigger").on("click", function() {
      $(".hiddenval").slideDown(500);
    })

  }

  async handleSubmit(event) {
    event.preventDefault();
    let userobject = {EmailAddress: this.state.username, UserPassword: this.state.password}
    await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(userobject),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      console.log(response)
      return response.json();
    })
    .then(myJson => {
      if (myJson.auth_token) {
        localStorage.setItem('auth_token', myJson.auth_token);
        this.setState({redirect: true})
      }

      if (myJson.role == "Admin") {
        localStorage.setItem('role', "Admin");
      } else {
        localStorage.removeItem('role')

      }
      window.location.reload();

    });

  }

   handleSubmitRegister(event) {

    event.preventDefault();
    let registerobject = {"EmailAddress": this.state.username, "UserPassword": this.state.password, "FirstName": this.state.firstname, "LastName": this.state.lastname, "BirthDate": this.state.birthdate, "Gender": this.state.gender, "Phone": this.state.phone, "Street": this.state.straat, "City": this.state.stad, "ZipCode": this.state.postcode, "HouseNumber": this.state.huis}

    console.log(registerobject)

    fetch('http://localhost:5000/api/user/registration', {
      method: 'POST',
      body: JSON.stringify(registerobject),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      console.log(response)
    })

    // window.location.reload();






  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  onChangeName = (e) => {
    this.setState({ firstname: e.target.value });
  }
  onChangeLastname = (e) => {
    this.setState({ lastname: e.target.value });
  }
  onChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  }
  onChangeBirthdate = (e) => {
    this.setState({ birthdate: e.target.value });
  }
  onChangeStreet = (e) => {
    this.setState({ straat: e.target.value });
  }
  onChangeCity = (e) => {
    this.setState({ stad: e.target.value });
  }
  onChangeZipcode = (e) => {
    this.setState({ postcode: e.target.value });
  }
  onChangeHouse= (e) => {
    this.setState({ huis: e.target.value });
  }


  showregister() {
    // $(".hover_bkgr_fricc").toggle()
    $(".registerme").show()
    $("popupCloseButton").on("click", function() {
      $(".hover_bkgr_fricc").hide()

    })
  }




  render() {
    const { username, password } = this.state;

    if (this.state.redirect) {
      return <Redirect to="/pagina1"></Redirect>
    } else {
      return(


        <div  style={{marginTop: "100px"}}>



        <div class="row">



          <div id="login-overlay" className="modal-dialog" style={{zIndex: "0"}}>
        <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="myModalLabel">Login of registreer</h4><br/> <p className="modal-title" id="myModalLabel" style={{fontWeight: "200"}}>Registreer om gebruik te maken van extra functies zoals wenslijsten</p>

        </div>
        <div className="modal-body">
            <div className="row">
                <div className="col-xs-6">

                    <div className="well">
                      <h4 className="modal-title" id="myModalLabel">Login</h4>

                        <form id="loginForm" method="POST" onSubmit={this.handleSubmit}>
                          <div class="form-group">
                            <input type="email" class="form-control " placeholder="Email" onChange={this.onChangeUsername}/>
                          </div>
                          <div class="form-group">
                            <input type="password" class="form-control " placeholder="Wachtwoord" onChange={this.onChangePassword}/>
                          </div>
                            <div id="loginErrorMsg" className="alert alert-error hide">Wrong username or password</div>

                            <button type="submit" value="login" name="submit" className="btn btn-success btn-block">Login</button>
                        </form>
                    </div>
                </div>
                <div className="col-xs-6">

                  <div className="well">
                    <h4 className="modal-title" id="myModalLabel">Registeer</h4>

                    <form onSubmit={this.handleSubmitRegister} >
                        <div class="form-group">
                          <input type="email" class="form-control hiddenvaltrigger" placeholder="Email" onChange={this.onChangeUsername} required/>
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control hiddenvaltrigger" placeholder="Wachtwoord" onChange={this.onChangePassword} required/>
                        </div>
                        <div class="hiddenval">
                        <div class="form-group">
                          <input type="text" class="form-control " placeholder="Naam" onChange={this.onChangeName} required/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control " placeholder="Achternaam" onChange={this.onChangeLastname} required/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control " placeholder="Geboortedatum" onChange={this.onChangeBirthdate} required/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control " placeholder="Telefoonnummer" onChange={this.onChangePhone} required/>
                        </div>
                        <p class="">Je adres, zodat wij weten waar je producten heen moeten.</p>
                        <div class="form-group">
                          <input type="text" class="form-control " placeholder="Straat" onChange={this.onChangeStreet} required/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control " placeholder="Stad" onChange={this.onChangeCity} required/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control " placeholder="Postcode" onChange={this.onChangeZipcode} required/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control " placeholder="Huisnummer" onChange={this.onChangeHouse} required/>
                        </div>
                        </div>

                          <button type="submit" value="register" name="submit" className="btn btn-success btn-block">Registeer</button>
                      </form>
                  </div>
                </div>
            </div>
        </div>
        </div>

        </div>



        </div>

      </div>
    );
    }


}
}

export default Login;
