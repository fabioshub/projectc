import React, { Component } from 'react';

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
  }

  render() {
    return(
      <div className="container-fluid" id="productitempage"  style={{marginTop: "130px"}}>
        <div className="row">
            <div className="col-md-12" id="metaPP">
              <div className="row" style={{margin: '0 40px'}}>
                <div className="col-md-12">
                  <h1 style={{marginBottom: "50px", fontSize: '60px', color: 'rgb(61, 61, 61)'}}>welkom, {this.state.name}</h1>
                </div>
                <div className="col-md-12">
                  <li>
                    <ul>{this.state.name}</ul>
                    <ul>{this.state.lastname}</ul>
                    <ul>{this.state.birth}</ul>
                    <ul>{this.state.email}</ul>
                    <ul>{this.state.gender}</ul>
                    <ul>{this.state.tel}</ul>
                  </li>
                </div>

                <div className="col-md-12" style={{marginTop: '20px'}}  >
                </div>
              </div>
            </div>

        </div>
        
      </div>
    );
  };
}

export default userPanelNew;
