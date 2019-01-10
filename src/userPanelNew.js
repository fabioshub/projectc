import React, { Component } from 'react';
import './userpanelnew.css'


class userPanelNew extends Component {
  constructor(props){
    super(props);
    this.fetchUserData = this.fetchUserData.bind(this);

    this.state = {
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0)
    this.fetchUserData()
  }

  fetchUserData() {
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
        let name = myJson[0].firstName;
        this.setState({name: name})
        let lastname = myJson[0].lastName;
        this.setState({lastname: lastname})
        let birth = myJson[0].birthDate;
        this.setState({birth: birth})
        let email = myJson[0].emailAddress;
        this.setState({email: email})
        let tel = myJson[0].phoneNumber;
        this.setState({tel: tel})
        let gender = myJson[0].gender;
        this.setState({gender: gender})
      });

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
          this.setState({street: myJson.street})
          // let city = myJson[0].City;
          this.setState({city: myJson.city})
          // let zipcode = myJson[0].ZipCode;
          this.setState({zipcode: myJson.zipCode})
          // let housenumber  = myJson[0].HouseNumber;
          this.setState({housenumber: myJson.houseNumber})
        });

        fetch("http://localhost:5000/api/order/GetOrderOfTheUser",{
          host: 'localhost',
          port: 5000,
          method: 'GET',
          type: 'application/json',
          headers:{
            'Authorization' : authstring},
          }).then(response => {
            return response.json();
          }).then(orderhis => {
            console.log(orderhis)

          });
    }

    render() {
      return(
        <div className="container-fluid" style={{marginTop: "130px"}}  >
          <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">{"Hallo, "+this.state.name+"."}</h3>

          <div className="panel panel-default" >
            <div className="col-xs-12 text-left">
            </div>
            <table className="table table-bordered text-left" id="customers" >
              <tbody>
                
                <tr>
                  <td>Voornaam</td>
                  <td>{this.state.name}</td>
                </tr>
                <tr>
                  <td>Achternaam</td>
                  <td>{this.state.lastname}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.email}</td>
                </tr>

              <tr>
                <td>Geboortedatum</td>
                <td> {this.state.birth}
                </td>
              </tr>
              <tr>
                <td>straat</td>
                <td>{this.state.street}</td>
              </tr>
              <tr>
                <td>stad</td>
                <td>{this.state.city}</td>
              </tr>
              <tr>
                <td>postcode</td>
                <td>{this.state.zipcode}</td>
              </tr>
              <tr><td>huisnummer</td>
              <td>{this.state.housenumber}</td>
            </tr>



            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default userPanelNew;
