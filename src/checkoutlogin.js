import React, { Component } from 'react';
import './checkoutlogin.css'
import Product from './product'
import { Link } from 'react-router-dom';
import $ from 'jquery';


class Checkoutlogin extends Component {

  constructor(props){
    super(props);


    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
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
      paymentoption: "PayPal"
    }

  }

  componentWillMount() {
    let authstring = `Bearer ${localStorage.getItem("auth_token")}`

    fetch("http://localhost:5000/api/address/",{
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
        // let street = myJson[0].Street;
        this.setState({straat: myJson.street})
        // let city = myJson[0].City;
        this.setState({stad: myJson.city})
        // let zipcode = myJson[0].ZipCode;
        this.setState({postcode: myJson.zipCode})
        // let housenumber  = myJson[0].HouseNumber;
        this.setState({huis: myJson.houseNumber})

        console.log()
      });
  }





  componentDidMount() {



    window.scrollTo(0, 0)

    if(localStorage.getItem("auth_token")) {
      $(".hidetoo").hide()

}

  $(".stepwizard-row .btn-primary").on("click", function(){

  })


    var navListItems = $('div.setup-panel div a '),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }

    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']input[type='email']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }



        if(isValid) {
            nextStepWizard.removeAttr('disabled').trigger('click');
          }
    });

     $('div.setup-panel div a.btn-primary').trigger('click');

     if (localStorage.getItem("auth_token")) {
       $("#step-1").css("display", "none");
       $("#step-2").css("display", "block");
       $(".step-2-round").addClass("btn-primary");
       $(".step-1-round").removeClass("btn-primary");
       $(".removethisifli").hide()

     }


    $("#paynowboy").on("click", () => {

      if(localStorage.getItem("auth_token")) {

        let authstring = `Bearer ${localStorage.getItem("auth_token")}`
        // console.log(authstring)
        let cartitem = {
          "OrderPaymentMethod": this.state.paymentoption
      }
        // console.log(JSON.stringify(cartitem))
        fetch('http://localhost:5000/api/order', {
          method: 'POST',
          body: JSON.stringify(cartitem),
          type: 'application/json',
          headers: {
            "Content-Type" : 'application/json',
            'Authorization' : authstring
          },
        })


      } else {

        let  jsoncart = JSON.parse(localStorage.getItem('cartforcheckout'));
        console.log(jsoncart)

        let idarray = jsoncart.productIDs.map( (e) => {
          return {
            "ProductId": `${e}`, "CartQuantity" : "1"
        }
        })


        console.log(idarray)


        // console.log(authstring)
        let cartitem2 =
        {
          "Street" : this.state.straat,
          "City" : this.state.stad,
          "ZipCode" : this.state.postcode,
          "HouseNumber" : this.state.huis,
          "OrderPaymentMethod" : this.state.paymentoption,
          "totalPrice" : "10.00",
          "cartItems" : [
		{"ProductId": "1", "CartQuantity": "1"},
	{"ProductId": "2", "CartQuantity": "1"},
	{"ProductId": "2531", "CartQuantity": "1"},
	{"ProductId": "5", "CartQuantity": "1"},
	{"ProductId": "3", "CartQuantity": "1"}
],
            "FirstName" : this.state.firstname,
            "LastName" : this.state.lastname,
            "EmailAddress" : this.state.username
          }
          console.log(cartitem2)

        // console.log(JSON.stringify(cartitem))
        fetch('http://localhost:5000/api/order', {
          method: 'POST',
          body: JSON.stringify(cartitem2),
          type: 'application/json',
          headers: {
            "Content-Type" : 'application/json'
          },
        })

        localStorage.removeItem("arrayInLocalStorage")
      }





    })

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
  onChangeStreet = (e) => {
    this.setState({ straat: e.target.value });
    console.log(e.target.value)
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

  selectpaypal= (e) => {
    this.setState({ paymentoption: "PayPal" });
    console.log(this.state.paymentoption)
  }

  selectvisa= (e) => {
    this.setState({ paymentoption: "Visa Credit" });
    console.log(this.state.paymentoption)

  }

  selectideal= (e) => {
    this.setState({ paymentoption: "iDEAL" });
    console.log(this.state.paymentoption)

  }



  render() {
    return(

              <form className="form" role="form" action="" method="" style={{marginTop: "200px"}}>

                    <div className="container text-left">
            <div className="stepwizard">
                <div className="stepwizard-row setup-panel" style={{cursor: "not-allowed"}}>
                    <div className="stepwizard-step removethisifli">
                        <a href="#step-1" type="button" disabled="disabled" className="btn btn-primary btn-circle step-1-round">1</a>
                        <p>Gegevens</p>
                    </div>
                    <div className="stepwizard-step">
                        <a href="#step-2" type="button" disabled="disabled" className="btn btn-default btn-circle step-2-round">2</a>
                        <p>Overzicht</p>
                    </div>
                    <div className="stepwizard-step">
                        <a href="#step-3" type="button" disabled="disabled" className="btn btn-default btn-circle step-3-round">3</a>
                        <p>Betalen</p>
                    </div>
                    <div className="stepwizard-step">
                        <a href="#step-4" type="button" disabled="disabled" className="btn btn-default btn-circle step-4-round">4</a>
                        <p>Bevestiging</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
                <div className="row setup-content" id="step-1">
                    <div className="col-xs-12">
                        <div className="col-md-12">
                            <h3>Gegevens</h3>

                            <div className="row">
                                <div className="form-group col-xs-4">
                                    <label className="control-label">Voornaam</label>
                                    <input name="voornaam" maxlength="100" type="text" required="required" className="form-control" placeholder="Uw Voornaam"  onChange={this.onChangeName}></input>
                                </div>
                                <div className="form-group col-xs-4">
                                    <label className="control-label">Achternaam</label>
                                    <input name="achternaam" maxlength="100" type="text" required="required" className="form-control" placeholder="Uw Achternaam" onChange={this.onChangeLastname}></input>
                                </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-xs-2">
                                  <label className="control-label">Postcode</label>
                                  <input name="adres" maxlength="6" type="text" required="required" className="form-control" placeholder="2476 GH" onChange={this.onChangeZipcode}></input>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-xs-2">
                                  <label className="control-label">Huisnummer</label>
                                  <input name="huisnummer" maxlength="15" type="text" required="required" className="form-control" placeholder="350" onChange={this.onChangeHouse}></input>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-xs-4">
                                  <label className="control-label">Straatnaam</label>
                                  <input name="straatnaam" maxlength="100" type="text" required="required" className="form-control" placeholder="Wijhaven" onChange={this.onChangeStreet}></input>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-xs-4">
                                  <label className="control-label">Woonplaats</label>
                                  <input name="woonplaats" maxlength="100" type="text" required="required" className="form-control" placeholder="Rotterdam" onChange={this.onChangeCity}></input>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-xs-6">
                                  <label for="email" className="control-label">E-mailadres</label>
                                  <input id="email" name="email" maxlength="100" type="email" required="required" className="form-control" placeholder="Uw email" onChange={this.onChangeUsername}></input>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-xs-4">
                                  <label for="tel" className="control-label">Telefoonnummer</label>
                                  <input id="tel" name="telefoonnummer" maxlength="10" type="tel" required="required" className="form-control" placeholder="Uw telefoonnummer" onChange={this.onChangePhone}></input>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="control-label">Wilt u onze nieuwsbrief ontvangen?</label>
                              <div className="checkbox">
                                  <label className="checkbox-inline"><input type="checkbox" name="welNieuwsBrief"></input></label>
                                </div>
                            </div>

                                <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">Volgende stap</button>
                        </div>
                    </div>
                </div>
                <div className="row setup-content" id="step-2">
                    <div className="col-xs-12">
                        <div className="col-md-12 payingoption">
                          <table className="table table-bordered" style={{marginTop: "40px"}}>
                            <tbody>
                              <tr className="hidetoo">
                              <td>Naam</td>
                              <td>{this.state.firstname}</td>
                            </tr>
                            <tr className="hidetoo">
                            <td >Achternaam</td>
                            <td>{this.state.lastname}</td>
                          </tr>
                          <tr className="hidetoo">
                          <td >e-mailadres</td>
                          <td>{this.state.username}</td>
                        </tr>
                              <tr>
                              <td>straat</td>
                              <td>{this.state.straat}</td>
                            </tr>
                            <tr>
                              <td>stad</td>
                              <td>{this.state.stad}</td>
                            </tr>
                            <tr>
                              <td>postcode</td>
                              <td>{this.state.postcode}</td>
                            </tr>
                            <tr><td>huisnummer</td>
                            <td>{this.state.huis}</td>
                          </tr>



                          </tbody>
                        </table>
                            <button className="btn btn-primary nextBtn btn-lg pull-right" type="button" >Betalen</button>
                        </div>
                    </div>
                </div>
                <div className="row setup-content" id="step-3">
                    <div className="col-xs-12">
                        <div className="col-md-12 payingoption">
                            <h3>U kunt kiezen uit de volgende betaalmogelijkheden:</h3>
                            <div className="form-group">
                                <label className="radio-inline"><input type="radio" name="optradio" onClick={this.selectpaypal}></input></label>
                                <img width="10" src="https://newsroom.mastercard.com/wp-content/uploads/2016/09/paypal-logo.png" alt=""></img>
                            </div>
                            <div className="form-group">

                                <label className="radio-inline"><input type="radio" name="optradio" onClick={this.selectvisa}></input></label>
                                <img width="10px" src="http://icons-for-free.com/free-icons/png/512/2224484.png" alt=""></img>
                            </div>
                            <div className="form-group">

                                  <label className="radio-inline"><input type="radio" name="optradio" onClick={this.selectideal}></input></label>
                                  <img width="10px" src="https://www.ideal.nl/img/statisch/mobiel/iDEAL_512x512.gif" alt=""></img>
                              </div>
                            <button className="btn btn-primary nextBtn btn-lg pull-right" type="button" id="paynowboy" >Betalen</button>
                        </div>
                    </div>
                </div>
                <div className="row setup-content" id="step-4">
                    <div className="col-xs-12">
                        <div>
                            <h3>Bedankt</h3>
                            <p>Bedankt voor je bestelling.</p>
                            <p>We gaan direct voor je aan de slag!</p>
                            <p>Je ontvangt binnen een korte tijd een email over het bezorgmoment van je bestelling.</p>
                        </div>
                    </div>
                </div>

            </div>
  </form>

    );
  }
}

export default Checkoutlogin;
