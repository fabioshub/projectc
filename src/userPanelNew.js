import React, { Component } from 'react';
import './userpanelnew.css';
import Product from './product'
import { Link } from 'react-router-dom';
import HistoryItemHolder from './historyitem';
import $ from 'jquery';



class userPanelNew extends Component {
  constructor(props){
    super(props);
    this.fetchUserData = this.fetchUserData.bind(this);

    this.state = {
      cartList: [],
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


          fetch(`http://localhost:5000/api/order/`,{
            host: 'localhost',
            port: 5000,
            // path: '/',
            method: 'GET',

            // rejectUnauthorized: false,
            // requestCert: true,
            // mode: "no-cors",
            headers:{
              // "Access-Control-Allow-Credentials" : true,
              'Authorization' : authstring
            },
              agent: false
            })
            .then(results => {
              console.log("RETRIEVED ITEMS SUCCES!")
              console.log(results)
              return results.json();
            }).then(data => {
              console.log(data)
              this.setState({totalPrice: data.totalPrice})
              let cartList = data.products.map((pic) => {
                console.log(pic)
                // if(false) {
                //   this.state.cartList = [<div className="text-center"><div style={{fontSize: "20px", color: "rgba(71, 73, 88, 0.93)", fontWeight: "500"}}>Je verlanglijstje is leeg :(</div> <br/>
                //             <Link to="/browse"><button style={{fontSize: '17px', fontWeight: "300", padding: "10px", backgroundColor: "rgba(71, 73, 88, 0.93)", border: "none"}} type="button" id="addtocartbtn" class="btn">Let's get shoppin <i className="fas fa-shopping-cart"></i></button></Link></div>
                //             ]
                // } else {
                //
                //
                // }

                return(
                    <div>
                      <HistoryItemHolder orderid={pic.product.orderid} orderdatum={pic.product.orderDate} methode={pic.product.orderPayment} status={pic.product.orderStatus} name={pic.product.productName} ID={pic.product.id} productSpecification={pic.product.productSpecification} price={"€" + pic.product.productPrice/100 } image={pic.product.images}></HistoryItemHolder>
                    </div>
                  )
                  console.log(cartList)
                  console.log(this.state.cartList)

                })


                this.setState({cartList: cartList})



                $(".spinner").fadeOut("fast");
                $(".browsegridder").fadeIn("fast");
                // console.log("ITEM SET IN STATE")
              })



    }

    listView() {
      let listViewList = []
      for (let j = 0; j < this.state.cartList.length; j++) {
        // var randomnbr = Math.floor((Math.random() * 10) + 1);
        listViewList.push(<div className="col-xs-12  text-right" style={{padding: "0px", margin: "0px"}}>{this.state.cartList[j]}</div>)
      }

      console.log(listViewList)
      this.state.listViewList1 = listViewList;

      return this.state.listViewList1;
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
        <div className="container">
          <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">Bestel geschiedenis</h3>

          {this.listView()}
        </div>
      </div>
    );
  };
}

export default userPanelNew;
