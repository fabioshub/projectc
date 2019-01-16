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
      redirect: false,
      messagegoodrbad: []
    };
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    $(".hiddenval").hide()
    $(".stickything3").hide()

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

      if(myJson.login_failure){

        let newobect = [];

        for (var key in myJson) {
              if (myJson.hasOwnProperty(key)) {
          // console.log(key + " -> " + testobject[key]);
          newobect.push(myJson[key])

              }
        }
        console.log(newobect)

        this.setState({messagegoodrbad: newobect})
        window.scrollTo(0, 0)

        $(".ultimateform input").val("")
        $(".hiddenval").slideUp()
        $('.stickything3').show(0).delay(5000).fadeOut(500);
      }

      if (myJson.auth_token) {
        localStorage.setItem('user_id', myJson.id);
        localStorage.setItem('auth_token', myJson.auth_token);
        this.setState({redirect: true})
        window.location.reload();

      }

      if (myJson.role == "Admin") {
        localStorage.setItem('role', "Admin");
      } else {
        localStorage.removeItem('role')

      }


    });

    localStorage.removeItem('pagina');
    localStorage.removeItem('filters');
    localStorage.removeItem('filterarraylist');

    

  }

   handleSubmitRegister(event) {

    event.preventDefault();
    let registerobject = {"EmailAddress": this.state.username, "UserPassword": this.state.password, "FirstName": this.state.firstname, "LastName": this.state.lastname, "BirthDate": this.state.birthdate, "Gender": this.state.gender, "PhoneNumber": this.state.phone, "Street": this.state.straat, "City": this.state.stad, "ZipCode": this.state.postcode, "HouseNumber": this.state.huis}

    console.log(registerobject)

    fetch('http://localhost:5000/api/user/registration', {
      method: 'POST',
      body: JSON.stringify(registerobject),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(results => {

      if(results.status == "200") {
              $(".ultimateform input").val("")
              $(".hiddenval").slideUp()
      }

      window.scrollTo(0, 0)

      $('.stickything3').show(0).delay(5000).fadeOut(500);


      return results.json();
    }).then(data => {
      console.log(data)

      let newobect = [];

      for (var key in data) {
            if (data.hasOwnProperty(key)) {
        // console.log(key + " -> " + testobject[key]);
        newobect.push(data[key])

            }
      }
      console.log(newobect)

      this.setState({messagegoodrbad: newobect})

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
  onChangeGender = (e) => {
    this.setState({ gender: e.target.value });
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


  messageHelper()  {
    let messages = []

    this.state.messagegoodrbad.forEach(essage => {
      messages.push(<li style={{color: "white", margin: "5px 0"}}>{essage}</li>)
    })

    return messages;
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
                      <h4 className="modal-title" id="myModalLabel" >Login</h4>

                        <form id="loginForm" method="POST" className="ultimateform" autocomplete="on" onSubmit={this.handleSubmit}>
                          <div class="form-group">
                            <label for="male">Emailadres</label>

                            <input name="email" type="text" autocomplete="on" class="form-control " placeholder="janwit@hr.nl" onChange={this.onChangeUsername}/>
                          </div>
                          <div class="form-group">
                            <label for="male">Wachtwoord</label>

                            <input type="password" class="form-control " placeholder="Kaas12" onChange={this.onChangePassword}/>
                          </div>
                            <div id="loginErrorMsg" className="alert alert-error hide">Wrong username or password</div>

                            <button type="submit" value="login" name="submit" className="btn btn-success btn-block">Login</button>
                        </form>
                    </div>
                </div>
                <div className="col-xs-6">

                  <div className="well">
                    <h4 className="modal-title" id="myModalLabel">Registreer</h4>

                    <form onSubmit={this.handleSubmitRegister} className="ultimateform">
                        <div class="form-group">
                          <label for="male">Emailadres*</label>

                          <input type="text" class="form-control hiddenvaltrigger" placeholder="janwit@hr.nl" onChange={this.onChangeUsername} required/>
                        </div>
                        <div class="form-group">
                          <label for="male">Wachtwoord*</label>

                          <input type="password" class="form-control hiddenvaltrigger" placeholder="Kaas23" onChange={this.onChangePassword} required/>
                        </div>
                        <div class="hiddenval">
                        <div class="form-group">
                          <label for="male">Naam*</label>

                          <input name="voornaam" type="text" class="form-control " placeholder="Jan" onChange={this.onChangeName} required/>
                        </div>
                        <div class="form-group">
                          <label for="male">Achternaam*</label>

                          <input name="achternaam" type="text" class="form-control " placeholder="Wit" onChange={this.onChangeLastname} required/>
                        </div>
                        <div class="form-group">
                          <label for="male">Man / vrouw*</label>

                          <input type="text" class="form-control " placeholder="Man" onChange={this.onChangeGender} required/>
                        </div>
                        <div class="form-group">
                          <label for="male">Geboortedatum*</label>

                          <input type="text" class="form-control " placeholder="11-11-1980" onChange={this.onChangeBirthdate} required/>
                        </div>
                        <div class="form-group">
                          <label for="male">Telefoonnummer*</label>

                          <input type="text" class="form-control " placeholder="0620305968" onChange={this.onChangePhone} required/>
                        </div>
                        <p class="">Je adres, zodat wij weten waar je producten heen moeten.</p>
                        <div class="form-group">
                          <label for="male">Straat*</label>

                          <input type="text" class="form-control " placeholder="de Pelp" onChange={this.onChangeStreet} required/>
                        </div>

                        <div class="form-group">
                          <label for="male">Stad*</label>

                          <input type="text" class="form-control " placeholder="Rotterdam" onChange={this.onChangeCity} required/>
                        </div>
                        <div class="form-group">
                          <label for="male">Postcode*</label>

                          <input type="text" class="form-control " placeholder="1933RG" onChange={this.onChangeZipcode} required/>
                        </div>
                        <div class="form-group">
                          <label for="male">Huisnummer*</label>

                          <input type="text" class="form-control " placeholder="14E" onChange={this.onChangeHouse} required/>
                        </div>
                        </div>

                          <button type="submit" value="register" name="submit" className="btn btn-success btn-block">Registreer</button>
                      </form>
                  </div>
                </div>
            </div>
        </div>
        </div>

        </div>



        </div>
        <div className=" stickything3 footer navbar-fixed-top content-center" style={{width: "20%", top: "60px"}}>
          <div className="container-fluid" >
            <div className="row">

              <div className="col-sm-12" style={{background: "rgb(254, 198, 101)"}}>
                <ul style={{listStyle: "none", margin: "20px 0 ", padding: "0"}}>{this.messageHelper()}</ul>
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
